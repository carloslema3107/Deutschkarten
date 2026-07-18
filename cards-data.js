/*
  DeutschKarten — datos de tarjetas
  -----------------------------------------------------------------
  Este es un set de EJEMPLO (12 tarjetas) para que puedas probar la
  app ya mismo. Cuando me pases tu archivo anki-german.jsx completo
  (o un export CSV/JSON), reemplazo este array con tus 2600+ tarjetas
  reales, manteniendo la misma estructura de campos.

  Estructura esperada por tarjeta:
  {
    id:       string único (ej. "a1-0001")
    german:   palabra SIN artículo
    english:  traducción
    wordType: "noun" | "verb" | "adjective" | "adverb" | "preposition" | "phrase" | "other"
    level:    "A1" | "A2" | "B1.1" | "B1.2"
    topic:    string (ej. "Alltag", "Kommunikation")
    gender:   "der" | "die" | "das" | null   (solo para noun)
    example:  frase de ejemplo (opcional pero recomendado)
  }
*/
const CARDS = [
  {id:'a1-0001', german:'Haus', english:'house', wordType:'noun', level:'A1', topic:'Wohnen', gender:'das', example:'Das Haus ist groß und hell.'},
  {id:'a1-0002', german:'Tisch', english:'table', wordType:'noun', level:'A1', topic:'Wohnen', gender:'der', example:'Der Tisch steht in der Küche.'},
  {id:'a1-0003', german:'gehen', english:'to go / to walk', wordType:'verb', level:'A1', topic:'Alltag', gender:null, example:'Ich gehe jeden Tag zur Arbeit.'},
  {id:'a1-0004', german:'schön', english:'beautiful', wordType:'adjective', level:'A1', topic:'Beschreibungen', gender:null, example:'Das Wetter heute ist sehr schön.'},

  {id:'a2-0001', german:'Erfahrung', english:'experience', wordType:'noun', level:'A2', topic:'Alltag', gender:'die', example:'Das war eine wichtige Erfahrung für mich.'},
  {id:'a2-0002', german:'sich freuen', english:'to be happy / look forward to', wordType:'verb', level:'A2', topic:'Gefühle', gender:null, example:'Ich freue mich auf das Wochenende.'},
  {id:'a2-0003', german:'trotzdem', english:'nevertheless', wordType:'adverb', level:'A2', topic:'Kommunikation', gender:null, example:'Es regnet, trotzdem gehen wir spazieren.'},

  {id:'b11-0001', german:'Verantwortung', english:'responsibility', wordType:'noun', level:'B1.1', topic:'Arbeit', gender:'die', example:'Er trägt viel Verantwortung im Projekt.'},
  {id:'b11-0002', german:'sich beschweren', english:'to complain', wordType:'verb', level:'B1.1', topic:'Kommunikation', gender:null, example:'Sie hat sich über den Lärm beschwert.'},
  {id:'b11-0003', german:'obwohl', english:'although', wordType:'other', level:'B1.1', topic:'Kommunikation', gender:null, example:'Obwohl es spät war, blieben wir noch.'},

  {id:'b12-0001', german:'Nachhaltigkeit', english:'sustainability', wordType:'noun', level:'B1.2', topic:'Umwelt', gender:'die', example:'Nachhaltigkeit ist ein wichtiges Thema.'},
  {id:'b12-0002', german:'sich auseinandersetzen mit', english:'to deal with / engage with', wordType:'verb', level:'B1.2', topic:'Alltag', gender:null, example:'Wir müssen uns mit dem Problem auseinandersetzen.'},
];
