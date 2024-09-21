let userInputArr = [];
let currentKeyIndex = 0;

function checkKey(key) {
  /* Keys for Twinkle Twinkle Little Star */

  const keys = [
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
      // notes[0].classList.add('green-text');
    }
  } else {
    currentKey.classList.add('wrong-key');

    setTimeout(() => {
      currentKey.classList.remove('wrong-key');
    }, 500);
    userInputArr.pop();
  }
}

function displayNotes() {
  const notesContainer = document.getElementsByClassName('key-notes')[0];
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
}

function handleKeyClick() {
  let note = this.getAttribute('data-key');
  let playThis = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
  playThis.play();
  checkKey(note);
}
function initialSetup() {
  displayNotes();

  let whiteKeys = document.getElementsByClassName('white-key');
  let blackKeys = document.getElementsByClassName('black-key');
  for (let key of whiteKeys) {
    key.addEventListener('click', handleKeyClick);
  }
  for (let key of blackKeys) {
    key.addEventListener('click', handleKeyClick);
  }
}
document.onload = initialSetup();
