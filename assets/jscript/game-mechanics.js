const ctxElement = document.getElementById("notedrop-canvas");
const canvas = ctxElement.getContext("2d");
const colorDarkBrown = "#3d2617";
const colorBackground = "#bdb2a0";

canvas.strokeStyle = colorDarkBrown;
canvas.fillStyle = colorDarkBrown;

var allKeys = {};
var currentSongNotes = [];
var blackNotes = [];
/* x position determines note
   y determines note order/timing 
   width determined by note type (black or white)
   length is note duration
*/
   class noteTemplate {
    isWhite = null;
    key = "";
    x = 0;
    y = 0;
    length = 0;
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
}
/**
 * returns true for white notes and
 * false for black notes 
 */
function determineNoteType(note){
    for (let i of blackNotes){
        if(i.getAttribute("data-key") === note.key) return false;
    }
    return true;
}
/**
 * changes value of each element from 
 * received array by received change amount
 */
function changeMusicKey(array, change){
    for (let i=0; i<array.length; i++) array[i] += change;
}
/**
 * returnes width of received note in pixels 
 */
function noteWidth(checkNote){
    if (checkNote.isWhite) return 70; //white key width
    else return 39.73; //black key width
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
            canvas.beginPath();
            canvas.roundRect(note.x, note.y, noteWidth(note), note.length, 10);
            canvas.stroke();
            canvas.fill();
            //get note's matching keyboard key div
            let temp = document.querySelector(`[data-key=${note.key}]`);
        
            //if note is to be played now (touching bottom of canvas/top of keyboard)
            if (note.y + note.length > ctxElement.height && note.y < ctxElement.height) {
                temp.style.boxShadow = `0 -3px 15px wheat`;
                
                if(note.isWhite) temp.style.border = `2px solid ${colorBackground}`
                else temp.style.outline = `2px solid wheat`;
            }
            //if note has just ended
            if (note.y == ctxElement.height) {
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
}

function devTest(){
    
}

document.onload = setAllKeys();