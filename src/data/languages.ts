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

export const spanishEnglishCards: Card[] = [
  {
    id: 0,
    front: {
      title: "About to + Have to",
      text: `How do you say "We are about to leave because we have to arrive early?"<div class='formula'>ESTAR POR + verb … porque + TENER QUE + verb</div>`
    },
    back: {
      title: "Estamos por salir porque tenemos que llegar temprano",
      text: "<div class='formula'>Estamos por salir + porque + tenemos que llegar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 1,
    front: {
      title: "About to + Ir a + Para",
      text: `How do you say "I'm about to decide what I'm going to cook in order to eat healthy?"<div class='formula'>ESTAR POR + decidir + qué + IR A + verb + PARA + verb</div>`
    },
    back: {
      title: "Estoy por decidir qué voy a cocinar para comer sano",
      text: "<div class='formula'>Estoy por decidir + qué + voy a cocinar + para comer</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 2,
    front: {
      title: "Acabar de + Tener que",
      text: `How do you say "She just learned that she has to travel tomorrow?"<div class='formula'>ACABAR DE + verb + que + TENER QUE + verb</div>`
    },
    back: {
      title: "Acaba de aprender que tiene que viajar mañana",
      text: "<div class='formula'>Acaba de aprender + que + tiene que viajar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 3,
    front: {
      title: "Ir a + Antes de + Para que",
      text: `How do you say "They're going to meet before studying so that they can focus better?"<div class='formula'>IR A + verb + ANTES DE + verb + PARA QUE + subj</div>`
    },
    back: {
      title: "Van a reunirse antes de estudiar para que puedan enfocarse mejor",
      text: "<div class='formula'>Van a reunirse + antes de estudiar + para que puedan enfocarse</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 4,
    front: {
      title: "Tener que + Después de + Para que",
      text: `How do you say "We have to practice after arriving so that we can sing well?"<div class='formula'>TENER QUE + verb + DESPUÉS DE + verb + PARA QUE + subj</div>`
    },
    back: {
      title: "Tenemos que practicar después de llegar para que podamos cantar bien",
      text: "<div class='formula'>Tenemos que practicar + después de llegar + para que podamos cantar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 5,
    front: {
      title: "About to + Have to (simple)",
      text: `How do you say "He's about to call because he has to confirm the reservation?"<div class='formula'>ESTAR POR + verb … porque + TENER QUE + verb</div>`
    },
    back: {
      title: "Está por llamar porque tiene que confirmar la reserva",
      text: "<div class='formula'>Está por llamar + porque + tiene que confirmar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 6,
    front: {
      title: "Acabar de + Que + Tener que + Antes de",
      text: `How do you say "I just realized that we have to pay before leaving?"<div class='formula'>ACABAR DE + darse cuenta de que + TENER QUE + verb + ANTES DE + verb</div>`
    },
    back: {
      title: "Acabo de darme cuenta de que tenemos que pagar antes de salir",
      text: "<div class='formula'>Acabo de darme cuenta de que + tenemos que pagar + antes de salir</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 7,
    front: {
      title: "Iba a + Después de + Tenía que",
      text: `How do you say "They were going to leave after eating because they had to buy gifts?"<div class='formula'>IBA A + verb + DESPUÉS DE + verb … porque + TENÍA QUE + verb</div>`
    },
    back: {
      title: "Iban a salir después de comer porque tenían que comprar regalos",
      text: "<div class='formula'>Iban a salir + después de comer + porque + tenían que comprar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 8,
    front: {
      title: "Subj Trigger + Antes de que + Subj",
      text: `How do you say "It's good that we study before we have to present tomorrow?"<div class='formula'>ES + adj + QUE + subj + ANTES DE QUE + subj</div>`
    },
    back: {
      title: "Es bueno que estudiemos antes de que tengamos que presentar mañana",
      text: "<div class='formula'>Es bueno que estudiemos + antes de que tengamos que presentar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 9,
    front: {
      title: "Querer que + Después de + Para que",
      text: `How do you say "I want you to rest after finishing so that you can think clearly?"<div class='formula'>QUERER QUE + subj + DESPUÉS DE + verb + PARA QUE + subj</div>`
    },
    back: {
      title: "Quiero que descanses después de terminar para que puedas pensar con claridad",
      text: "<div class='formula'>Quiero que descanses + después de terminar + para que puedas pensar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 10,
    front: {
      title: "Por + Primero + Tener que",
      text: `How do you say "We're about to leave, but first we have to finish this report?"<div class='formula'>ESTAR POR + verb … pero primero + TENER QUE + verb</div>`
    },
    back: {
      title: "Estamos por irnos, pero primero tenemos que terminar este informe",
      text: "<div class='formula'>Estamos por irnos + pero primero + tenemos que terminar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 11,
    front: {
      title: "Ir a + Antes de + Tener que",
      text: `How do you say "She's going to cook before going out because she has to eat?"<div class='formula'>IR A + verb + ANTES DE + verb … porque + TENER QUE + verb</div>`
    },
    back: {
      title: "Va a cocinar antes de salir porque tiene que comer",
      text: "<div class='formula'>Va a cocinar + antes de salir + porque + tiene que comer</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 12,
    front: {
      title: "Acabar de + Para que + Después de",
      text: `How do you say "I just wrote a note so that they remember after they arrive?"<div class='formula'>ACABAR DE + verb + PARA QUE + subj + DESPUÉS DE + verb</div>`
    },
    back: {
      title: "Acabo de escribir una nota para que recuerden después de llegar",
      text: "<div class='formula'>Acabo de escribir + para que recuerden + después de llegar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 13,
    front: {
      title: "Es posible que + Después de que",
      text: `How do you say "It's possible that he will arrive after we have left?"<div class='formula'>ES POSIBLE QUE + subj + DESPUÉS DE QUE + subj</div>`
    },
    back: {
      title: "Es posible que llegue después de que nos hayamos ido",
      text: "<div class='formula'>Es posible que llegue + después de que nos hayamos ido</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 14,
    front: {
      title: "Tener que + Ir a + Antes de",
      text: `How do you say "They have to decide what they're going to do before the meeting?"<div class='formula'>TENER QUE + verb + qué + IR A + verb + ANTES DE + noun</div>`
    },
    back: {
      title: "Tienen que decidir qué van a hacer antes de la reunión",
      text: "<div class='formula'>Tienen que decidir + qué van a hacer + antes de la reunión</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 15,
    front: {
      title: "Iba a + Pero + Acabar de + Tener que",
      text: `How do you say "I was going to study, but I just learned that we have to leave?"<div class='formula'>IBA A + verb … pero + ACABAR DE + verb + que + TENER QUE + verb</div>`
    },
    back: {
      title: "Iba a estudiar, pero acabo de aprender que tenemos que irnos",
      text: "<div class='formula'>Iba a estudiar + pero + acabo de aprender + que + tenemos que irnos</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 16,
    front: {
      title: "Por + Para + Antes de (noun)",
      text: `How do you say "We're about to start so that we can finish before lunch?"<div class='formula'>ESTAR POR + verb + PARA + verb + ANTES DE + noun</div>`
    },
    back: {
      title: "Estamos por empezar para poder terminar antes del almuerzo",
      text: "<div class='formula'>Estamos por empezar + para poder terminar + antes del almuerzo</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 17,
    front: {
      title: "Después de + Ir a + Tener que",
      text: `How do you say "After eating, they're going to walk because they have to exercise?"<div class='formula'>DESPUÉS DE + verb + IR A + verb … porque + TENER QUE + verb</div>`
    },
    back: {
      title: "Después de comer, van a caminar porque tienen que hacer ejercicio",
      text: "<div class='formula'>Después de comer + van a caminar + porque + tienen que hacer</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 18,
    front: {
      title: "Esperar que + Antes de que",
      text: `How do you say "I hope that you read before you have to sleep?"<div class='formula'>ESPERAR QUE + subj + ANTES DE QUE + subj</div>`
    },
    back: {
      title: "Espero que leas antes de que tengas que dormir",
      text: "<div class='formula'>Espero que leas + antes de que tengas que dormir</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 19,
    front: {
      title: "Por + Qué + Tener que + Para",
      text: `How do you say "She's about to explain what we have to do in order to succeed?"<div class='formula'>ESTAR POR + verb + qué + TENER QUE + verb + PARA + verb</div>`
    },
    back: {
      title: "Está por explicar qué tenemos que hacer para tener éxito",
      text: "<div class='formula'>Está por explicar + qué + tenemos que hacer + para tener éxito</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 20,
    front: {
      title: "Acabar de + Ir a",
      text: `How do you say "We just finished and now we're going to rest?"<div class='formula'>ACABAR DE + verb … y + IR A + verb</div>`
    },
    back: {
      title: "Acabamos de terminar y ahora vamos a descansar",
      text: "<div class='formula'>Acabamos de terminar + y + vamos a descansar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 21,
    front: {
      title: "Por + Cuando + Tenían que",
      text: `How do you say "They were about to leave when they realized they had to pay?"<div class='formula'>ESTAR POR + verb + cuando + verb (preterite) + que + TENÍAN QUE + verb</div>`
    },
    back: {
      title: "Estaban por irse cuando se dieron cuenta de que tenían que pagar",
      text: "<div class='formula'>Estaban por irse + cuando + se dieron cuenta + de que + tenían que pagar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 22,
    front: {
      title: "Es necesario que + Después de que",
      text: `How do you say "It's necessary that you practice after you learn the rules?"<div class='formula'>ES NECESARIO QUE + subj + DESPUÉS DE QUE + subj</div>`
    },
    back: {
      title: "Es necesario que practiques después de que aprendas las reglas",
      text: "<div class='formula'>Es necesario que practiques + después de que aprendas</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 23,
    front: {
      title: "Acabar de + Tener que + Antes de que",
      text: `How do you say "I just heard that we have to cancel before it's too late?"<div class='formula'>ACABAR DE + verb + que + TENER QUE + verb + ANTES DE QUE + subj</div>`
    },
    back: {
      title: "Acabo de escuchar que tenemos que cancelar antes de que sea demasiado tarde",
      text: "<div class='formula'>Acabo de escuchar + que + tenemos que cancelar + antes de que sea</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 24,
    front: {
      title: "Ir a + Para + Después de",
      text: `How do you say "We're going to prepare in order to leave right after we eat?"<div class='formula'>IR A + verb + PARA + verb + DESPUÉS DE + verb</div>`
    },
    back: {
      title: "Vamos a prepararnos para salir justo después de comer",
      text: "<div class='formula'>Vamos a prepararnos + para salir + después de comer</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 25,
    front: {
      title: "Tener que + Para que + Antes de que",
      text: `How do you say "She has to study so that she can pass before summer starts?"<div class='formula'>TENER QUE + verb + PARA QUE + subj + ANTES DE QUE + subj</div>`
    },
    back: {
      title: "Tiene que estudiar para que pueda aprobar antes de que empiece el verano",
      text: "<div class='formula'>Tiene que estudiar + para que pueda aprobar + antes de que empiece</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 26,
    front: {
      title: "Por + Primero + Tener que (equipment)",
      text: `How do you say "They're about to present, but first they have to test the equipment?"<div class='formula'>ESTAR POR + verb … pero primero + TENER QUE + verb</div>`
    },
    back: {
      title: "Están por presentar, pero primero tienen que probar el equipo",
      text: "<div class='formula'>Están por presentar + pero primero + tienen que probar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 27,
    front: {
      title: "Iba a + Después de + Tuve que",
      text: `How do you say "I was going to buy food after working, but I had to go home?"<div class='formula'>IBA A + verb + DESPUÉS DE + verb … pero + TUVE QUE + verb</div>`
    },
    back: {
      title: "Iba a comprar comida después de trabajar, pero tuve que ir a casa",
      text: "<div class='formula'>Iba a comprar + después de trabajar + pero + tuve que ir</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 28,
    front: {
      title: "Es importante que + Después de + Para que",
      text: `How do you say "It's important that we leave after finishing so that we aren't late?"<div class='formula'>ES IMPORTANTE QUE + subj + DESPUÉS DE + verb + PARA QUE + subj</div>`
    },
    back: {
      title: "Es importante que salgamos después de terminar para que no lleguemos tarde",
      text: "<div class='formula'>Es importante que salgamos + después de terminar + para que no lleguemos</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 29,
    front: {
      title: "Por + Tener que (mañana)",
      text: `How do you say "He's about to sleep because he has to wake up early tomorrow?"<div class='formula'>ESTAR POR + verb … porque + TENER QUE + verb</div>`
    },
    back: {
      title: "Está por dormir porque tiene que levantarse temprano mañana",
      text: "<div class='formula'>Está por dormir + porque + tiene que levantarse</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 30,
    front: {
      title: "Acabar de + Tener que + Antes de (noun)",
      text: `How do you say "I just remembered that we have to send the email before noon?"<div class='formula'>ACABAR DE + verb + que + TENER QUE + verb + ANTES DE + noun</div>`
    },
    back: {
      title: "Acabo de recordar que tenemos que enviar el correo antes del mediodía",
      text: "<div class='formula'>Acabo de recordar + que + tenemos que enviar + antes del mediodía</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 31,
    front: {
      title: "Ir a + Después de + Para",
      text: `How do you say "They're going to travel after saving money to see their family?"<div class='formula'>IR A + verb + DESPUÉS DE + verb + PARA + verb</div>`
    },
    back: {
      title: "Van a viajar después de ahorrar dinero para ver a su familia",
      text: "<div class='formula'>Van a viajar + después de ahorrar + para ver</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 32,
    front: {
      title: "Esperar que + Después de que + Para que",
      text: `How do you say "I hope you call after you arrive so that I can pick you up?"<div class='formula'>ESPERAR QUE + subj + DESPUÉS DE QUE + subj + PARA QUE + subj</div>`
    },
    back: {
      title: "Espero que llames después de que llegues para que pueda recogerte",
      text: "<div class='formula'>Espero que llames + después de que llegues + para que pueda recogerte</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 33,
    front: {
      title: "Por + Cuando + Teníamos que",
      text: `How do you say "We were about to eat when we learned we had to leave immediately?"<div class='formula'>ESTAR POR + verb + cuando + verb (preterite) + que + TENÍAMOS QUE + verb</div>`
    },
    back: {
      title: "Estábamos por comer cuando aprendimos que teníamos que irnos de inmediato",
      text: "<div class='formula'>Estábamos por comer + cuando + aprendimos + que + teníamos que irnos</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 34,
    front: {
      title: "Es mejor que + Antes de que",
      text: `How do you say "It's better that they rest before they have to work tonight?"<div class='formula'>ES MEJOR QUE + subj + ANTES DE QUE + subj</div>`
    },
    back: {
      title: "Es mejor que descansen antes de que tengan que trabajar esta noche",
      text: "<div class='formula'>Es mejor que descansen + antes de que tengan que trabajar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 35,
    front: {
      title: "Acabar de + Ir a + Para",
      text: `How do you say "She just finished working and now she's going to run to stay fit?"<div class='formula'>ACABAR DE + verb + y + IR A + verb + PARA + verb</div>`
    },
    back: {
      title: "Acaba de terminar de trabajar y ahora va a correr para mantenerse en forma",
      text: "<div class='formula'>Acaba de terminar + y + va a correr + para mantenerse</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 36,
    front: {
      title: "Tener que + Después de + Para que",
      text: `How do you say "We have to write after researching so that the report is clear?"<div class='formula'>TENER QUE + verb + DESPUÉS DE + verb + PARA QUE + subj</div>`
    },
    back: {
      title: "Tenemos que escribir después de investigar para que el informe sea claro",
      text: "<div class='formula'>Tenemos que escribir + después de investigar + para que sea</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 37,
    front: {
      title: "Por + Decidir + Después de",
      text: `How do you say "They're about to decide which movie they're going to watch after dinner?"<div class='formula'>ESTAR POR + decidir + qué + IR A + verb + DESPUÉS DE + verb</div>`
    },
    back: {
      title: "Están por decidir qué película van a ver después de cenar",
      text: "<div class='formula'>Están por decidir + qué película + van a ver + después de cenar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 38,
    front: {
      title: "Acabar de + Tener que + Antes de",
      text: `How do you say "I just told him that he has to study before playing video games?"<div class='formula'>ACABAR DE + decir + que + TENER QUE + verb + ANTES DE + verb</div>`
    },
    back: {
      title: "Acabo de decirle que tiene que estudiar antes de jugar videojuegos",
      text: "<div class='formula'>Acabo de decirle + que + tiene que estudiar + antes de jugar</div>"
    },
    difficulty: null,
    timesShown: 0
  },
  {
    id: 39,
    front: {
      title: "Es extraño que + Después de que (perfect)",
      text: `How do you say "It's strange that she arrives after we have already left?"<div class='formula'>ES EXTRAÑO QUE + subj + DESPUÉS DE QUE + subj (perf.)</div>`
    },
    back: {
      title: "Es extraño que ella llegue después de que ya nos hayamos ido",
      text: "<div class='formula'>Es extraño que llegue + después de que nos hayamos ido</div>"
    },
    difficulty: null,
    timesShown: 0
  }
];

export const getCardsForLanguage = (languageCode: string): Card[] => {
  const baseCards = spanishEnglishCards;
  
  switch (languageCode) {
    case 'es-en':
      // Spanish → English (default direction)
      return baseCards;
    case 'en-es':
      // English → Spanish (swap front and back)
      return baseCards.map(card => ({
        ...card,
        front: card.back,
        back: card.front
      }));
    default:
      return baseCards;
  }
};