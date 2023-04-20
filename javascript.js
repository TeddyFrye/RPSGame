//Styling
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent ='';
content.style.cssText = ("color: white; background: darkgrey;")

container.appendChild(content);

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


//RPS Game Functions
function playRound(playerChoice, compChoice) {
    const player = playerChoice;
    const computer = compChoice;
  
    if (player === "rock" && computer === "scissors") {
      console.log( "Rock beats Scissors, You Win the Round");
    } else if (player === "scissors" && computer === "paper") {
        console.log("Scissors beats Paper, You Win the Round");
    } else if (player === "paper" && computer === "rock") {
      console.log("Surprisingly, Paper does beat Rock. You Win the Round");
    } else if (player === "rock" && computer === "paper") {
        console.log("They chose paper, you lose");
    } else if (player === "paper" && computer === "scissors") {
        console.log("They chose scissors, you lose.");
    } else if (player === "scissors" && computer === "rock") {
        console.log("They chose rock, you lose.");
    } 
    else if (player !== "rock" && player !== "scissors" && player !== "paper") {
      return "Improper input";}
    else if (player === computer){
        return "Even match! No points."
      }
    else {
      console.log("You Lose");
    }

  }
  
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
  
  