function handleKeyClick() {
    let note = this.getAttribute("data-key");
    let playThis = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
    playThis.play();
}

function initialSetup() {
    let whiteKeys = document.getElementsByClassName("white-key");
    let blackKeys = document.getElementsByClassName("black-key")

    for (let key of whiteKeys) {
        key.addEventListener("click", handleKeyClick);
    }

    for (let key of blackKeys) {
        key.addEventListener("click", handleKeyClick);
    }

    document.addEventListener("keydown", function (event) {
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
            '=': 'key21', // G# note

        };

        let note = keyMap[event.key];
        console.log('note', note);

        if (note) {
            let playThis = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
            playThis.play();
        }
    });
}

document.onload = initialSetup();

document.addEventListener("DOMContentLoaded", function () {
    let scrollableDiv = document.getElementById('scrollableDiv');
    console.log('scrollableDiv', scrollableDiv);

    // Start from the bottom of the div
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;

    // Auto scroll the div
    let scrollInterval = setInterval(() => {
        scrollableDiv.scrollTop -= 1; // Adjust this value to control the scroll speed
        // Reset to bottom if the top is reached
        if (scrollableDiv.scrollTop <= 0) {
            scrollableDiv.scrollTop = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;
        }
    }, 40); // Speed of the scrolling (40ms per scroll step)
});