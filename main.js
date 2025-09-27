const letters = [
  "a", "б", "в", "г", "г1", "гь", "гъ", "д", "ж", "ж1", "з", "и", "к", "к1", "к11", "кь", "кь1", "къ",
  "л", "л1", "лъ", "м", "н", "о", "п", "р", "с", "т", "т1", "у", "х", "х1", "хъ", "хь", "ц", "ц1", "ц11",
  "ч", "ч1", "ч11", "ш", "щ", "э", "я",
];

const symbols = [
  "a", "b", "v", "g", "g1", "gm", "gt", "d", "zh", "dj", "z", "i", "k", "k1", "k11", "km", "km1", "kt",
  "l", "l1", "lt", "m", "n", "o", "p", "r", "s", "t", "t1", "u", "x", "x1", "xt", "xm", "c", "c1", "c11",
  "ch", "ch1", "ch11", "sh", "sh1", "e", "ya",
];

// const colors = [
//   "#7CD0FF", "#FF6F00", "#70DB72", "#e57373", "#BA68C8", "#4DB6AC", "#2196F3", "#4CAF50", "#8D6E63",
//   "#AFB42B", "#7986CB", "#F06292", "#81C784", "#9575CD", "#29B6F6", "#e57373", "#FF8A65", "#4DB6AC",
//   "#AFB42B", "#42A5F5", "#66BB6A", "#2196F3", "#9C27B0", "#8d6e12", "#ef5350", "#AB47BC", "#26A69A",
//   "#78909C", "#8D6E63", "#e57373", "#42A5F5", "#e57373", "#26A69A", "#5C6BC0", "#66BB6A", "#757575",
//   "#795548", "#10519b", "#607D8B", "#F06292", "#21566A", "#81C784", "#A1887F", "#AB47BC",
// ];
const letterStyles = [
  { background: "#7CD0FF", letter: "#FFFFFF", stroke: "#001F33" },
  { background: "#FF6F00", letter: "#FFFFFF", stroke: "#662200" },
  { background: "#70DB72", letter: "#FFFFFF", stroke: "#145214" },
  { background: "#e57373", letter: "#FFFFFF", stroke: "#800000" },
  { background: "#BA68C8", letter: "#FFFFFF", stroke: "#4B0073" },
  { background: "#4DB6AC", letter: "#FFFFFF", stroke: "#004D40" },
  { background: "#2196F3", letter: "#FFFFFF", stroke: "#002F66" },
  { background: "#4CAF50", letter: "#FFFFFF", stroke: "#1B5E20" },
  { background: "#8D6E63", letter: "#FFFFFF", stroke: "#3E2723" },
  { background: "#AFB42B", letter: "#FFFFFF", stroke: "#666600" },
  { background: "#7986CB", letter: "#FFFFFF", stroke: "#1A237E" },
  { background: "#F06292", letter: "#FFFFFF", stroke: "#880E4F" },
  { background: "#81C784", letter: "#FFFFFF", stroke: "#1B5E20" },
  { background: "#9575CD", letter: "#FFFFFF", stroke: "#311B92" },
  { background: "#29B6F6", letter: "#FFFFFF", stroke: "#001F33" },
  { background: "#e57373", letter: "#FFFFFF", stroke: "#800000" },
  { background: "#FF8A65", letter: "#FFFFFF", stroke: "#BF360C" },
  { background: "#4DB6AC", letter: "#FFFFFF", stroke: "#004D40" },
  { background: "#AFB42B", letter: "#FFFFFF", stroke: "#666600" },
  { background: "#42A5F5", letter: "#FFFFFF", stroke: "#002F66" },
  { background: "#66BB6A", letter: "#FFFFFF", stroke: "#145214" },
  { background: "#2196F3", letter: "#FFFFFF", stroke: "#002F66" },
  { background: "#9C27B0", letter: "#FFFFFF", stroke: "#4A148C" },
  { background: "#8d6e12", letter: "#FFFFFF", stroke: "#4B3E00" },
  { background: "#ef5350", letter: "#FFFFFF", stroke: "#800000" },
  { background: "#AB47BC", letter: "#FFFFFF", stroke: "#4A148C" },
  { background: "#26A69A", letter: "#FFFFFF", stroke: "#004D40" },
  { background: "#78909C", letter: "#FFFFFF", stroke: "#263238" },
  { background: "#8D6E63", letter: "#FFFFFF", stroke: "#3E2723" },
  { background: "#e57373", letter: "#FFFFFF", stroke: "#800000" },
  { background: "#42A5F5", letter: "#FFFFFF", stroke: "#002F66" },
  { background: "#e57373", letter: "#FFFFFF", stroke: "#800000" },
  { background: "#26A69A", letter: "#FFFFFF", stroke: "#004D40" },
  { background: "#5C6BC0", letter: "#FFFFFF", stroke: "#1A237E" },
  { background: "#66BB6A", letter: "#FFFFFF", stroke: "#145214" },
  { background: "#757575", letter: "#FFFFFF", stroke: "#212121" },
  { background: "#795548", letter: "#FFFFFF", stroke: "#3E2723" },
  { background: "#10519b", letter: "#FFFFFF", stroke: "#002171" },
  { background: "#607D8B", letter: "#FFFFFF", stroke: "#263238" },
  { background: "#F06292", letter: "#FFFFFF", stroke: "#880E4F" },
  { background: "#21566A", letter: "#FFFFFF", stroke: "#002633" },
  { background: "#81C784", letter: "#FFFFFF", stroke: "#1B5E20" },
  { background: "#A1887F", letter: "#FFFFFF", stroke: "#3E2723" },
  { background: "#AB47BC", letter: "#FFFFFF", stroke: "#4A148C" },
];

