function twinkleStar(){
    displayGame();
    //array of twinkle little star notes by number 
    const twinkleStarNotes = [
        13, 13, 20, 20, 22, 22, 20,
        18, 18, 17, 17, 15, 15, 13,
        20, 20, 18, 18, 17, 17, 15,
        20, 20, 18, 18, 17, 17, 15,
        13, 13, 20, 20, 22, 22, 20,
        18, 18, 17, 17, 15, 15, 13
    ];

    currentSongNotes = []; //reset global array which game uses to play a composition

    //compose song and put it into global array
    for (let i=0; i<twinkleStarNotes.length; i++){
        currentSongNotes[i] = new noteTemplate;
        currentSongNotes[i].key = "key" + twinkleStarNotes[i];
        currentSongNotes[i].isWhite = determineNoteType(currentSongNotes[i]);
        currentSongNotes[i].x = allKeys[currentSongNotes[i].key];
        
        currentSongNotes[i].length = 20; //all notes have same short duration
        
        if(!i) currentSongNotes[i].y = -20; //first note begins just outside canvas
        else if (i%7 === 0) currentSongNotes[i].y = currentSongNotes[i-1].y - currentSongNotes[i].length - 35; //after every 7 notes a little pause
        else currentSongNotes[i].y = currentSongNotes[i-1].y - currentSongNotes[i].length - 10; //next note above previous note + a little pause
    }

    //last note longer
    currentSongNotes[currentSongNotes.length - 1].length += 20; 
    currentSongNotes[currentSongNotes.length - 1].y -= 20;

    //ready to draw
    drawSong();
}