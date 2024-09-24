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

var keysDown = {}; //track which keys are pressed

function handleKeyClick() {
    let note = this.getAttribute("data-key");
    
    let playThis = new Audio(`./assets/sounds/${currentInstrument}/${note}.ogg`);
    playThis.play();

    if (this.classList.contains("black-key")) this.classList.toggle("black-key-active");
    else this.classList.toggle("white-key-active");
    
    if(activeNotes[note]) userScore += 1;
    else if (userScore > 0) userScore -= 1;
}

function handleKeyRelease() {
    if (this.classList.contains("black-key")) this.classList.toggle("black-key-active");
    else this.classList.toggle("white-key-active");
}

function initialSetup() {
    let whiteKeys = document.getElementsByClassName("white-key");
    let blackKeys = document.getElementsByClassName("black-key")

    for (let key of whiteKeys) {
        key.addEventListener("click", handleKeyClick);
        key.addEventListener("mouseup", handleKeyRelease);
    }

    for (let key of blackKeys) {
        key.addEventListener("click", handleKeyClick);
        key.addEventListener("mouseup", handleKeyRelease);
    }

    document.addEventListener('keydown', (event) => {
        const note = keyMap[event.key];
        if (note) {
          const keyElement = document.querySelector(`[data-key="${note}"]`);
          if (keyElement) {
            if(!keysDown[note]) {
                keysDown[note] = true;
                keyElement.click();  
            }
          }
        }
    });

    document.addEventListener('keyup', (event) => {
        const note = keyMap[event.key];
        if (note) {
            keysDown[note] = false;
            let element = document.querySelector(`[data-key="${note}"]`);

            if (element.classList.contains("black-key")) element.classList.toggle("black-key-active");
            else element.classList.toggle("white-key-active");
          }
    });
    
    document.getElementById('toggle-instrument').addEventListener('click', toggleInstrument);
}

function toggleInstrument() {
    currentInstrument = currentInstrument === 'piano-notes' ? 'harpsichord-notes' : 'piano-notes';
    document.getElementById('toggle-instrument').textContent =
        currentInstrument === 'piano-notes' ? "Switch to Harpsichord" : "Switch to Piano";
 }

document.onload = initialSetup();