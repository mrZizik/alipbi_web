const letters = [
  "a","б","в","г","г1","гь","гъ","д","ж","ж1","з","и","к","к1","к11","кь","кь1","къ",
  "л","л1","лъ","м","н","о","п","р","с","т","т1","у","х","х1","хъ","хь","ц","ц1","ц11",
  "ч","ч1","ч11","ш","щ","э","я",
];

const symbols = [
  "a","b","v","g","g1","gm","gt","d","zh","dj","z","i","k","k1","k11","km","km1","kt",
  "l","l1","lt","m","n","o","p","r","s","t","t1","u","x","x1","xt","xm","c","c1","c11",
  "ch","ch1","ch11","sh","sh1","e","ya",
];

const colors = [
  "#7CD0FF","#FF6F00","#70DB72","#e57373","#BA68C8","#4DB6AC","#2196F3","#4CAF50","#8D6E63",
  "#AFB42B","#7986CB","#F06292","#81C784","#9575CD","#29B6F6","#e57373","#FF8A65","#4DB6AC",
  "#AFB42B","#42A5F5","#66BB6A","#2196F3","#9C27B0","#8d6e12","#ef5350","#AB47BC","#26A69A",
  "#78909C","#8D6E63","#e57373","#42A5F5","#e57373","#26A69A","#5C6BC0","#66BB6A","#757575",
  "#795548","#10519b","#607D8B","#F06292","#21566A","#81C784","#A1887F","#AB47BC",
];

const words = [
  "артанди","беле","ваша","гигицо","г1ама","гьерк11ва","гъане","дидин","жужука","ж1ванж1ва",
  "зини","иссо","кене","к1анча","к11ара","кьанк1ала","кь1ала","къамер","лалу","лъабда",
  "л1орл1ол","милъе","нихьва","осхъел","пера","рак1ьар","солосоло","тупе","т1анса","унса",
  "хабу","х1антала","хъоча","хьване","ццицци","ц1ай","ц11ибиль","чане","ч1ант1а",
  "ч11инч11иль","шарбал","щакибо","эрхьу","яше",
];

const sounds = [];

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

function init() {
  alphabetWrapper = document.getElementById('alphabetWrapper');
  singleLetterWrapper = document.getElementById('singleLetterWrapper');
  outerEl = document.getElementById('outer');
  singleLetterEl = document.getElementById('singleLetter');
  toggleViewBtn = document.getElementById('toggleView');
  globalBackButton = document.getElementById('globalBackButton');

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

  if (globalBackButton) {
    globalBackButton.addEventListener('click', backClicked);
  }

  document.addEventListener('touchstart', (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
    gestureStartTime = Date.now();
  }, {passive: true});

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
      if (currentLetterIndex !== -1) playSound(currentLetterIndex, {force: true});
      return;
    }
    const clickedInside = e.target.closest('.imageWrapper') || e.target.closest('.fullImage');
    if (clickedInside) {
      imageClick();
    }
  });
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
    const bg = colors[i] || '#ddd';
    btn.style.background = bg;
    btn.setAttribute('aria-label', `Буква ${capitalizeFirstLetter(letters[i])}`);

    const img = document.createElement('img');
    img.className = 'image';
    const sym = capitalizeFirstLetter(symbols[i]);
    img.src = `img/letters/thumb/thum_${sym}.webp`;
    img.alt = `${capitalizeFirstLetter(letters[i])}`;
    img.loading = 'lazy';
    btn.appendChild(img);

    const textEl = document.createElement('span');
    textEl.className = 'text';
    textEl.textContent = capitalizeFirstLetter(letters[i]);
    textEl.setAttribute('aria-hidden', 'true');
    btn.appendChild(textEl);

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

  const playBtn = document.createElement('button');
  playBtn.type = 'button';
  playBtn.className = 'manual-play';
  playBtn.textContent = '▶︎ Воспроизвести';
  playBtn.style.display = 'none';
  singleLetterWrapper.appendChild(playBtn);
}

function clickLetter(index) {
  if (!Number.isFinite(index) || index < 0 || index >= letters.length) return;

  if (currentLetterIndex !== -1 && sounds[currentLetterIndex]) {
    try { sounds[currentLetterIndex].pause(); sounds[currentLetterIndex].currentTime = 0; } catch (e) {}
  }

  buildLetterPage(index);

  if (alphabetWrapper) alphabetWrapper.style.display = 'none';
  if (outerEl) outerEl.classList.add('show');
  if (singleLetterEl) singleLetterEl.setAttribute('aria-hidden', 'false');
  if (globalBackButton) globalBackButton.style.display = ''; // показать
  document.body.style.background = colors[index] || '#fff';

  currentLetterIndex = index;
  isMain = false;

  playSound(index).catch(()=>{});
}

function imageClick() {
  if (currentLetterIndex === -1) return;
  const s = sounds[currentLetterIndex];
  if (!s) return;
  // перезапустить
  try { s.pause(); s.currentTime = 0; } catch (e) {}
  s.play().catch(() => {
    showManualPlayButton();
  });
}

function backClicked() {
  if (currentLetterIndex !== -1 && sounds[currentLetterIndex]) {
    try { sounds[currentLetterIndex].pause(); sounds[currentLetterIndex].currentTime = 0; } catch (e) {}
  }
  currentLetterIndex = -1;
  if (outerEl) outerEl.classList.remove('show');
  if (singleLetterEl) singleLetterEl.setAttribute('aria-hidden', 'true');
  if (alphabetWrapper) alphabetWrapper.style.display = '';
  if (globalBackButton) globalBackButton.style.display = 'none';
  document.body.style.background = '#fff';
  singleLetterWrapper.innerHTML = '';
  isMain = true;
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