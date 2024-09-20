
/* Notes for Twinkle Twinkle Little Star */
const notes = [
    { note: 'C', duration: 500 },
    { note: 'C', duration: 500 },
    { note: 'G', duration: 500 },
    { note: 'G', duration: 500 },
    { note: 'A', duration: 500 },
    { note: 'A', duration: 500 },
    { note: 'G', duration: 1000 },
    
    { note: 'F', duration: 500 },
    { note: 'F', duration: 500 },
    { note: 'E', duration: 500 },
    { note: 'E', duration: 500 },
    { note: 'D', duration: 500 },
    { note: 'D', duration: 500 },
    { note: 'C', duration: 1000 }
];

const keyMap = {
    'a': 'key01', // C note
    's': 'key03', // D note
    'd': 'key05', // E note
    'f': 'key06', // F note
    'g': 'key08', // G note
    'h': 'key10', // A note
    'j': 'key12', // B note
    'k': 'key13', // C note
    'l': 'key15', // D note
    ';': 'key17', // E note
    "'": 'key18', // F note
    'z': 'key20', // G note
    'x': 'key22', // A note
    'c': 'key24', // B note

    '2': 'key02', // C# note
    '3': 'key04', // D# note
    '6': 'key07', // F# note
    '7': 'key09', // G# note
    '8': 'key11', // A# note
    '9': 'key14', // C# note
    '0': 'key16', // D# note
    '-': 'key19', // F# note
    '=': 'key21'  // G# note
};

/* Highlighting keys */
/* need to create function to cue highlight/unlight based on intervals according to song */
/* add class .highlight to stylesheet */

/**
 * Highlight keys
 */

function highlightKey(note) {
    const key = document.querySelector(`.white-key[data-key="${note}"]`);
    if (key) {
        key.classList.add('highlight');
    }
}


/**
 * Unhighlights keys 
 */

function unhighlightKey(note) {
    const key = document.querySelector(`.white-key[data-key="${note}"]`);
    if (key) {
        key.classList.remove('highlight');
    }
}

/**
 * Steps for Pracice Mode:
 * Instructions
 * Select difficulty (if we have option)/ select song (if options)
 * Press play for demo
 * First clip of song plays while Keys highlight at intervals (do we want the notes to appear on the keys as they highlight?) 
 * After clip ends, user is prompted to "play/practice along" or "replay demo"
 * Keys highlight as before, flash green/correct color when pressed or red/incorrect color when missed
 * tally at end for number of missed notes?
 * option to repeat clip or move to second clip
 */