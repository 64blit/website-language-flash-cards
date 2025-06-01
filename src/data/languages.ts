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
  },
  {
    id: 6,
    front: { 
      title: "WHY: Purpose", 
      text: "How do you say 'in order to focus'?<div class='formula'>PARA + unchanged verb</div>" 
    },
    back: { 
      title: "Para enfocarme", 
      text: "<div class='formula'>Para + enfocarme</div><div class='example'>Estudio para aprender</div><div class='example'>Como para tener energía</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 7,
    front: { 
      title: "WHY: So that (with emotion/uncertainty)", 
      text: "How do you say 'so that I can focus' (with subjunctive)?<div class='formula'>PARA + QUE + subjunctive</div>" 
    },
    back: { 
      title: "Para que pueda enfocarme", 
      text: "<div class='formula'>Para + que + pueda enfocarme</div><div class='example'>Como para que tenga energía</div><div class='note'>Uses subjunctive (emotion/uncertainty)</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 8,
    front: { 
      title: "WHEN: After (with subjunctive)", 
      text: "How do you say 'after I study' (with uncertainty)?<div class='formula'>DESPUÉS + (DE) + QUE + subjunctive</div>" 
    },
    back: { 
      title: "Después (de) que estudie", 
      text: "<div class='formula'>Después (de) que + estudie</div><div class='example'>Después que coma</div><div class='note'>E ending for AR verbs, A ending for others</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 9,
    front: { 
      title: "Subjunctive Rule: AR verbs", 
      text: "How do you change 'hablo' to show emotion/uncertainty?" 
    },
    back: { 
      title: "Hable", 
      text: "<div class='formula'>AR verbs change O to E</div><div class='example'>Hablo → Hable</div><div class='example'>Estudias → Estudies</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 10,
    front: { 
      title: "Subjunctive Rule: ER/IR verbs", 
      text: "How do you change 'comemos' to show emotion/uncertainty?" 
    },
    back: { 
      title: "Comamos", 
      text: "<div class='formula'>ER/IR verbs change E/I to A</div><div class='example'>Comemos → Comamos</div><div class='example'>Vives → Vivas</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 11,
    front: { 
      title: "Vocabulary: estudiar", 
      text: "What does 'estudiar' mean?" 
    },
    back: { 
      title: "to study", 
      text: "<div class='example'>Tengo que estudiar español</div><div class='example'>Después de estudiar</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 12,
    front: { 
      title: "Vocabulary: comer", 
      text: "What does 'comer' mean?" 
    },
    back: { 
      title: "to eat", 
      text: "<div class='example'>Tengo que comer</div><div class='example'>Voy a comer después</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 13,
    front: { 
      title: "Vocabulary: ir", 
      text: "What does 'ir' mean?" 
    },
    back: { 
      title: "to go", 
      text: "<div class='example'>Voy a ir</div><div class='example'>Iba a ir pero no pude</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 14,
    front: { 
      title: "Vocabulary: poder", 
      text: "What does 'poder' mean?" 
    },
    back: { 
      title: "to be able", 
      text: "<div class='example'>No pude ir</div><div class='example'>Para que pueda enfocarme</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 15,
    front: { 
      title: "Vocabulary: enfocarme", 
      text: "What does 'enfocarme' mean?" 
    },
    back: { 
      title: "to focus", 
      text: "<div class='example'>Para enfocarme</div><div class='example'>Para que pueda enfocarme</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 16,
    front: { 
      title: "Vocabulary: visitar", 
      text: "What does 'visitar' mean?" 
    },
    back: { 
      title: "to visit", 
      text: "<div class='example'>Voy a visitar</div><div class='example'>El año pasado fui a visitar</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 17,
    front: { 
      title: "Vocabulary: el año pasado", 
      text: "What does 'el año pasado' mean?" 
    },
    back: { 
      title: "last year", 
      text: "<div class='example'>El año pasado fui a España</div><div class='example'>El año pasado estudié mucho</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 18,
    front: { 
      title: "Vocabulary: pero", 
      text: "What does 'pero' mean?" 
    },
    back: { 
      title: "but", 
      text: "<div class='example'>Iba a ir pero no pude</div><div class='example'>Quiero estudiar pero estoy cansado</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 19,
    front: { 
      title: "Vocabulary: tener", 
      text: "What does 'tener' mean?" 
    },
    back: { 
      title: "to have", 
      text: "<div class='example'>Tengo que estudiar</div><div class='example'>Tenía que comer</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 20,
    front: { 
      title: "Vocabulary: aprender", 
      text: "What does 'aprender' mean?" 
    },
    back: { 
      title: "to learn", 
      text: "<div class='example'>Voy a aprender español</div><div class='example'>Para aprender mejor</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 21,
    front: { 
      title: "Vocabulary: llegar", 
      text: "What does 'llegar' mean?" 
    },
    back: { 
      title: "to arrive", 
      text: "<div class='example'>Voy a llegar tarde</div><div class='example'>Después de llegar</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 22,
    front: { 
      title: "Vocabulary: salir", 
      text: "What does 'salir' mean?" 
    },
    back: { 
      title: "to leave", 
      text: "<div class='example'>Tengo que salir</div><div class='example'>Antes de salir</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 23,
    front: { 
      title: "Key Observation", 
      text: "What happens to verbs immediately after PARA?" 
    },
    back: { 
      title: "They remain unchanged", 
      text: "<div class='formula'>PARA + unchanged verb</div><div class='example'>Para estudiar</div><div class='example'>Para comer</div><div class='note'>All verbs after PARA stay in infinitive form</div>" 
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 24,
    front: { 
      title: "Key Observation", 
      text: "What happens to verbs after DE?" 
    },
    back: { 
      title: "They remain unchanged", 
      text: "<div class='formula'>DE + unchanged verb</div><div class='example'>Después de estudiar</div><div class='example'>Antes de comer</div><div class='note'>All verbs after DE stay in infinitive form</div>" 
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