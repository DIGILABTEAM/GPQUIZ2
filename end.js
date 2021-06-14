const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('savescorebtn');
const finalScore = document.getElementById('finalscore');
const mostRecentScore = localStorage.getItem('mostrecentscore');

const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
const MAX_HIGH_SCORES =5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

savehighscore = (e) => {
    e.preventDefault();

const score ={
    score: mostRecentScore,
    name: username.value
};
highscores.push(score);
highscores.sort((a, b) => b.score - a.score);
    highscores.splice(5);

    localStorage.setItem('highscores', JSON.stringify(highscores));
    window.location.assign('highscore.html');
};