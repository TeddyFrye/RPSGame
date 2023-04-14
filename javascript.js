//Styling
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Filler text!';
content.style.cssText = ("color: white; background: darkgrey;")

container.appendChild(content);

//Adding buttons
const startBtn = document.querySelector('#btn');
startBtn.addEventListener('click', fullGame);




//RPS Game Functions
function playRound(playerChoice, compChoice) {
    const player = playerChoice.toLowerCase();
    const computer = compChoice.toLowerCase();
  
    if (player === "rock" && computer === "scissors") {
      return "Rock beats Scissors, You Win the Round";
    } else if (player === "scissors" && computer === "paper") {
      return "Scissors beats Paper, You Win the Round";
    } else if (player === "paper" && computer === "rock") {
      return "Surprisingly, Paper does beat Rock. You Win the Round";
    } else if (player !== "rock" && player !== "scissors" && player !== "paper") {
      return "Improper input";}
      else if (player === computer){
        return "Even match! No points."
      }
    else {
      return "You lose!";
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
  
  