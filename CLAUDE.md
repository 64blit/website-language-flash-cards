# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript language learning flashcard application with multi-language support. The app helps users practice language concepts with an adaptive learning system that shows difficult cards more frequently. Built for extensibility to support any language pair.

## Architecture

**React + TypeScript + Vite**: Modern React application with TypeScript for type safety and Vite for fast development/building.

**State Management**: Uses Zustand with persist middleware for elegant state management:

- `useFlashcardStore` hook provides all state and actions
- Zustand persist middleware automatically saves progress to localStorage as `flashcard-storage`
- Immer middleware for immutable state updates
- State includes cards, deck ordering, current position, difficulty ratings, UI state, and language configuration

**Language System**: Extensible multi-language architecture:

- `LanguageConfig` interface defines language metadata (code, names, direction)
- `languageConfigs` array in `src/data/languages.ts` contains available languages
- `getCardsForLanguage()` function returns cards for specific language pairs
- Currently supports Spanish→English and English→Spanish with easy expansion

**Card System**:

- Type-safe `Card` interface with front/back content, difficulty, and metadata
- Custom cards can be added with full CRUD operations
- Each card supports HTML content for rich formatting (formulas, examples)
- Difficulty ratings (easy/medium/hard) for adaptive learning

**Adaptive Learning Algorithm**:

- Hard cards appear 3x in deck, medium 2x, easy 1x  
- Automatic deck reshuffling when reaching the end
- Spaced repetition based on user difficulty ratings

## Key Components

**Store (`src/store/flashcardStore.ts`)**: Zustand store with all state management:

- Card navigation (`nextCard`, `previousCard`, `flipCard`)
- Difficulty rating (`rateCard`, `reshuffleDeck`)
- CRUD operations (`saveNewCard`, `editCard`, `updateCard`, `deleteCustomCard`)
- Language switching (`setLanguage`, `addLanguage`)
- UI state management (`toggleStats`, `toggleAddCard`)

**Components (`src/components/`)**:

- `Flashcard`: Main card display with flip animation and edit/delete actions
- `Navigation`: Card counter and previous/next buttons  
- `DifficultyButtons`: Easy/Medium/Hard rating buttons
- `Controls`: Language selector and control buttons (shuffle, reset, stats, add)
- `Stats`: Difficulty statistics and card counts
- `AddCardForm`: Form for creating/editing cards

**Types (`src/types/index.ts`)**: Comprehensive TypeScript interfaces for type safety

**Data (`src/data/languages.ts`)**: Language configurations and card definitions

## Development Commands

```bash
npm install          # Install dependencies
npm run dev         # Start development server  
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

## Development Notes

- Uses TypeScript strict mode with `verbatimModuleSyntax` - import types with `import type`
- Keyboard navigation supported (arrows, space, 1-3 for difficulty)
- Mobile-responsive design with CSS animations
- All state persisted automatically via Zustand persist middleware
- Component-based architecture for maintainability
- Type-safe throughout with comprehensive interfaces

## Adding New Languages

1. Add new `LanguageConfig` to `languageConfigs` array in `src/data/languages.ts`
2. Create card data array for the new language pair
3. Update `getCardsForLanguage()` function to handle new language code
4. Language will automatically appear in selector dropdown