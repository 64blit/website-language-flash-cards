import React from 'react';
import { useFlashcardStore } from '../store/flashcardStore';
import './Controls.css';

export const Controls: React.FC = () => {
  const {
    shuffleDeck,
    resetProgress,
    toggleStats,
    toggleAddCard,
    setLanguage,
    currentLanguage,
    availableLanguages
  } = useFlashcardStore();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="controls">
      <div className="language-selector">
        <label htmlFor="language-select">Language:</label>
        <select 
          id="language-select"
          value={currentLanguage.code} 
          onChange={handleLanguageChange}
          className="language-select"
        >
          {availableLanguages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="control-buttons">
        <button className="control-btn" onClick={shuffleDeck}>
          🔀 Shuffle
        </button>
        <button className="control-btn" onClick={resetProgress}>
          🔄 Reset Progress
        </button>
        <button className="control-btn" onClick={toggleStats}>
          📊 Stats
        </button>
        <button className="control-btn" onClick={toggleAddCard}>
          ➕ Add Card
        </button>
      </div>
    </div>
  );
};