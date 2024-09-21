const ctxElement = document.getElementById("notedrop-canvas");
const canvas = ctxElement.getContext("2d");
const colorDarkBrown = "#3d2617";
const colorBackground = "#bdb2a0";

canvas.strokeStyle = colorDarkBrown;
canvas.fillStyle = colorDarkBrown;

/* x position determines note
   y determines note order/timing 
   width determined by note type (black or white)
   length is note duration
*/
   class noteTemplate {
    isWhite = true;
    x = 0;
    y = 0;
    length = 0;
}

/*  array of song notes
    only has white notes, use white note's
    ordinal number to reduce complexity
*/
const twinkleStarNotes = [
    7, 7, 11, 11, 12, 12, 11,
    10, 10, 9, 9, 8, 8, 7,
    11, 11, 10, 10, 9, 9, 8,
    11, 11, 10, 10, 9, 9, 8,
    7, 7, 11, 11, 12, 12, 11,
    10, 10, 9, 9, 8, 8, 7
];

let twinkleStar = [];

function setNotes(){
    for (let i=0; i<twinkleStarNotes.length; i++){
        twinkleStar[i] = new noteTemplate;
        twinkleStar[i].x = twinkleStarNotes[i] * 70; //white key's ordinal number * white key width
        twinkleStar[i].length = 20; //all notes have same short duration
        
        if(!i) twinkleStar[i].y = -20; //first note begins just outside canvas
        else if (i%7 === 0) twinkleStar[i].y = twinkleStar[i-1].y - twinkleStar[i].length - 30; //after every 7 notes a little pause
        else twinkleStar[i].y = twinkleStar[i-1].y - twinkleStar[i].length - 10; //next note above previous note + a little pause
    }

    dropNotes();
}
/**
 * move all notes down a pixel then draw them
 */
function moveDown(){
    for(let note of twinkleStar){
        note.y++; 

        //if note is withing canvas draw it
        if (note.y + note.length > 0 && note.y <= ctxElement.height){
            canvas.beginPath()
            canvas.roundRect(note.x, note.y, 70, note.length, 10);
            canvas.stroke();
            canvas.fill();
            //get note's matching keyboard key div
            let key = note.x / 70;
            let temp = document.getElementById("white-key-container").children[key];
        
            //if note is to be played now (touching bottom of canvas/top of keyboard)
            if (note.y + note.length > ctxElement.height && note.y < ctxElement.height) {
                temp.style.boxShadow = `0 -3px 15px wheat`;
                temp.style.border = `2px solid ${colorBackground}`;
            }
            //if note has just ended
            if (note.y == ctxElement.height) {
                temp.style.boxShadow = "";
                temp.style.border = "";
            }  
        }
    }
}

function dropNotes(){
    canvas.clearRect(0, 0, ctxElement.width, ctxElement.height); //clear entire canvas
    moveDown(); 
    // if last note didn't pass through canvas repeat this function every frame
    if(twinkleStar[twinkleStarNotes.length - 1].y <= ctxElement.height) requestAnimationFrame(dropNotes);
}