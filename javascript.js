//Styling
const container = document.querySelector('#container');
const lineBreak = document.createElement('br');
const scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreBoard');

const playerScore = document.createElement('span');
playerScore.classList.add('playerScore');
playerScore.textContent = '0';

const computerScore = document.createElement('span');
computerScore.classList.add('computerScore');
computerScore.textContent = '0';

const gameStatus = document.createElement('span');
gameStatus.classList.add('gameStatus');
gameStatus.textContent = "Let's play first to 5!"
gameStatus.style.cssText = ('font-size: 30px');

scoreBoard.appendChild(playerScore);
scoreBoard.appendChild(document.createTextNode(' - '));
scoreBoard.appendChild(computerScore);
scoreBoard.appendChild(gameStatus);
scoreBoard.style.backgroundImage = 'url(./img/scoreboard1.jpeg)';
scoreBoard.style.padding = '20px';

scoreBoard.appendChild(lineBreak);

scoreBoard.appendChild(gameStatus);
container.appendChild(scoreBoard);

//Adding buttons
const startBtn = document.querySelector('#btn');
startBtn.addEventListener('click', fullGame);

const rockBtn = document.querySelector('#rkbtn');
rockBtn.addEventListener('click', function() {
    playRound("rock",computerPlay());
});
const paperBtn = document.querySelector('#pprbtn');
paperBtn.addEventListener('click', function() {
    playRound("paper",computerPlay());
});
const scissorsBtn = document.querySelector('#srsbtn');
scissorsBtn.addEventListener('click', function() {
    playRound("scissors",computerPlay());
});

//Hovering over buttons
rockBtn.addEventListener('mouseover', function() {
    rockBtn.style.backgroundColor = 'lightgray';
});
rockBtn.addEventListener('mouseout', function() {
    rockBtn.style.backgroundColor = 'gray';
});
paperBtn.addEventListener('mouseover', function() {
    paperBtn.style.backgroundColor = 'lightgray';
});
paperBtn.addEventListener('mouseout', function() {
    paperBtn.style.backgroundColor = 'gray';
});scissorsBtn.addEventListener('mouseover', function() {
    scissorsBtn.style.backgroundColor = 'lightgray';
});
scissorsBtn.addEventListener('mouseout', function() {
    scissorsBtn.style.backgroundColor = 'gray';
});
// Update the scores whenever the game results change
let playerScoreValue=0;
let computerScoreValue = 0;
function playerWins(){
    playerScoreValue++;
    playerScore.textContent = playerScoreValue;
    if (playerScoreValue === 5){
            playerScoreValue = 0
            gameStatus.textContent = "You win the game!"
    }
}
function computerWins(){
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
    if (computerScoreValue === 5){
        computerScoreValue = 0
        gameStatus.textContent = "You've lost the game!"
}
}
function tiedRound(){
    alert("That's a tie!")
}
//RPS Game Functions
function playRound(playerChoice, compChoice) {
    const player = playerChoice;
    const computer = compChoice;
    //Player Wins
    if (player === "rock" && computer === "scissors") {
        playerWins();
    } else if (player === "scissors" && computer === "paper") {
        playerWins();
    } else if (player === "paper" && computer === "rock") {
        playerWins();
     } 
    //Player Loses
    else if (player === "rock" && computer === "paper") {
        computerWins();
    } else if (player === "paper" && computer === "scissors") {
        computerWins();
    } else if (player === "scissors" && computer === "rock") {
        computerWins();
    } 
    else if (player !== "rock" && player !== "scissors" && player !== "paper") {
      return "Improper input";}
    //Ties
    else if (player === computer){
        tiedRound();
  }}
  
  function fullGame() {
    let playerScore = 0;
    let compScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let playerChoice = prompt("What's your move?");
      let compChoice = computerPlay();
  
      let result = playRound(playerChoice, compChoice);
      if ((result === "You lose!") || (result === "Improper input")){
        compScore = compScore + 1;
      } 
      else if (result === "Even match! No points."){}
      else {
        playerScore = playerScore + 1;
      }
  
      console.log(result);
      console.log("Your score is " + playerScore + " and the computer score is " + compScore);
    }
    let finalResult;
    if (playerScore < compScore){
      finalResult = "You've lost the whole game!";
    } else if (playerScore === compScore){
      finalResult = "It's a tie!";
    } else {
      finalResult = "You've won the whole game, Conglaturations!";
    }
  
    console.log(finalResult); // Print final result
  }

  
  function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  