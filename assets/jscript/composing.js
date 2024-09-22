/**
 * adds a pause of received duration after
 * received note (note's ordinal number) 
 */
function addPause(afterNote, duration){
    for (let i=afterNote+1; i<currentSongNotes.length; i++) currentSongNotes[i].y -= duration;
}
/**
 * sets the next note to be played at the same time as received note
 */
function setSameTiming(note){
    let thisNote = currentSongNotes[note];
    let nextNote = currentSongNotes[note+1];
    
    let newValue = thisNote.y - (nextNote.length - thisNote.length);
    let change = newValue - nextNote.y;

    nextNote.y = newValue;
    
    for (let i=note+2; i<currentSongNotes.length; i++) currentSongNotes[i].y += change;
}
/**
 * changes duration of note
 */
function changeDuration(note, duration){
    let difference = duration - currentSongNotes[note].length;
    currentSongNotes[note].length = duration;

    for(let i=note; i<currentSongNotes.length; i++) currentSongNotes[i].y -= difference;
}