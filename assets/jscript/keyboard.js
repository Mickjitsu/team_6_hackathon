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

var keysDown = {};

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

    document.addEventListener('keydown', (event) => {
        const note = keyMap[event.key];
        if (note) {
          const keyElement = document.querySelector(`[data-key="${note}"]`);
          if (keyElement) {
            if(!keysDown[note]) {
                keysDown[note] = true;
                keyElement.click();  
                keyElement.classList.toggle("active");
            }
          }
        }
    });

    document.addEventListener('keyup', (event) => {
        const note = keyMap[event.key];
        if (note) {
            keysDown[note] = false;
            document.querySelector(`[data-key="${note}"]`).classList.toggle("active");
          }
    });
}

document.onload = initialSetup();