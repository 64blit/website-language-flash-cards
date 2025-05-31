import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { FlashcardStore, Card, DifficultyLevel, CardContent, DifficultyStats } from '../types';
import { languageConfigs, getCardsForLanguage } from '../data/languages';

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useFlashcardStore = create<FlashcardStore>()(
  persist(
    immer((set, get) => ({
      // Initial state
      cards: getCardsForLanguage('es-en'),
      deck: getCardsForLanguage('es-en'),
      currentCardIndex: 0,
      isFlipped: false,
      showingDifficultyButtons: false,
      statsVisible: false,
      addCardVisible: false,
      isEditMode: false,
      editingCardId: null,
      currentLanguage: languageConfigs[0],
      availableLanguages: languageConfigs,
      nextCardId: 1000, // Start custom IDs high to avoid conflicts
      customCardCount: 0,

      // Actions
      nextCard: () => set((state) => {
        let newIndex = state.currentCardIndex;
        
        if (newIndex >= state.deck.length - 1) {
          // Reshuffle deck when reaching the end
          const cards = state.cards;
          
          // Sort cards by difficulty priority
          const hardCards = cards.filter(card => card.difficulty === 'hard');
          const mediumCards = cards.filter(card => card.difficulty === 'medium' || card.difficulty === null);
          const easyCards = cards.filter(card => card.difficulty === 'easy');
          
          // Shuffle each group
          const shuffledHard = shuffleArray(hardCards);
          const shuffledMedium = shuffleArray(mediumCards);
          const shuffledEasy = shuffleArray(easyCards);
          
          // Rebuild deck with frequency weighting
          const newDeck = [
            ...shuffledHard, ...shuffledHard, ...shuffledHard, // 3x
            ...shuffledMedium, ...shuffledMedium, // 2x
            ...shuffledEasy // 1x
          ];
          
          // Final shuffle
          state.deck = shuffleArray(newDeck);
          newIndex = 0;
        } else {
          newIndex++;
        }
        
        state.currentCardIndex = newIndex;
        state.isFlipped = false;
        state.showingDifficultyButtons = false;
        
        // Track that this card was shown
        const currentCard = state.deck[newIndex];
        if (currentCard) {
          const cardInOriginalSet = state.cards.find(c => c.id === currentCard.id);
          if (cardInOriginalSet) {
            cardInOriginalSet.timesShown++;
          }
        }
      }),

      previousCard: () => set((state) => {
        state.currentCardIndex = Math.max(0, state.currentCardIndex - 1);
        state.isFlipped = false;
        state.showingDifficultyButtons = false;
      }),

      flipCard: () => set((state) => {
        state.isFlipped = !state.isFlipped;
        state.showingDifficultyButtons = state.isFlipped;
      }),

      rateCard: (difficulty: DifficultyLevel) => set((state) => {
        const currentCard = state.deck[state.currentCardIndex];
        if (!currentCard) return;
        
        // Update difficulty in original cards array
        const cardInOriginalSet = state.cards.find(c => c.id === currentCard.id);
        if (cardInOriginalSet) {
          cardInOriginalSet.difficulty = difficulty;
        }
        
        // Update difficulty in current deck
        currentCard.difficulty = difficulty;
        
        // Reset flip state
        state.isFlipped = false;
        state.showingDifficultyButtons = false;
        
        // Auto-advance to next card
        setTimeout(() => get().nextCard(), 100);
      }),

      shuffleDeck: () => set((state) => {
        state.deck = shuffleArray(state.deck);
        state.currentCardIndex = 0;
        state.isFlipped = false;
        state.showingDifficultyButtons = false;
      }),

      reshuffleDeck: () => set((state) => {
        const cards = state.cards;
        
        // Sort cards by difficulty priority
        const hardCards = cards.filter(card => card.difficulty === 'hard');
        const mediumCards = cards.filter(card => card.difficulty === 'medium' || card.difficulty === null);
        const easyCards = cards.filter(card => card.difficulty === 'easy');
        
        // Shuffle each group
        const shuffledHard = shuffleArray(hardCards);
        const shuffledMedium = shuffleArray(mediumCards);
        const shuffledEasy = shuffleArray(easyCards);
        
        // Rebuild deck with frequency weighting
        const newDeck = [
          ...shuffledHard, ...shuffledHard, ...shuffledHard, // 3x
          ...shuffledMedium, ...shuffledMedium, // 2x
          ...shuffledEasy // 1x
        ];
        
        state.deck = shuffleArray(newDeck);
        state.currentCardIndex = 0;
      }),

      resetProgress: () => set((state) => {
        state.cards = state.cards.map(card => ({
          ...card,
          difficulty: null,
          timesShown: 0
        }));
        state.deck = [...state.cards];
        state.currentCardIndex = 0;
        state.isFlipped = false;
        state.showingDifficultyButtons = false;
      }),

      saveNewCard: (front: CardContent, back: CardContent) => set((state) => {
        const newCard: Card = {
          id: state.nextCardId,
          front,
          back,
          difficulty: null,
          timesShown: 0,
          isCustom: true
        };
        
        state.cards.push(newCard);
        state.deck.push(newCard);
        state.nextCardId++;
        state.customCardCount++;
        state.addCardVisible = false;
        state.isEditMode = false;
        state.editingCardId = null;
      }),

      editCard: (cardId: number) => set((state) => {
        state.editingCardId = cardId;
        state.isEditMode = true;
        state.addCardVisible = true;
      }),

      updateCard: (cardId: number, front: CardContent, back: CardContent) => set((state) => {
        // Update in cards array
        const cardIndex = state.cards.findIndex(c => c.id === cardId);
        if (cardIndex !== -1) {
          state.cards[cardIndex].front = front;
          state.cards[cardIndex].back = back;
        }
        
        // Update in deck array
        const deckCardIndex = state.deck.findIndex(c => c.id === cardId);
        if (deckCardIndex !== -1) {
          state.deck[deckCardIndex].front = front;
          state.deck[deckCardIndex].back = back;
        }
        
        state.addCardVisible = false;
        state.isEditMode = false;
        state.editingCardId = null;
      }),

      deleteCustomCard: (cardId: number) => set((state) => {
        state.cards = state.cards.filter(card => card.id !== cardId);
        state.deck = state.deck.filter(card => card.id !== cardId);
        
        // Adjust current index if needed
        if (state.currentCardIndex >= state.deck.length && state.deck.length > 0) {
          state.currentCardIndex = state.deck.length - 1;
        } else if (state.deck.length === 0) {
          state.currentCardIndex = 0;
        }
        
        state.customCardCount = state.cards.filter(card => card.isCustom).length;
      }),

      toggleStats: () => set((state) => {
        state.statsVisible = !state.statsVisible;
      }),

      toggleAddCard: () => set((state) => {
        state.addCardVisible = !state.addCardVisible;
        if (!state.addCardVisible) {
          state.isEditMode = false;
          state.editingCardId = null;
        }
      }),

      cancelEdit: () => set((state) => {
        state.addCardVisible = false;
        state.isEditMode = false;
        state.editingCardId = null;
      }),

      setLanguage: (languageCode: string) => set((state) => {
        const newLanguage = state.availableLanguages.find(lang => lang.code === languageCode);
        if (newLanguage) {
          state.currentLanguage = newLanguage;
          const newCards = getCardsForLanguage(languageCode);
          state.cards = newCards;
          state.deck = [...newCards];
          state.currentCardIndex = 0;
          state.isFlipped = false;
          state.showingDifficultyButtons = false;
          // Reset custom card counter for new language
          state.customCardCount = 0;
          state.nextCardId = Math.max(...newCards.map(c => c.id)) + 1;
        }
      }),

      addLanguage: (config) => set((state) => {
        if (!state.availableLanguages.find(lang => lang.code === config.code)) {
          state.availableLanguages.push(config);
        }
      }),

      // Computed values
      getCurrentCard: () => {
        const state = get();
        return state.deck[state.currentCardIndex];
      },

      getDifficultyStats: (): DifficultyStats => {
        const state = get();
        return state.cards.reduce(
          (stats, card) => {
            if (card.difficulty === 'easy') stats.easy++;
            else if (card.difficulty === 'medium') stats.medium++;
            else if (card.difficulty === 'hard') stats.hard++;
            else stats.unrated++;
            return stats;
          },
          { easy: 0, medium: 0, hard: 0, unrated: 0 }
        );
      }
    })),
    {
      name: 'flashcard-storage',
      partialize: (state) => ({
        cards: state.cards,
        currentLanguage: state.currentLanguage,
        nextCardId: state.nextCardId,
        customCardCount: state.customCardCount
      })
    }
  )
);