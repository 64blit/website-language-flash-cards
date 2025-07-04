import type { Card } from '../types';
import { useFlashcardStore } from '../store/flashcardStore';
import { useState } from 'react';
import './JsonEditor.css';

const JsonEditor = () => {
  const { cards, jsonEditorVisible, toggleJsonEditor, importCards } = useFlashcardStore();
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);

  if (!jsonEditorVisible) {
    // Reset initialization flag when modal is closed
    if (isInitialized) {
      setIsInitialized(false);
    }
    return null;
  }

  const handleOpen = () => {
    const jsonString = JSON.stringify(cards, null, 2);
    setJsonText(jsonString);
    setError('');
  };

  const handleSave = () => {
    try {
      const parsedCards: Card[] = JSON.parse(jsonText);
      
      // Validate that it's an array of cards
      if (!Array.isArray(parsedCards)) {
        throw new Error('JSON must be an array of cards');
      }

      // Basic validation of card structure
      for (const card of parsedCards) {
        if (card.id === undefined || card.id === null) {
          throw new Error('Each card must have an id');
        }
        if (!card.front || !card.back) {
          throw new Error('Each card must have front and back content');
        }
        if (!card.front.title || !card.front.text || !card.back.title || !card.back.text) {
          throw new Error('Each card must have front/back title and text');
        }
      }

      importCards(parsedCards);
      setError('');
      toggleJsonEditor();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format');
    }
  };

  const handleCancel = () => {
    setJsonText('');
    setError('');
    toggleJsonEditor();
  };

  const handleClear = () => {
    setJsonText('[]');
    setError('');
    // Clear localStorage
    localStorage.removeItem('flashcard-storage');
    // Import empty array to reset the store
    importCards([]);
  };

  // Initialize JSON when modal opens
  if (!isInitialized && jsonEditorVisible) {
    handleOpen();
    setIsInitialized(true);
  }

  return (
    <div className="json-editor-overlay">
      <div className="json-editor-modal">
        <div className="json-editor-header">
          <h2>Edit Cards JSON</h2>
          <button className="close-button" onClick={handleCancel}>×</button>
        </div>
        
        <div className="json-editor-content">
          <textarea
            className="json-textarea"
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            placeholder="Enter JSON array of cards..."
            spellCheck={false}
          />
          
          {error && (
            <div className="json-error">
              {error}
            </div>
          )}
        </div>
        
        <div className="json-editor-actions">
          <button className="clear-button" onClick={handleClear}>
            Clear All
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default JsonEditor;