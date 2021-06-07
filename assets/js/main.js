let $ = (el) => document.querySelector(el);
let $$ = (el) => Array.from(document.querySelectorAll(el));
let $on = (el, evt, fn) =>
  Array.isArray(el)
    ? el.forEach((o) => $on(o, evt, fn))
    : el.addEventListener(evt, fn);

const words = [
  'Abendbrot',
  'Brueckentag',
  'Erklaerungsnot',
  'Fingerspitzengefuehl',
  'Fremdschämen',
  'Geborgenheit',
  'Geschmacksverirrung',
  'Schweinehund',
  'Kopfkino',
  'Kummerspeck',
  'Schnapsidee',
  'Torschlusspanik',
  'verabredet',
  'verschlimmbessern',
  'Vorfreude',
  'Weltschmerz',
  'Zeitgeist',
  'Zugzwang',
];

function createAlphabet(start, end) {
  let arr = new Array(end.charCodeAt(0) - start.charCodeAt(0) + 1)
    .fill(0)
    .map((el, i) => start.charCodeAt(0) + i);
  return arr;
}

let alphabet = createAlphabet('a', 'z');

alphabet.forEach((el) => {
  $('#buttons').innerHTML += `<div>${String.fromCharCode(el)}</div>`;
});

function random() {
  return words[Math.floor(Math.random() * words.length)];
}

function shuffle() {
  let word = random();
  let idx1 = word[Math.floor(Math.random() * word.length)];
  let idx2 = word[Math.floor(Math.random() * word.length)];
  let wordToPlay = word.split('').map((el, i) => {
    if (el === idx1) {
      return `<span class=${el}>${el}</span>`;
    } else if (el === idx2) {
      return `<span class=${el}>${el}</span>`;
    } else {
      return `<span class=${el}>_</span>`;
    }
  });

  return wordToPlay.join('');
}

$('#word').innerHTML = shuffle();

$on($$('div'), 'click', (e) => {
  $$('span').map((el) =>
    el.classList.value.toLowerCase() == e.target.innerHTML
      ? (el.innerHTML = e.target.innerHTML)
      : el
  );
});
