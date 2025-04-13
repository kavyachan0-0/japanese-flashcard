const flashcards = {
    hiragana: [
      { front: "あ", back: "A - vowel" },
      { front: "い", back: "I - vowel" },
      { front: "う", back: "U - vowel" },
      { front: "え", back: "E - vowel" },
      { front: "お", back: "O - vowel" },
      { front: "か", back: "KA" },
      { front: "き", back: "KI" },
      { front: "く", back: "KU" },
      { front: "け", back: "KE" },
      { front: "こ", back: "KO" },
      { front: "さ", back: "SA" },
      { front: "し", back: "SHI" },
      { front: "す", back: "SU" },
      { front: "せ", back: "SE" },
      { front: "そ", back: "SO" },
      { front: "た", back: "TA" },
      { front: "ち", back: "CHI" },
      { front: "つ", back: "TSU" },
      { front: "て", back: "TE" },
      { front: "と", back: "TO" },
      { front: "な", back: "NA" },
      { front: "に", back: "NI" },
      { front: "ぬ", back: "NU" },
      { front: "ね", back: "NE" },
      { front: "の", back: "NO" },
      { front: "は", back: "HA" },
      { front: "ひ", back: "HI" },
      { front: "ふ", back: "FU" },
      { front: "へ", back: "HE" },
      { front: "ほ", back: "HO" },
      { front: "ま", back: "MA" },
      { front: "み", back: "MI" },
      { front: "む", back: "MU" },
      { front: "め", back: "ME" },
      { front: "も", back: "MO" },
      { front: "や", back: "YA" },
      { front: "ゆ", back: "YU" },
      { front: "よ", back: "YO" },
      { front: "ら", back: "RA" },
      { front: "り", back: "RI" },
      { front: "る", back: "RU" },
      { front: "れ", back: "RE" },
      { front: "ろ", back: "RO" },
      { front: "わ", back: "WA" },
      { front: "を", back: "WO (used as particle 'o')" },
      { front: "ん", back: "N" },
      { front: "きゃ", back: "KYA" },
      { front: "きゅ", back: "KYU" },
      { front: "きょ", back: "KYO" },
      { front: "しゃ", back: "SHA" },
      { front: "しゅ", back: "SHU" },
      { front: "しょ", back: "SHO" },
      { front: "ちゃ", back: "CHA" },
      { front: "ちゅ", back: "CHU" },
      { front: "ちょ", back: "CHO" },
      { front: "にゃ", back: "NYA" },
      { front: "にゅ", back: "NYU" },
      { front: "にょ", back: "NYO" },
      { front: "ひゃ", back: "HYA" },
      { front: "ひゅ", back: "HYU" },
      { front: "ひょ", back: "HYO" },
      { front: "みゃ", back: "MYA" },
      { front: "みゅ", back: "MYU" },
      { front: "みょ", back: "MYO" },
      { front: "りゃ", back: "RYA" },
      { front: "りゅ", back: "RYU" },
      { front: "りょ", back: "RYO" }
    ],
    katakana: [
      { front: "ア", back: "A - vowel" },
      { front: "イ", back: "I - vowel" },
      { front: "ウ", back: "U - vowel" },
      { front: "エ", back: "E - vowel" },
      { front: "オ", back: "O - vowel" },
      { front: "カ", back: "KA" },
      { front: "キ", back: "KI" },
      { front: "ク", back: "KU" },
      { front: "ケ", back: "KE" },
      { front: "コ", back: "KO" },
      { front: "サ", back: "SA" },
      { front: "シ", back: "SHI" },
      { front: "ス", back: "SU" },
      { front: "セ", back: "SE" },
      { front: "ソ", back: "SO" },
      { front: "タ", back: "TA" },
      { front: "チ", back: "CHI" },
      { front: "ツ", back: "TSU" },
      { front: "テ", back: "TE" },
      { front: "ト", back: "TO" },
      { front: "ナ", back: "NA" },
      { front: "ニ", back: "NI" },
      { front: "ヌ", back: "NU" },
      { front: "ネ", back: "NE" },
      { front: "ノ", back: "NO" },
      { front: "ハ", back: "HA" },
      { front: "ヒ", back: "HI" },
      { front: "フ", back: "FU" },
      { front: "ヘ", back: "HE" },
      { front: "ホ", back: "HO" },
      { front: "マ", back: "MA" },
      { front: "ミ", back: "MI" },
      { front: "ム", back: "MU" },
      { front: "メ", back: "ME" },
      { front: "モ", back: "MO" },
      { front: "ヤ", back: "YA" },
      { front: "ユ", back: "YU" },
      { front: "ヨ", back: "YO" },
      { front: "ラ", back: "RA" },
      { front: "リ", back: "RI" },
      { front: "ル", back: "RU" },
      { front: "レ", back: "RE" },
      { front: "ロ", back: "RO" },
      { front: "ワ", back: "WA" },
      { front: "ヲ", back: "WO (used as particle 'o')" },
      { front: "ン", back: "N" },
      { front: "キャ", back: "KYA" },
    { front: "キュ", back: "KYU" },
    { front: "キョ", back: "KYO" },
    { front: "シャ", back: "SHA" },
    { front: "シュ", back: "SHU" },
    { front: "ショ", back: "SHO" },
    { front: "チャ", back: "CHA" },
    { front: "チュ", back: "CHU" },
    { front: "チョ", back: "CHO" },
    { front: "ニャ", back: "NYA" },
    { front: "ニュ", back: "NYU" },
    { front: "ニョ", back: "NYO" },
    { front: "ヒャ", back: "HYA" },
    { front: "ヒュ", back: "HYU" },
    { front: "ヒョ", back: "HYO" },
    { front: "ミャ", back: "MYA" },
    { front: "ミュ", back: "MYU" },
    { front: "ミョ", back: "MYO" },
    { front: "リャ", back: "RYA" },
    { front: "リュ", back: "RYU" },
    { front: "リョ", back: "RYO" }
    ]
  };
  
  let currentSet = [];
let currentIndex = 0;
let shuffleEnabled = false;
let shuffledSet = [];

const flashcardPage = document.getElementById("flashcardPage");
const homePage = document.getElementById("homePage");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");
const flashcard = document.getElementById("flashcard");
const shuffleToggle = document.getElementById("shuffleToggle");

function goHome() {
    flashcardPage.style.display = "none";
    homePage.style.display = "flex";
  }

function startFlashcards(type) {
  currentSet = [...flashcards[type]];
  shuffledSet = shuffleArray([...flashcards[type]]);
  currentIndex = 0;
  updateCard();
  homePage.style.display = "none";
  flashcardPage.style.display = "flex";
}

function updateCard() {
  const card = shuffleEnabled ? shuffledSet[currentIndex] : currentSet[currentIndex];
  cardFront.textContent = card.front;
  cardBack.textContent = card.back;
  flashcard.classList.remove("flipped");
}

function nextCard() {
  const set = shuffleEnabled ? shuffledSet : currentSet;
  currentIndex = (currentIndex + 1) % set.length;
  updateCard();
}

function prevCard() {
  const set = shuffleEnabled ? shuffledSet : currentSet;
  currentIndex = (currentIndex - 1 + set.length) % set.length;
  updateCard();
}

function toggleShuffle() {
  shuffleEnabled = !shuffleEnabled;
  currentIndex = 0;
  shuffleToggle.textContent = `Shuffle: ${shuffleEnabled ? "ON" : "OFF"}`;
  updateCard();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});