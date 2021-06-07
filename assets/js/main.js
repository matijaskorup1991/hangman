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

let count = 0;

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

function createIndex(el) {
  return el[Math.floor(Math.random() * el.length)];
}

function shuffle() {
  let word = random();
  let diff = $('#difficulty');

  let wordToPlay = word.split('').map((el, i) => {
    return `<span class=${el}>_</span>`;
  });

  return wordToPlay.join('');
}

$('#word').innerHTML = shuffle();

$on($$('div'), 'click', (e) => {
  $$('span').map((el) => {
    if (el.classList.value.toLowerCase() == e.target.innerHTML) {
      return (el.innerHTML = el.classList.value);
    } else {
      return el;
    }
  });
  $('h2').innerHTML = `Count: ${count}`;
});
