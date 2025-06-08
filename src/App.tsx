import { useEffect } from 'react';
import { useFlashcardStore } from './store/flashcardStore';
import { Flashcard } from './components/Flashcard';
import { Navigation } from './components/Navigation';
import { DifficultyButtons } from './components/DifficultyButtons';
import { Controls } from './components/Controls';
import { Stats } from './components/Stats';
import { AddCardForm } from './components/AddCardForm';
import JsonEditor from './components/JsonEditor';
import './App.css';

function App() {
  const {
    currentLanguage,
    nextCard,
    previousCard,
    flipCard,
    rateCard,
    showingDifficultyButtons
  } = useFlashcardStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (showingDifficultyButtons) {
          nextCard();
        } else {
          flipCard();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!showingDifficultyButtons) {
          previousCard();
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        flipCard();
      } else if (e.key === '1' && showingDifficultyButtons) {
        e.preventDefault();
        rateCard('easy');
      } else if (e.key === '2' && showingDifficultyButtons) {
        e.preventDefault();
        rateCard('medium');
      } else if (e.key === '3' && showingDifficultyButtons) {
        e.preventDefault();
        rateCard('hard');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showingDifficultyButtons, nextCard, previousCard, flipCard, rateCard]);

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>🌍 Language Learning Flashcards</h1>
          <p className="subtitle">
            Currently learning: {currentLanguage.learningLanguage} → {currentLanguage.nativeLanguage}
          </p>
        </header>

        <div className="instructions">
          Click cards to flip • Rate difficulty after each card • Hard cards appear more often
        </div>

        <Controls />
        <Stats />
        <AddCardForm />
        <JsonEditor />
        <Navigation />
        <Flashcard />
        <DifficultyButtons />

        <div className="keyboard-shortcuts">
          <strong>Keyboard shortcuts:</strong> Arrow keys or Space to navigate • 1/2/3 for Easy/Medium/Hard
        </div>
      </div>
    </div>
  );
}

export default App;
