/* 1-C 2-C# 3-D* 4-D# 5-E
   6-F 7-F# 8-G 9-G# 10-A
   11-A# 12-B 13-C 14-C#
   15-D 16-D# 17-E 18-F
   19-F# 20-G 21-G# 22-A
   23-A# 24-B
*/
let melodyNotes = [
    17, 16, 17, 16, 17, 12, 15, 13, 10, 10, 12, 12, 13,
    17, 16, 17, 16, 17, 12, 15, 13, 10, 10, 12, 12, 13, 12, 10,
    10, 12, 13, 17, 17, 18, 17, 15, 15, 17, 15, 13, 13, 15, 13, 12,
    17, 17, 17, 17,
    16, 17, 16, 17, 12, 15, 13, 10, 10, 12, 12, 13, 12, 10
]

changeMusicKey(melodyNotes, 6);

function furElise(){
    currentSongNotes = [];

    for (let i=0; i<melodyNotes.length; i++){
        currentSongNotes[i] = new noteTemplate;
        currentSongNotes[i].key = "key" + melodyNotes[i];
        currentSongNotes[i].isWhite = determineNoteType(currentSongNotes[i]);
        currentSongNotes[i].x = allKeys[currentSongNotes[i].key];
        currentSongNotes[i].length = 20; 
        
        if(!i) currentSongNotes[i].y = -20; //first note begins just outside canvas
        else currentSongNotes[i].y = currentSongNotes[i-1].y - currentSongNotes[i].length -10; //next note above previous note
    }

    drawSong();
}