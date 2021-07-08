const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEAFULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function()
{
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase();
    if(selection !== ROCK && 
    selection !== PAPER &&
     selection !== SCISSORS 
     ){
        alert(`Invalid choice! WE choose ${ROCK} for you`)
        return DEAFULT_USER_CHOICE;
    }
}

startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});