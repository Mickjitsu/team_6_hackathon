function handleKeyClick(){
    let note = this.getAttribute("data-key");
    let playThis = new Audio(`./assets/sounds/piano-notes/${note}.ogg`);
    playThis.play();
}

function initialSetup(){
    let whiteKeys = document.getElementsByClassName("white-key");
    let blackKeys = document.getElementsByClassName("black-key")

    for (let key of whiteKeys){
        key.addEventListener("click", handleKeyClick);
    }

    for (let key of blackKeys){
        key.addEventListener("click", handleKeyClick);
    }
}

document.onload = initialSetup();