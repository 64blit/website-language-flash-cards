import React, { useState, useEffect } from 'react';
import { useFlashcardStore } from '../store/flashcardStore';
import type { CardContent } from '../types';
import './AddCardForm.css';

export const AddCardForm: React.FC = () => {
  const {
    addCardVisible,
    isEditMode,
    editingCardId,
    cards,
    saveNewCard,
    updateCard,
    cancelEdit
  } = useFlashcardStore();

  const [frontTitle, setFrontTitle] = useState('');
  const [frontText, setFrontText] = useState('');
  const [backTitle, setBackTitle] = useState('');
  const [backText, setBackText] = useState('');

  useEffect(() => {
    if (isEditMode && editingCardId !== null) {
      const card = cards.find(c => c.id === editingCardId);
      if (card) {
        setFrontTitle(card.front.title);
        setFrontText(card.front.text);
        setBackTitle(card.back.title);
        setBackText(card.back.text);
      }
    } else {
      clearForm();
    }
  }, [isEditMode, editingCardId, cards]);

  const clearForm = () => {
    setFrontTitle('');
    setFrontText('');
    setBackTitle('');
    setBackText('');
  };

  const handleSave = () => {
    if (!frontTitle.trim() || !frontText.trim() || !backTitle.trim() || !backText.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const front: CardContent = { title: frontTitle.trim(), text: frontText.trim() };
    const back: CardContent = { title: backTitle.trim(), text: backText.trim() };

    if (isEditMode && editingCardId !== null) {
      updateCard(editingCardId, front, back);
      alert('Card updated successfully!');
    } else {
      saveNewCard(front, back);
      alert('Card added successfully!');
    }
    
    clearForm();
  };

  const handleCancel = () => {
    cancelEdit();
    clearForm();
  };

  if (!addCardVisible) {
    return null;
  }

  return (
    <div className="add-card-form">
      {isEditMode && (
        <div className="edit-mode-indicator">
          ✏️ Editing Card
        </div>
      )}
      
      <h3 className="form-title">
        {isEditMode ? 'Edit Flashcard' : 'Add New Flashcard'}
      </h3>

      <div className="form-group">
        <label htmlFor="front-title">Front Title:</label>
        <input
          id="front-title"
          type="text"
          value={frontTitle}
          onChange={(e) => setFrontTitle(e.target.value)}
          placeholder="e.g., WHAT: Present Obligation"
        />
      </div>

      <div className="form-group">
        <label htmlFor="front-text">Front Text (HTML allowed):</label>
        <textarea
          id="front-text"
          value={frontText}
          onChange={(e) => setFrontText(e.target.value)}
          placeholder="e.g., How do you say 'I have to sleep'?<div class='formula'>TENER + QUE + unchanged verb</div>"
          rows={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="back-title">Back Title:</label>
        <input
          id="back-title"
          type="text"
          value={backTitle}
          onChange={(e) => setBackTitle(e.target.value)}
          placeholder="e.g., Tengo que dormir"
        />
      </div>

      <div className="form-group">
        <label htmlFor="back-text">Back Text (HTML allowed):</label>
        <textarea
          id="back-text"
          value={backText}
          onChange={(e) => setBackText(e.target.value)}
          placeholder="e.g., <div class='formula'>Tengo + que + dormir</div><div class='example'>Tengo que dormir temprano</div>"
          rows={3}
        />
      </div>

      <div className="form-buttons">
        <button className="form-btn save" onClick={handleSave}>
          💾 {isEditMode ? 'Update Card' : 'Save Card'}
        </button>
        <button className="form-btn cancel" onClick={handleCancel}>
          ❌ Cancel
        </button>
      </div>
    </div>
  );
};