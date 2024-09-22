const saveButton = document.getElementById("btn-save");
const username = document.getElementById("username");
const finalScore = document.getElementById("final-score");
const songPlayed = localStorage.getItem("songPlayed");
const notesCorrect = localStorage.getItem("notesCorrect");
finalScore.innerText = `${notesCorrect} correct notes for ${songPlayed}`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
});

saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    const score = {
        song: songPlayed,
        username: username.value,
        correct: notesCorrect
    };
    highScores.push(score);

    highScores.sort(function (a, b) { return b.score - a.score; });

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("piano-game.html");

});