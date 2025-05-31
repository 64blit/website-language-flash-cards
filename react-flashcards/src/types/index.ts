export type DifficultyLevel = 'easy' | 'medium' | 'hard' | null;

export interface CardContent {
  title: string;
  text: string;
}

export interface Card {
  id: number;
  front: CardContent;
  back: CardContent;
  difficulty: DifficultyLevel;
  timesShown: number;
  isCustom?: boolean;
}

export interface LanguageConfig {
  code: string; // ISO 639-1 code (e.g., 'es', 'en')
  name: string; // Display name (e.g., 'Spanish', 'English')
  learningLanguage: string; // Language being learned
  nativeLanguage: string; // User's native language
  direction: 'ltr' | 'rtl'; // Text direction
}

export interface DifficultyStats {
  easy: number;
  medium: number;
  hard: number;
  unrated: number;
}

export interface AppState {
  // Core data
  cards: Card[];
  deck: Card[];
  
  // Current state
  currentCardIndex: number;
  isFlipped: boolean;
  showingDifficultyButtons: boolean;
  
  // UI state
  statsVisible: boolean;
  addCardVisible: boolean;
  isEditMode: boolean;
  editingCardId: number | null;
  
  // Language configuration
  currentLanguage: LanguageConfig;
  availableLanguages: LanguageConfig[];
  
  // Metadata
  nextCardId: number;
  customCardCount: number;
}

export interface AppActions {
  // Card management
  nextCard: () => void;
  previousCard: () => void;
  flipCard: () => void;
  rateCard: (difficulty: DifficultyLevel) => void;
  
  // Deck management
  shuffleDeck: () => void;
  reshuffleDeck: () => void;
  resetProgress: () => void;
  
  // CRUD operations
  saveNewCard: (front: CardContent, back: CardContent) => void;
  editCard: (cardId: number) => void;
  updateCard: (cardId: number, front: CardContent, back: CardContent) => void;
  deleteCustomCard: (cardId: number) => void;
  
  // UI actions
  toggleStats: () => void;
  toggleAddCard: () => void;
  cancelEdit: () => void;
  
  // Language management
  setLanguage: (languageCode: string) => void;
  addLanguage: (config: LanguageConfig, cards: Card[]) => void;
  
  // Computed values
  getCurrentCard: () => Card | undefined;
  getDifficultyStats: () => DifficultyStats;
}

export type FlashcardStore = AppState & AppActions;