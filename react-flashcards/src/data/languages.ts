import type { LanguageConfig, Card } from '../types';

export const languageConfigs: LanguageConfig[] = [
  {
    code: 'es-en',
    name: 'Spanish → English',
    learningLanguage: 'Spanish',
    nativeLanguage: 'English',
    direction: 'ltr'
  },
  {
    code: 'en-es',
    name: 'English → Spanish',
    learningLanguage: 'English',
    nativeLanguage: 'Spanish',
    direction: 'ltr'
  }
];

export const spanishToEnglishCards: Card[] = [
  {
    id: 0,
    front: { 
      title: "WHAT: Present Obligation", 
      text: "How do you say 'I have to eat'?<div class='formula'>TENER + QUE + unchanged verb</div>" 
    },
    back: { 
      title: "Tengo que comer", 
      text: "<div class='formula'>Tengo + que + comer</div><div class='example'>Tengo que estudiar español</div><div class='example'>Tienes que ir al trabajo</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 1,
    front: { 
      title: "WHAT: Past Obligation", 
      text: "How do you say 'I had to study'?<div class='formula'>TENÍA + QUE + unchanged verb</div>" 
    },
    back: { 
      title: "Tenía que estudiar", 
      text: "<div class='formula'>Tenía + que + estudiar</div><div class='example'>Tenía que comer antes</div><div class='example'>Tenías que ir ayer</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 2,
    front: { 
      title: "WHAT: Future Plans", 
      text: "How do you say 'I'm going to visit'?<div class='formula'>IR + A + unchanged verb</div>" 
    },
    back: { 
      title: "Voy a visitar", 
      text: "<div class='formula'>Voy + a + visitar</div><div class='example'>Voy a comer después</div><div class='example'>Vas a estudiar mañana</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 3,
    front: { 
      title: "WHAT: Past Future Plans", 
      text: "How do you say 'I was going to go'?<div class='formula'>IBA + A + unchanged verb</div>" 
    },
    back: { 
      title: "Iba a ir", 
      text: "<div class='formula'>Iba + a + ir</div><div class='example'>Iba a comer pero no pude</div><div class='example'>Ibas a estudiar ayer</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 4,
    front: { 
      title: "WHEN: After doing something", 
      text: "How do you say 'after eating'?<div class='formula'>DESPUÉS + DE + unchanged verb</div>" 
    },
    back: { 
      title: "Después de comer", 
      text: "<div class='formula'>Después + de + comer</div><div class='example'>Después de estudiar</div><div class='example'>Después de ir al trabajo</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 5,
    front: { 
      title: "WHEN: Before doing something", 
      text: "How do you say 'before studying'?<div class='formula'>ANTES + DE + unchanged verb</div>" 
    },
    back: { 
      title: "Antes de estudiar", 
      text: "<div class='formula'>Antes + de + estudiar</div><div class='example'>Antes de comer</div><div class='example'>Antes de ir a casa</div>" 
    },
    difficulty: null,
    timesShown: 0
  }
];

export const englishToSpanishCards: Card[] = [
  {
    id: 100,
    front: { 
      title: "Present Simple", 
      text: "How do you say 'Yo como'?" 
    },
    back: { 
      title: "I eat", 
      text: "<div class='example'>I eat breakfast every day</div><div class='example'>She eats vegetables</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 101,
    front: { 
      title: "Past Simple", 
      text: "How do you say 'Yo comí'?" 
    },
    back: { 
      title: "I ate", 
      text: "<div class='example'>I ate dinner last night</div><div class='example'>They ate pizza yesterday</div>" 
    },
    difficulty: null,
    timesShown: 0
  }
];

export const getCardsForLanguage = (languageCode: string): Card[] => {
  switch (languageCode) {
    case 'es-en':
      return spanishToEnglishCards;
    case 'en-es':
      return englishToSpanishCards;
    default:
      return spanishToEnglishCards;
  }
};