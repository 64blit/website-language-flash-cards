import React from 'react';
import { useFlashcardStore } from '../store/flashcardStore';
import './Flashcard.css';

export const Flashcard: React.FC = () => {
  const {
    getCurrentCard,
    isFlipped,
    flipCard,
    editCard,
    deleteCustomCard
  } = useFlashcardStore();

  const currentCard = getCurrentCard();

  if (!currentCard) {
    return (
      <div className="card-container">
        <div className="flashcard">
          <div className="card-face front">
            <div className="card-content">
              <div className="card-title">No Cards Available</div>
              <div className="card-text">Please add some cards to get started.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleEditCard = () => {
    editCard(currentCard.id);
  };

  const handleDeleteCard = () => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      deleteCustomCard(currentCard.id);
    }
  };

  return (
    <div className="card-container">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={flipCard}
      >
        <div className="card-face front">
          <div className="card-content">
            <div className="card-title" dangerouslySetInnerHTML={{ __html: currentCard.front.title }} />
            <div className="card-text" dangerouslySetInnerHTML={{ __html: currentCard.front.text }} />
          </div>
        </div>
        <div className="card-face back">
          <div className="card-content">
            <div className="card-title" dangerouslySetInnerHTML={{ __html: currentCard.back.title }} />
            <div className="card-text" dangerouslySetInnerHTML={{ __html: currentCard.back.text }} />
            {isFlipped && (
              <div className="card-actions">
                <button 
                  className="action-btn edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditCard();
                  }}
                >
                  ✏️ Edit
                </button>
                {currentCard.isCustom && (
                  <button 
                    className="action-btn delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCard();
                    }}
                  >
                    🗑️ Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};