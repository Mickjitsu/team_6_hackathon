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
    'key13'
  ];

  userInputArr.push(key);

  let currentKey = document.querySelector(`[data-key=${key}]`);
  console.log(key);
  // Check the user input vs the correct note
  if (userInputArr[currentKeyIndex] === keys[currentKeyIndex]) {
    currentKey.classList.add('correct-key');

    setTimeout(() => {
      currentKey.classList.remove('correct-key');
    }, 500);
    console.log('correct');
    currentKeyIndex++;
  } else {
    currentKey.classList.add('wrong-key');

    setTimeout(() => {
      currentKey.classList.remove('wrong-key');
    }, 500);
    userInputArr.pop();
    console.log('wrong');
  }

  if (currentKeyIndex >= keys.length) {
    console.log('Sequence complete');
    // Reset for next sequence
    userInputArr = [];
    currentKeyIndex = 0;
  }
}

function handleKeyClick() {
  let note = this.getAttribute('data-key');
  let playThis = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
  playThis.play();
  checkKey(note);
}
function initialSetup() {
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
