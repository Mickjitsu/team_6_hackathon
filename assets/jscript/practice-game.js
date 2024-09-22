let userInputArr = [];
let currentKeyIndex = 0;
/* Keys for Twinkle Twinkle Little Star */
const twinkleKeys = [
  'key13',
  'key13',
  'key20',
  'key20',
  'key22',
  'key22',
  'key20',
  'key18',
  'key18',
  'key17',
  'key17',
  'key15',
  'key15',
  'key13',
  'key20',
  'key20',
  'key18',
  'key18',
  'key17',
  'key17',
  'key15',
  'key20',
  'key20',
  'key18',
  'key18',
  'key17',
  'key17',
  'key15',
  'key13',
  'key13',
  'key20',
  'key20',
  'key22',
  'key22',
  'key20',
  'key18',
  'key18',
  'key17',
  'key17',
  'key15',
  'key15',
  'key13',
];

let eliseKeys = [
  'key23',
  'key22',
  'key23',
  'key22',
  'key23',
  'key18',
  'key21',
  'key19',
  'key04',
  'key16',
  'key04',
  'key07',
  'key11',
  'key13',
  'key16',
  'key11',
  'key18',
  'key03',
  'key06',
  'key11',
  'key13',
  'key18',
  'key04',
  'key19',
  'key01',
  'key04',
  'key11',
  'key23',
  'key22',
  'key23',
  'key22',
  'key23',
  'key18',
  'key21',
  'key19',
  'key04',
  'key16',
  'key04',
  'key07',
  'key11',
  'key13',
  'key16',
  'key11',
  'key18',
  'key03',
  'key06',
  'key11',
  'key19',
  'key18',
  'key04',
  'key16',
  'key16',
  'key18',
  'key19',
  'key07',
  'key23',
  'key02',
  'key07',
  'key23',
  'key24',
  'key23',
  'key02',
  'key21',
  'key06',
  'key12',
  'key21',
  'key23',
  'key21',
  'key04',
  'key19',
  'key11',
  'key16',
  'key19',
  'key21',
  'key19',
  'key11',
  'key18',
  'key11',
  'key11',
  'key23',
  'key11',
  'key23',
  'key23',
  'key23',
  'key22',
  'key23',
  'key22',
  'key23',
  'key22',
  'key23',
  'key18',
  'key21',
  'key19',
  'key04',
  'key16',
  'key04',
  'key07',
  'key11',
  'key13',
  'key16',
  'key11',
  'key18',
  'key03',
  'key06',
  'key11',
  'key19',
  'key18',
  'key04',
  'key16',
];

// let eliseKeys = ['key23', 'key22', 'key23'];

function checkKey(key, keys) {
  userInputArr.push(key);

  let notes = document.querySelectorAll('.notes-span');
  let currentKey = document.querySelector(`[data-key=${key}]`);

  // Check the user input vs the correct note
  if (userInputArr[currentKeyIndex] === keys[currentKeyIndex]) {
    currentKey.classList.add('correct-key');

    setTimeout(() => {
      currentKey.classList.remove('correct-key');
    }, 500);

    // Move to the next key
    if (currentKeyIndex < keys.length - 1) {
      notes[currentKeyIndex].classList.add('green-text');
    }
    currentKeyIndex++;

    if (currentKeyIndex >= keys.length) {
      console.log('Sequence complete');
      // Reset for the next sequence
      userInputArr = [];
      currentKeyIndex = 0;
      notes.forEach((note) => note.classList.remove('green-text'));
    }
  } else {
    currentKey.classList.add('wrong-key');

    setTimeout(() => {
      currentKey.classList.remove('wrong-key');
    }, 500);
    userInputArr.pop();
  }
}

