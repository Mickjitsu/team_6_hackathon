const saveButton = document.getElementById("btn-save");
const username = document.getElementById("username");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("lastScore");
const questionsCorrect = localStorage.getItem("notesCorrect");
finalScore.innerText = `${mostRecentScore} % | ${questionsCorrect} correct notes`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
});

saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        username: username.value,
        correct: questionsCorrect
    };
    highScores.push(score);

    highScores.sort(function (a, b) { return b.score - a.score; });

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("piano-game.html");

});