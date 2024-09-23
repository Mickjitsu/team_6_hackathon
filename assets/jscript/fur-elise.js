function furElise(){
    displayGame();
    //array of fur Elise notes by number 
    let melodyNotes = [
        23, 22, 23, 22, 23, 18, 21, 19, 4, 16,                                  
        4, 7, 11, 13, 16, 11, 18, 3, 6, 11, 13, 
        18, 4, 19, 1, 4, 11, 23, 22, 23, 22, 23, 
        18, 21, 19, 4, 16, 4, 7, 11, 13, 16, 11,
        18, 3, 6, 11, 19, 18, 4, 16, 16, 18, 19,
        7, 23, 2, 7, 23, 24, 23, 2, 21, 6, 12,
        21, 23, 21, 4, 19, 11, 16, 19, 21, 19,
        11, 18, 11, 11, 23, 11, 23, 23, 23, 22,
        23, 22, 23, 22, 23, 18, 21, 19, 4, 16,              
        4, 7, 11, 13, 16, 11, 18, 3, 6, 11, 19,
        18, 4, 16
    ];

    setNoteArray(melodyNotes); //convert array values to string that matches data-key
    currentSongNotes = []; //reset global array which game uses to play a composition

    //set basic note order
    for (let i=0; i<melodyNotes.length; i++){
        currentSongNotes[i] = new noteTemplate;
        currentSongNotes[i].key = "key" + melodyNotes[i];
        currentSongNotes[i].isWhite = determineNoteType(currentSongNotes[i]);
        currentSongNotes[i].x = allKeys[currentSongNotes[i].key];
        currentSongNotes[i].length = 20; 
        
        if(!i) currentSongNotes[i].y -= currentSongNotes[i].length; //first note begins just outside canvas
        else currentSongNotes[i].y = currentSongNotes[i-1].y - currentSongNotes[i].length -1; //next note above previous note
    }

    //COMPOSE SONG
    
    setSameTiming(8);
    setSameTiming(15);
    setSameTiming(22);
    setSameTiming(35);
    setSameTiming(42);
    
    changeDuration(49, 30);
    changeDuration(50, 30);
    setSameTiming(49);
    addPause(50, 30);

    changeDuration(54, 40);
    changeDuration(55, 40);
    setSameTiming(54);
    addPause(55, -20);

    changeDuration(61, 40);
    changeDuration(62, 40);
    setSameTiming(61);
    addPause(62, -20);

    changeDuration(68, 40);
    changeDuration(69, 40);
    setSameTiming(68);
    addPause(69, -20);

    changeDuration(75, 40);
    changeDuration(76, 40);
    setSameTiming(75);
    addPause(76,30);

    for(let i=77; i<82; i++) changeDuration(i, 15);
    for(let i=77; i<82; i++) addPause(i, 2); 

    addPause(82,1);
    changeDuration(83, 60);
    addPause(83,10);

    for (let i=84; i<89; i++) changeDuration(i, 30);
    for (let i=84; i<89; i++) addPause(i, 1);

    changeDuration(89, 60);
    addPause (89, 5);

    for (let i=90; i<93; i++) changeDuration(i, 50);

    setSameTiming(93);
    setSameTiming(100);
    
    changeDuration(105, 60);
    changeDuration(106, 60);

    changeDuration(107, 120);
    changeDuration(108, 120);
    setSameTiming(107);

    //ready for drawing
    drawSong();
}