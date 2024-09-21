// Code borrowed from https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s 
const highScoresList = document.getElementById("highscores-list");
const highscores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highscores
    .map(score => {
        return `<li class="high-score" >${score.username} - ${score.score}% | ${score.correct}</li>`;
    })
    .join("");