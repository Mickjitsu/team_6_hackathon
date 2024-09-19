const canvas = document.getElementById("notedrop-canvas").getContext("2d");
const spacer = 26.48;
const whiteKey = 70;
const blackKey = 39.73;

class noteTemplate {
    x = 0;
    y = 0;
    length = 0;
    isWhite = true;
}

function drawNotes(x,y,width,height){
    canvas.fillStyle = "green";
    canvas.fillRect(x, y, width, height);
}

function moveDown(){

}

function drawNote(){
    canvas.clear();
    moveDown();
    drawNotes();

    requestAnimationFrame(canvasUpdate);
}

canvasUpdate();