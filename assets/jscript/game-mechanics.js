/* global variables */
const ctxElement = document.getElementById("notedrop-canvas");
const canvas = ctxElement.getContext("2d");
const colorDarkBrown = "#3d2617";
const colorBackground = "#bdb2a0";

canvas.strokeStyle = colorDarkBrown;
canvas.fillStyle = colorDarkBrown;

var allKeys = {}; //to contain keyboard key coordinates
var currentSongNotes = []; //to contain notes for gameplay
var blackNotes = []; //to contain all black-key divs
var playthroughOn = false; //autoplay or not

var userScore = 0; //score tracking
var activeNotes = {}; //key: should-currently-be-played

/* x - coordinate in canvas
   y - coordinate in canvas
   isWhite - self-explanatory
   length - note duration (canvas rectangle height)
   playThis - to contain note audio for possible autoplay
   key - "data-key" attribute value for corresponding key on keyboard
*/
class noteTemplate {
    isWhite = null;
    key = "";
    x = 0;
    y = 0;
    length = 0;
    playThis = null;
}
/**
 * sets "allKeys{}" as 'data-key attribute': x coordinate
 * relative to parent(#piano-container)
 */
function setAllKeys(){
    let pianoLoc = document.getElementById("piano-container").getBoundingClientRect().x;
    let whiteNotes = document.getElementsByClassName("white-key");
    blackNotes = document.getElementsByClassName("black-key");

    for (let i of whiteNotes) {
        allKeys[i.getAttribute("data-key")] = i.getBoundingClientRect().x - pianoLoc;
    }

    for (let i of blackNotes) {
        allKeys[i.getAttribute("data-key")] = i.getBoundingClientRect().x - pianoLoc;
    }
   
    for (let i=1; i<25; i++){
        if(i<10) activeNotes["key" + "0" + i] = false;
        else activeNotes["key" + i] = false;
    }
}
/**
 * hides welcoming screen, shows keyboard and
 * note dropping canvas
 */
function displayGame(){
    document.getElementsByClassName("welcome-container")[0].classList.add("hide");
    document.getElementById("piano-container").classList.remove("hide");
    document.getElementById("notedrop-canvas").style.display = "";
    document.getElementById("score-display").classList.remove("hide");
    setAllKeys();
}
/**
 * returns true for white notes and
 * false for black notes 
 */
function determineNoteType(note){
    for (let i of blackNotes) if(i.getAttribute("data-key") === note.key) return false;
    return true;
}
/**
 * converts array elements to string and adds
 * 0 as prefix if number is < 10
 */
function setNoteArray(array){
    for(let i=0; i<array.length; i++){
        if (array[i] < 10) array[i] = "0" + array[i];
        else array[i] = array[i].toString();
    }
}
/**
 * moves down and draws all notes,
 * adds visual effects for note touching
 * keyboard key
 */
function moveDown(){
    for(let note of currentSongNotes){
        note.y++; 

        //if note is withing canvas draw it
        if (note.y + note.length > 0 && note.y <= ctxElement.height){
            //get note's matching keyboard key div
            let temp = document.querySelector(`[data-key=${note.key}]`);

            canvas.beginPath();
            canvas.roundRect(note.x, note.y, temp.offsetWidth, note.length, 10);
            canvas.stroke();
            canvas.fill();

            //if note is to be played now (touching bottom of canvas/top of keyboard)
            if (note.y + note.length > ctxElement.height && note.y < ctxElement.height) {
                temp.style.boxShadow = `0 -3px 15px wheat`;
                temp.style.borderTop = "2px solid wheat";

                activeNotes[note.key] = true;
                
                //if play requested play notes and add effects to autoplayed keys
                if(playthroughOn){
                    if(note.isWhite) temp.style.border = `2px solid ${colorBackground}`
                    else temp.style.outline = `2px solid wheat`;
                
                    //play the note during composing
                    if(!note.playThis) {
                        note.playThis = new Audio(`./assets/sounds/piano-notes/${note.key}.ogg`);
                        note.playThis.play();
                    }
                }
            }
            //if note has just ended
            if (note.y >= ctxElement.height) {
                activeNotes[note.key] = false;
                temp.style.boxShadow = "";
                temp.style.border = "";
                temp.style.outline = "";
            }  
        }
    }
}

function drawSong(){
    canvas.clearRect(0, 0, ctxElement.width, ctxElement.height); //clear entire canvas
    moveDown(); 
    // if last note didn't pass through canvas repeat this function every frame
    if(currentSongNotes[currentSongNotes.length - 1].y <= ctxElement.height) requestAnimationFrame(drawSong);
    document.getElementById("user-score").innerText = userScore;
}