function displayNotes(mode) {
  const notesContainer = document.getElementsByClassName('key-notes')[0];

  if (mode == 'easy') {
    notesContainer.innerHTML = `
<h4>Twinkle Twinkle Little Star <i class="fa-regular fa-star fa-lg" style="color: #74C0FC;"></i></h4>
<br>
 <span class="notes-span">C, </span>
 <span class="notes-span">C, </span>
 <span class="notes-span">G, </span>
 <span class="notes-span">G, </span>
 <span class="notes-span">A, </span>
 <span class="notes-span">A, </span>
 <span class="notes-span">G, </span>
 <br>
 <span class="notes-span">F, </span>
 <span class="notes-span">F, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">D, </span>
 <span class="notes-span">D, </span>
 <span class="notes-span">C, </span>
  <br>
 <span class="notes-span">G, </span>
 <span class="notes-span">G, </span>
 <span class="notes-span">F, </span>
 <span class="notes-span">F, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">D, </span>
   <br>
 <span class="notes-span">G, </span>
 <span class="notes-span">G, </span>
 <span class="notes-span">F, </span>
 <span class="notes-span">F, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">D, </span>
   <br>
 <span class="notes-span">C, </span>
 <span class="notes-span">C, </span>
 <span class="notes-span">G, </span>
 <span class="notes-span">G, </span>
 <span class="notes-span">A, </span>
 <span class="notes-span">A, </span>
 <span class="notes-span">G, </span>
   <br>
 <span class="notes-span">F, </span>
 <span class="notes-span">F, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">E, </span>
 <span class="notes-span">D, </span>
 <span class="notes-span">D, </span>
 <span class="notes-span">C, </span>
  `;
  } else if (mode == 'hard') {
    notesContainer.innerHTML = `
    <h4>Für Elise</h4>
    <span class="notes-span">A#</span>
    <span class="notes-span">A</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">F</span>
    <span class="notes-span">G#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">D#</span>
    <br>
    <span class="notes-span">D#</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">C</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">F</span>
    <span class="notes-span">D</span>
    <span class="notes-span">F</span>
    <br>
    <span class="notes-span">A#</span>
    <span class="notes-span">C</span>
    <span class="notes-span">F</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">C</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A#</span>
    <br>
    <span class="notes-span">A</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">F</span>
    <span class="notes-span">G#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">D#</span>
    <br>
    <span class="notes-span">D#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">C</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">F</span>
    <span class="notes-span">D</span>
    <span class="notes-span">F</span>
    <br>
    <span class="notes-span">A#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">F</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">F</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">F#</span>
    <br>
    <span class="notes-span">A#</span>
    <span class="notes-span">C#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">B</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">C#</span>
    <span class="notes-span">G#</span>
    <span class="notes-span">F</span>
    <br>
    <span class="notes-span">B</span>
    <span class="notes-span">G#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">G#</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">D#</span>
    <span class="notes-span">F#</span>
    <br>
    <span class="notes-span">G#</span>
    <span class="notes-span">F#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">F</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A#</span>
    <br>
    <span class="notes-span">A#</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">A</span>
    <span class="notes-span">A#</span>
    <span class="notes-span">F</span>
    <br>
    <span class="notes-span">G#</span>
    <span class="notes-span">F#</span>

    `;
  }
}

function handleKeyClick(mode) {
  let note = this.getAttribute('data-key');
  let playThis = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
  playThis.play();

  if (mode === 'easy') {
    checkKey(note, twinkleKeys); // Easy mode: compare with twinkleKeys
  } else if (mode === 'hard') {
    checkKey(note, eliseKeys); // Hard mode: compare with eliseKeys
  }
}

function initialSetup(mode) {
  displayNotes(mode);

  let whiteKeys = document.getElementsByClassName('white-key');
  let blackKeys = document.getElementsByClassName('black-key');
  for (let key of whiteKeys) {
    key.addEventListener('click', function () {
      handleKeyClick.call(this, mode);
    });
    for (let key of blackKeys) {
      key.addEventListener('click', function () {
        handleKeyClick.call(this, mode);
      });
    }
  }
}

function selectDifficulty() {
  const difficultyButtons = document.querySelectorAll('.difficulty-btn');
  const welcomeScreen = document.getElementsByClassName('welcome-container');
  const practiceContainer =
    document.getElementsByClassName('practice-container');

  difficultyButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.classList.contains('easy')) {
        // display the easy mode

        welcomeScreen[0].classList.add('hide');
        practiceContainer[0].classList.remove('hide');
        initialSetup('easy');
      } else if (e.target.classList.contains('hard')) {
        // display difficult mode
        welcomeScreen[0].classList.add('hide');
        practiceContainer[0].classList.remove('hide');
        initialSetup('hard');
        console.log('hard');
      } else {
        document.getElementsByClassName('.welcome-container').innerHTML =
          '<p>Something went wrong! </p> <a href="index.html" class="btn btn-red">Go Back</a>';
      }
    });
  });
}

const keyMap = {
  q: 'key01',
  w: 'key03',
  e: 'key05',
  r: 'key06',
  t: 'key08',
  y: 'key10',
  u: 'key12',
  v: 'key13',
  b: 'key15',
  n: 'key17',
  m: 'key18',
  ',': 'key20',
  '.': 'key22',
  '/': 'key24',
  2: 'key02',
  3: 'key04',
  5: 'key07',
  6: 'key09',
  7: 'key11',
  g: 'key14',
  h: 'key16',
  k: 'key19',
  l: 'key21',
  ';': 'key23',
};

document.addEventListener('keydown', (event) => {
  const note = keyMap[event.key];
  if (note) {
    const keyElement = document.querySelector(`[data-key="${note}"]`);
    if (keyElement) {
      keyElement.click();
    }
  }
});

document.onload = selectDifficulty();
