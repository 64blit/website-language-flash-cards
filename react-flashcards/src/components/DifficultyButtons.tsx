import React from 'react';
import { useFlashcardStore } from '../store/flashcardStore';
import type { DifficultyLevel } from '../types';
import './DifficultyButtons.css';

export const DifficultyButtons: React.FC = () => {
  const {
    showingDifficultyButtons,
    rateCard
  } = useFlashcardStore();

  const handleRateCard = (difficulty: DifficultyLevel) => {
    rateCard(difficulty);
  };

  if (!showingDifficultyButtons) {
    return null;
  }

  return (
    <div className="difficulty-buttons">
      <div className="difficulty-prompt">How was that card?</div>
      <div className="difficulty-options">
        <button 
          className="diff-btn easy" 
          onClick={() => handleRateCard('easy')}
        >
          😊 Easy
        </button>
        <button 
          className="diff-btn medium" 
          onClick={() => handleRateCard('medium')}
        >
          🤔 Medium
        </button>
        <button 
          className="diff-btn hard" 
          onClick={() => handleRateCard('hard')}
        >
          😰 Hard
        </button>
      </div>
    </div>
  );
};