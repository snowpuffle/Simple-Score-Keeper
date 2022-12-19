
// app.js //

// playerOne Object
const playerOne = {
    score: 0,
    button: document.querySelector('#playerOneButton'),
    display: document.querySelector('#playerOneDisplay')
}

// playerTwo Object
const playerTwo = {
    score: 0,
    button: document.querySelector('#playerTwoButton'),
    display: document.querySelector('#playerTwoDisplay')
}

// variables
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playTo');

let isGameOver = false;
let winningScore = 3;

// Update Score for playerOne
playerOne.button.addEventListener('click', function () {
    updateScores(playerOne, playerTwo);
})

// Update Score for playerTwo
playerTwo.button.addEventListener('click', function () {
    updateScores(playerTwo, playerOne);
})

// Update Winning Score
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

// Reset Game
resetButton.addEventListener('click', reset)

// Update Score Function
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

// Reset Score Function
function reset() {
    isGameOver = false;

    for (let p of [playerOne, playerTwo]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}