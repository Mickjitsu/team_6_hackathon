const ctxElement = document.getElementById("notedrop-canvas");
const canvas = ctxElement.getContext("2d");

class noteTemplate {
    isWhite = true;
    x = 0;
    y = 0;
    length = 0;
}

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
        twinkleStar[i].x = twinkleStarNotes[i] * 70;
        twinkleStar[i].length = 20;
        
        if(!i) twinkleStar[i].y = -20;
        else if (i%7 === 0) twinkleStar[i].y = twinkleStar[i-1].y - 50;
        else twinkleStar[i].y = twinkleStar[i-1].y - 30;
    }

    dropNotes();
}

function moveDown(){
    canvas.strokeStyle = "darkgreen";
    canvas.fillStyle = "green";
    
    for(let note of twinkleStar){
        note.y++;

        if (note.y + note.length > 0 && note.y <= ctxElement.height){
            canvas.beginPath()
            canvas.roundRect(note.x, note.y, 70, note.length, 10);
            canvas.stroke();
            canvas.fill();
            
            let key = (note.x / 70);
            let temp = document.getElementById("white-key-container").children[key];
            
            if (note.y + note.length > ctxElement.height && note.y < ctxElement.height) {
                temp.style.borderTop = "4px solid lightgreen"; 
            }

            if (note.y == ctxElement.height) temp.style.borderTop = ""; 
        }
    }
}

function dropNotes(){
    canvas.clearRect(0, 0, ctxElement.width, ctxElement.height);
    moveDown();
    if(twinkleStar[41].y <= ctxElement.height) requestAnimationFrame(dropNotes);
}