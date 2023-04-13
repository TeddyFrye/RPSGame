function playRound(playerChoice, compChoice){
    const player = playerChoice.toLowerCase();
    const computer = compChoice.toLowerCase();
    if (player === "rock"&& computer === "scissors"){
        console.log("Rock beats Scissors, You Win the Round");}
    else if (player === "scissors" && computer === "paper"){
        console.log("Scissors beats Paper, You Win the Round");}
    else if (player === "paper" && computer === "rock"){
        console.log("Surprisingly, Paper does beat Rock. You Win the Round")}
    else if ((player != "rock") && (player != "scissors") && (player != "paper")){
        console.log("Improper input");}
    else {console.log("You lose! Computer wins.")};
}



console.log(playRound("Paper","SCissors"));