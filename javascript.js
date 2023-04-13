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
      return "Improper input";
    } else {
      return "You lose! Computer wins.";
    }
  }
  
  console.log(playRound("rock", "paper")); 
  