const keyMap = {
    'q': 'key01', 'w': 'key03', 'e': 'key05', 'r': 'key06', 't': 'key08', 'y': 'key10', 'u': 'key12',
    'v': 'key13', 'b': 'key15', 'n': 'key17', 'm': 'key18', ',': 'key20', '.': 'key22', '/': 'key24',
    '2': 'key02', '3': 'key04', '5': 'key07', '6': 'key09', '7': 'key11', 'g': 'key14', 'h': 'key16',
    'k': 'key19', 'l': 'key21', ';': 'key23'
};

const durations = Array(42).fill(150);
let keyPressStart = {};
let userInputs = [];
let clicksLeft = 42;
let finished = false;

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.getElementById('twinkle-star').addEventListener('click', resetGame);

document.getElementById('piano-container').addEventListener('mousedown', handleMouseDown);

function handleKeyDown(event) {
    playNoteIfMapped(event.key);
    recordKeyPressStart(event.key);
    decrementClicksLeft();
}

function handleKeyUp(event) {
    recordKeyPressDuration(event.key);
    checkUserInputs();
}

function handleMouseDown() {
    const clickStart = Date.now();

    // Use 'mouseup' to capture the duration of the mouse press
    document.addEventListener('mouseup', function handleMouseUp() {
        const clickDuration = Date.now() - clickStart;
        userInputs.push({ key: 'click', duration: clickDuration });
        checkUserInputs();
        decrementClicksLeft();
        // Remove the mouseup event listener after it runs
        document.removeEventListener('mouseup', handleMouseUp);
    }, { once: true });  // Ensure this listener only fires once per click
}

function playNoteIfMapped(key) {
    const note = keyMap[key];
    if (note) {
        playAudio(note);
        highlightKey(note);
    }
}

function playAudio(note) {
    const audio = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
    audio.play();
}

function highlightKey(note) {
    const keyElement = document.querySelector(`[data-key="${note}"]`);
    keyElement.classList.add('active');
    setTimeout(() => keyElement.classList.remove('active'), 150);
}

function recordKeyPressStart(key) {
    if (!keyPressStart[key]) {
        keyPressStart[key] = Date.now();
    }
}

function recordKeyPressDuration(key) {
    if (keyPressStart[key]) {
        const duration = Date.now() - keyPressStart[key];
        userInputs.push({ key, duration });
        delete keyPressStart[key];
    }
}

function checkUserInputs() {
    if (userInputs.length === durations.length) {
        const percentageMatched = calculateMatchPercentage();
        displayResults(percentageMatched);
        resetGame();
    }
}

function calculateMatchPercentage() {
    const matchedDurations = userInputs.filter((input, index) => Math.abs(input.duration - durations[index]) <= 50).length;
    return (matchedDurations / durations.length) * 100;
}

function displayResults(percentageMatched) {
    document.getElementById('twinkle-star').innerText = 'Start Again!';
    alert(`Game Over! Your score is: ${percentageMatched.toFixed(2)}%`);
    document.getElementById('score').innerText = `Your score is: ${percentageMatched.toFixed(2)}%`;

    // Save score to localStorage
    localStorage.setItem('lastScore', percentageMatched.toFixed(2));
    localStorage.setItem('notesCorrect', userInputs.filter((input, index) => Math.abs(input.duration - durations[index]) <= 50).length);

    return window.location.assign("end.html");
}

function decrementClicksLeft() {
    if (clicksLeft > 0) {
        clicksLeft--;
        updateClicksLeft();
    }
}

function updateClicksLeft() {
    document.getElementById('clicks-left').innerText = `Clicks left: ${clicksLeft}`;
}

function resetGame() {
    userInputs = [];
    keyPressStart = {};
    clicksLeft = 42;
    finished = false;
    updateClicksLeft();
}