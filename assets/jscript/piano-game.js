const keyMap = {
    'q': 'key01', 'w': 'key03', 'e': 'key05', 'r': 'key06', 't': 'key08', 'y': 'key10', 'u': 'key12',
    'v': 'key13', 'b': 'key15', 'n': 'key17', 'm': 'key18', ',': 'key20', '.': 'key22', '/': 'key24',
    '2': 'key02', '3': 'key04', '5': 'key07', '6': 'key09', '7': 'key11', 'g': 'key14', 'h': 'key16',
    'k': 'key19', 'l': 'key21', ';': 'key23'
};

const twinkleStarNotes = [
    'v', 'v', ',', ',', '.', '.', ',',
    'm', 'm', 'n', 'n', 'b', 'b', 'v',
    ',', ',', 'm', 'm', 'n', 'n', 'b',
    ',', ',', 'm', 'm', 'n', 'n', 'b',
    'v', 'v', ',', ',', '.', '.', ',',
    'm', 'm', 'n', 'n', 'b', 'b', 'v'
];

let melodyNotes = [
    ';', '.', ';', '.', ';', 'm', 'l', 'k', '3', 'h',
    '3', '5', '7', 'v', 'h', '7', 'm', 'w', 'r', '7', 'v',
    'm', '3', 'k', 'q', '3', '7', ';', '.', ';', '.', ';',
    'm', 'l', 'k', '3', 'h', '3', '5', '7', 'v', 'h', '7',
    'm', 'w', 'r', '7', 'k', 'm', '3', 'h', 'h', 'm', 'k',
    '5', ';', '2', '5', ';', '/', ';', '2', 'l', 'r', 'u',
    'l', ';', 'l', '3', 'k', '7', 'h', 'k', 'l', 'k',
    '7', 'm', '7', '7', ';', '7', ';', ';', ';', '.',
    ';', '.', ';', '.', ';', 'm', 'l', 'k', '3', 'h',
    '3', '5', '7', 'v', 'h', '7', 'm', 'w', 'r', '7', 'k',
    'm', '3', 'h'
];

let durations = Array(42).fill(150);  // Duration of notes for Twinkle Star

let currentNotes = [...twinkleStarNotes];
let keyPressStart = {};
let userInputs = [];
let clicksLeft = 0;
let finished = false;

// Initialize game and add event listeners
function startGame() {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.getElementById('piano-container').addEventListener('mousedown', handleMouseDown);

    // Bind resetGame to the two song buttons
    document.getElementById('twinkle-star').addEventListener('click', () => resetGame('twinkle-star'));
    document.getElementById('fur-elise').addEventListener('click', () => resetGame('fur-elise'));
}

// Handle keydown event
function handleKeyDown(event) {
    playNoteIfMapped(event.key);
    recordKeyPressStart(event.key);
    decrementClicksLeft();
    keyOrder(event.key);
}

// Handle keyup event
function handleKeyUp(event) {
    recordKeyPressDuration(event.key);
    checkUserInputs();
}

// Mouse events for playing notes (if needed)
function handleMouseDown() {
    const clickStart = Date.now();

    document.addEventListener('mouseup', function handleMouseUp() {
        const clickDuration = Date.now() - clickStart;
        userInputs.push({ key: 'click', duration: clickDuration });
        checkUserInputs();
        decrementClicksLeft();
        document.removeEventListener('mouseup', handleMouseUp);
    }, { once: true });
}

// Play note based on key press
function playNoteIfMapped(key) {
    const note = keyMap[key];
    if (note) {
        playAudio(note);
        highlightKey(note);
    }
}

// Play audio file for the note
function playAudio(note) {
    const audio = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
    audio.play();
}

// Highlight key press on the UI
function highlightKey(note) {
    const keyElement = document.querySelector(`[data-key="${note}"]`);
    keyElement.classList.add('active');
    setTimeout(() => keyElement.classList.remove('active'), 150);
}

// Record key press start time
function recordKeyPressStart(key) {
    if (!keyPressStart[key]) {
        keyPressStart[key] = Date.now();
    }
}

// Record key press duration
function recordKeyPressDuration(key) {
    if (keyPressStart[key]) {
        const duration = Date.now() - keyPressStart[key];
        userInputs.push({ key, duration });
        delete keyPressStart[key];
    }
}

// Check if the user has completed the song
function checkUserInputs() {
    if (userInputs.length === durations.length) {
        const durationMatchPercentage = calculateDurationMatchPercentage();
        const correctNotesCount = calculateCorrectNotesCount();
        const notesMatchPercentage = (correctNotesCount / currentNotes.length) * 100;
        displayResults(durationMatchPercentage, notesMatchPercentage, correctNotesCount);
        resetGame();
    }
}

// Calculate match percentage for note durations
function calculateDurationMatchPercentage() {
    const matchedDurations = userInputs.filter((input, index) => Math.abs(input.duration - durations[index]) <= 50).length;
    return (matchedDurations / durations.length) * 100;
}

// Calculate how many notes were correct
function calculateCorrectNotesCount() {
    return userInputs.filter((input, index) => input.key === currentNotes[index]).length;
}

// Display results after game ends
function displayResults(durationMatchPercentage, notesMatchPercentage, correctNotesCount) {
    alert(`Game Over! Duration match: ${durationMatchPercentage.toFixed(2)}%, Notes match: ${notesMatchPercentage.toFixed(2)}%`);
    document.getElementById('score').innerText = `Duration match: ${durationMatchPercentage.toFixed(2)}%`;
    document.getElementById('notes-correct-text').innerText = `Notes correct: ${correctNotesCount}`;

    // localStorage.setItem('lastDurationScore', durationMatchPercentage.toFixed(2));
    localStorage.setItem('lastNotesScore', notesMatchPercentage.toFixed(2));
    localStorage.setItem('notesCorrect', correctNotesCount);
    return window.location.assign("end.html");

}

// Update clicks left dynamically
function decrementClicksLeft() {
    if (clicksLeft > 0) {
        clicksLeft--;
        updateClicksLeft();
    }
    if (clicksLeft === 0) {
        document.getElementById('clicks-left').innerText = 'Game Over!';
    }
}

// Update UI to show how many clicks are left
function updateClicksLeft() {

    document.getElementById('clicks-left').innerText = `Clicks left: ${clicksLeft}`;
}

// Reset game for a specific song
function resetGame(song) {
    userInputs = [];
    keyPressStart = {};
    finished = false;

    // Set song-specific settings
    if (song === 'fur-elise') {
        currentNotes = [...melodyNotes];
        clicksLeft = 109; // Update clicks for Fur Elise
        durations = Array(109).fill(150); // Adjust the durations array
        localStorage.setItem('songPlayed', 'Fur Elise');
    } else {
        currentNotes = [...twinkleStarNotes];
        clicksLeft = 42; // Update clicks for Twinkle Star
        durations = Array(42).fill(150); // Adjust the durations array
        localStorage.setItem('songPlayed', 'Twinkle Star');
    }
    updateClicksLeft();
}

// Check if key pressed matches the expected key in sequence
function keyOrder(keyPressed) {
    if (currentNotes.length > 0) {
        const expectedKey = currentNotes[0];
        if (keyPressed === expectedKey) {
            currentNotes.shift();
        }
    }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', startGame);
// Show modal on page load
document.addEventListener('DOMContentLoaded', function () {
    const modal = new bootstrap.Modal(document.getElementById('instructionsModal'));
    modal.show();
});