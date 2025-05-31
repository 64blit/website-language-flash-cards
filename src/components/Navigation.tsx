import React from 'react';
import { useFlashcardStore } from '../store/flashcardStore';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const {
    currentCardIndex,
    deck,
    previousCard,
    nextCard
  } = useFlashcardStore();

  return (
    <div className="navigation">
      <div className="counter">
        Card {currentCardIndex + 1} of {deck.length}
      </div>
      <div className="nav-buttons">
        <button className="nav-btn" onClick={previousCard}>
          ← Previous
        </button>
        <button className="nav-btn" onClick={nextCard}>
          Next →
        </button>
      </div>
    </div>
  );
};