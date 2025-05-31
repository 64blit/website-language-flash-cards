import React from 'react';
import { useFlashcardStore } from '../store/flashcardStore';
import './Stats.css';

export const Stats: React.FC = () => {
  const {
    statsVisible,
    getDifficultyStats,
    cards,
    customCardCount
  } = useFlashcardStore();

  if (!statsVisible) {
    return null;
  }

  const stats = getDifficultyStats();
  const totalCards = cards.length;

  return (
    <div className="stats">
      <div className="stats-grid">
        <div className="stat-item easy">
          <span className="stat-label">Easy:</span>
          <span className="stat-value">{stats.easy}</span>
        </div>
        <div className="stat-item medium">
          <span className="stat-label">Medium:</span>
          <span className="stat-value">{stats.medium}</span>
        </div>
        <div className="stat-item hard">
          <span className="stat-label">Hard:</span>
          <span className="stat-value">{stats.hard}</span>
        </div>
        <div className="stat-item unrated">
          <span className="stat-label">Unrated:</span>
          <span className="stat-value">{stats.unrated}</span>
        </div>
      </div>
      
      <div className="card-counts">
        <div className="count-item">
          <span className="count-label">Total Cards:</span>
          <span className="count-value">{totalCards}</span>
        </div>
        <div className="count-item">
          <span className="count-label">Custom Cards:</span>
          <span className="count-value">{customCardCount}</span>
        </div>
      </div>
    </div>
  );
};