const words = [
  "артанди", "беле", "ваша", "гигицо", "г1ама", "гьерк11ва", "гъане", "диду", "жужука", "ж1ванж1ва",
  "зини", "иссо", "кене", "к1анча", "к11ара", "кьанк1ала", "кь1ала", "къамер", "лалу", "лъабда",
  "л1орл1ол", "милъе", "нихьва", "осхъел", "пера", "рак1ьар", "солосоло", "тупе", "т1анса", "унса",
  "хабу", "х1антала", "хъоча", "хьване", "ццицци", "ц1ай", "ц11ибиль", "чане", "ч1ант1а",
  "ч11инч11иль", "шарбал", "щакибо", "эрхьу", "яше",
];

const sounds = [];
const alphabetControls = document.getElementById('alphabetControls');
const toggleAlphabetBtn = document.getElementById('toggleAlphabetBtn');
const showHintBtn = document.getElementById('showHintBtn');


let isImages = true;
let isMain = true;
let currentLetterIndex = -1;

let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;
let gestureStartTime = 0;
let gestureEndTime = 0;

let alphabetWrapper;
let singleLetterWrapper;
let outerEl;
let singleLetterEl;
let toggleViewBtn;
let globalBackButton;
let longPressTimer;
let indicator;


function init() {
  document.addEventListener('contextmenu', (e) => {
    return false;
  });

  alphabetWrapper = document.getElementById('alphabetWrapper');
  singleLetterWrapper = document.getElementById('singleLetterWrapper');
  outerEl = document.getElementById('outer');
  singleLetterEl = document.getElementById('singleLetter');
  toggleViewBtn = document.getElementById('toggleView');
  const letterBackButton = document.getElementById('letterBackButton');

  if (letterBackButton) {
    letterBackButton.addEventListener('click', backClicked);
  }

  if (!alphabetWrapper) {
    console.warn('alphabetWrapper not found in DOM');
    alphabetWrapper = document.createElement('div');
    alphabetWrapper.id = 'alphabetWrapper';
    document.body.appendChild(alphabetWrapper);
  }

  generateAlphabet();

  alphabetWrapper.addEventListener('click', (e) => {
    const btn = e.target.closest('.letter');
    if (!btn) return;
    const idx = Number(btn.dataset.index);
    if (!Number.isFinite(idx)) return;
    clickLetter(idx);
  });

  let longPressTimer;

  alphabetWrapper.addEventListener('touchstart', (e) => {
    touchstartX = e.touches[0].clientX;
    touchstartY = e.touches[0].clientY;

    longPressTimer = setTimeout(() => {
      showHint('hintAlphabet');
      localStorage.removeItem('hasSeenAlphabetHint');
    }, 700);
  });

  alphabetWrapper.addEventListener('touchend', () => {
    clearTimeout(longPressTimer);
  });

  alphabetWrapper.addEventListener('touchcancel', () => {
    clearTimeout(longPressTimer);
  });

  alphabetWrapper.addEventListener("touchmove", (e) => {
  if (!longPressTimer) return;

  const dx = e.touches[0].clientX - touchstartX;
  const dy = e.touches[0].clientY - touchstartY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > 15) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
});

  // На случай мыши (desktop)
  alphabetWrapper.addEventListener('mousedown', (e) => {
    longPressTimer = setTimeout(() => {
      localStorage.removeItem('hasSeenAlphabetHint');
      localStorage.removeItem('hasSeenLetterHint');

      showHint('hintAlphabet');
    }, 700);
  });

  alphabetWrapper.addEventListener('mouseup', (e) => {
    clearTimeout(longPressTimer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') gestureRight();
    if (e.key === 'ArrowRight') gestureLeft();
    if (e.key === 'Escape') backClicked();
    if (e.key === ' ') {
      e.preventDefault();
      rotateClicked();
    }
  });

  if (toggleViewBtn) {
    toggleViewBtn.addEventListener('click', () => {
      rotateClicked();
      toggleViewBtn.setAttribute('aria-pressed', String(!isImages));
    });
  }

  document.addEventListener('touchstart', (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
    gestureStartTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    gestureEndTime = Date.now();
    checkDirection();
  });

  singleLetterWrapper.addEventListener('click', (e) => {
    const playBtn = e.target.closest('.manual-play');
    if (playBtn) {
      if (currentLetterIndex !== -1) playSound(currentLetterIndex, { force: true });
      return;
    }
    const clickedInside = e.target.closest('.imageWrapper') || e.target.closest('.fullImage');
    if (clickedInside) {
      imageClick();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (!(localStorage.getItem('hasSeenAlphabetHint') === 'true')) {
      showHint('hintAlphabet');
    }
  });
}

function showHint(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'flex';
  // Используем небольшой таймаут, чтобы сработала анимация через transition
  requestAnimationFrame(() => {
    el.classList.add('show');
  });
}

function closeHint(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('show');
  el.addEventListener('transitionend', () => {
    el.style.display = 'none';
  }, { once: true });

  if (id === 'hintAlphabet') localStorage.setItem('hasSeenAlphabetHint', 'true');
  if (id === 'hintSingleLetter') localStorage.setItem('hasSeenLetterHint', 'true');
}


function generateAlphabet() {
  alphabetWrapper.innerHTML = '';
  sounds.length = 0;

  for (let i = 0; i < letters.length; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'letter';
    btn.dataset.index = String(i);
    btn.setAttribute('role', 'listitem');
    const bg = letterStyles[i].background || '#ddd';
    btn.style.background = bg;
    btn.setAttribute('aria-label', `Буква ${capitalizeFirstLetter(letters[i])}`);

    const img = document.createElement('img');
    img.className = 'image';
    const sym = capitalizeFirstLetter(symbols[i]);
    img.src = `img/letters/thumb/thum_${sym}.webp`;
    img.alt = `${capitalizeFirstLetter(letters[i])}`;
    img.loading = 'lazy';
    btn.appendChild(img);

    const localBack = document.getElementById('letterBackButton') || document.getElementById('globalBackButton');
    if (localBack) localBack.style.display = 'none';

    const textEl = document.createElement('span');
    textEl.className = 'text';
    textEl.textContent = capitalizeFirstLetter(letters[i]);
    textEl.setAttribute('aria-hidden', 'true');
    btn.appendChild(textEl);

    const overlay = document.createElement('span');
    overlay.className = 'overlayLetter';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.textContent = capitalizeFirstLetter(letters[i]); 
    overlay.style.color = letterStyles[i].letter;
    overlay.style.webkitTextStroke = `1px ${letterStyles[i].stroke}`;
    overlay.style.textStroke = `1px ${letterStyles[i].stroke}`;

    btn.appendChild(overlay);

    alphabetWrapper.appendChild(btn);

    const audio = new Audio(`snd/${symbols[i]}.mp3`);
    audio.preload = 'none';
    sounds[i] = audio;
  }

  if (outerEl) outerEl.classList.remove('show');
  if (singleLetterEl) singleLetterEl.setAttribute('aria-hidden', 'true');

  isMain = true;
  currentLetterIndex = -1;
}

function buildLetterPage(index) {
  singleLetterWrapper.innerHTML = '';

  const imgWrap = document.createElement('div');
  imgWrap.className = 'imageWrapper';
  const img = document.createElement('img');
  img.className = 'fullImage';
  img.alt = `${capitalizeFirstLetter(letters[index])}`;
  img.src = `img/letters/${capitalizeFirstLetter(symbols[index])}.webp`;
  img.loading = 'lazy';
  imgWrap.appendChild(img);
  singleLetterWrapper.appendChild(imgWrap);

  const hLetter = document.createElement('h1');
  hLetter.className = 'fullLetter';
  hLetter.textContent = capitalizeFirstLetter(letters[index]);
  singleLetterWrapper.appendChild(hLetter);

  const hWord = document.createElement('h1');
  hWord.className = 'fullText';
  hWord.textContent = capitalizeFirstLetter(words[index] || '');
  singleLetterWrapper.appendChild(hWord);
}

function clickLetter(index) {
  if (!Number.isFinite(index) || index < 0 || index >= letters.length) return;

  if (currentLetterIndex !== -1 && sounds[currentLetterIndex]) {
    try { sounds[currentLetterIndex].pause(); sounds[currentLetterIndex].currentTime = 0; } catch (e) { }
  }

  currentLetterIndex = index;

  buildLetterPage(index);

  if (alphabetWrapper) alphabetWrapper.style.display = 'none';

  if (singleLetterEl) {
    singleLetterEl.classList.add('show');
    singleLetterEl.setAttribute('aria-hidden', 'false');
  }

  if (outerEl) {
    outerEl.classList.add('show');
    outerEl.style.pointerEvents = 'auto';
  }

  const localBack = document.getElementById('letterBackButton');
  if (localBack) localBack.style.display = '';

  document.body.style.background = letterStyles[index].background || '#fff';

  isMain = false;

  requestAnimationFrame(() => {
    playSound(index).catch(() => { });
  });

  if (!(localStorage.getItem('hasSeenLetterHint') === 'true')) {
    showHint('hintSingleLetter');
  }
}

function backClicked() {
  if (currentLetterIndex !== -1 && sounds[currentLetterIndex]) {
    try { sounds[currentLetterIndex].pause(); sounds[currentLetterIndex].currentTime = 0; } catch (e) { }
  }

  currentLetterIndex = -1;

  if (singleLetterEl) {
    singleLetterEl.classList.remove('show');
    singleLetterEl.setAttribute('aria-hidden', 'true');
    singleLetterEl.style.display = '';
  }

  if (outerEl) {
    outerEl.classList.remove('show');
    outerEl.style.pointerEvents = 'none';
  }

  if (singleLetterWrapper) {
    singleLetterWrapper.innerHTML = '';
  }

  document.body.style.background = '#fff';

  if (alphabetWrapper) {
    alphabetWrapper.style.display = '';
  }

  const localBack = document.getElementById('letterBackButton') || document.getElementById('globalBackButton');
  if (localBack) localBack.style.display = 'none';

  try {
    const manual = singleLetterWrapper && singleLetterWrapper.querySelector('.manual-play');
    if (manual) manual.style.display = 'none';
  } catch (e) { }

  isMain = true;

  void document.body.offsetHeight;
}

function imageClick() {
  if (currentLetterIndex === -1) return;
  const s = sounds[currentLetterIndex];
  if (!s) return;
  try { s.pause(); s.currentTime = 0; } catch (e) { }
  s.play().catch(() => {
    showManualPlayButton();
  });
}

function rotateClicked() {
  isImages = !isImages;
  if (alphabetWrapper) {
    alphabetWrapper.classList.toggle('flipped', !isImages);
  }
}

async function playSound(idx, opts = {}) {
  if (!Number.isFinite(idx) || idx < 0 || idx >= sounds.length) return;
  const s = sounds[idx];
  if (!s) return;

  try {
    if (s.readyState === 0) {
      s.preload = 'auto';
      s.load();
    }
  } catch (e) {
  }

  try {
    await s.play();
    hideManualPlayButton();
  } catch (err) {
    console.warn('audio play blocked or failed:', err);
    showManualPlayButton();
    return Promise.reject(err);
  }
}

function showManualPlayButton() {
  const btn = singleLetterWrapper.querySelector('.manual-play');
  if (btn) btn.style.display = '';
}
function hideManualPlayButton() {
  const btn = singleLetterWrapper.querySelector('.manual-play');
  if (btn) btn.style.display = 'none';
}

function checkDirection() {
  const diffX = touchendX - touchstartX;
  const diffY = touchendY - touchstartY;
  const duration = gestureEndTime - gestureStartTime;

  if (duration < 500) {
    if (Math.abs(diffX) < Math.abs(diffY)) {
      if (diffY < -60) gestureUp();
    } else {
      if (diffX < -60) gestureLeft();
      if (diffX > 60) gestureRight();
    }
  }
}

function gestureUp() {
  if (!isMain) backClicked();
}

function gestureRight() {
  if (isMain) {
    rotateClicked();
  } else {
    if (currentLetterIndex !== -1) {
      const prev = (currentLetterIndex > 0) ? currentLetterIndex - 1 : letters.length - 1;
      clickLetter(prev);
    } else {
      backClicked();
    }
  }
}

function gestureLeft() {
  if (isMain) {
    rotateClicked();
  } else {
    if (currentLetterIndex !== -1) {
      const next = (currentLetterIndex < letters.length - 1) ? currentLetterIndex + 1 : 0;
      clickLetter(next);
    } else {
      backClicked();
    }
  }
}


function capitalizeFirstLetter(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}