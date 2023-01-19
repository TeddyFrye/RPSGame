const gameChoice = ["Rock", "Paper", "Scissors"];
function getComputerChoice(gameChoice){
    let x = gameChoice[Math.floor(Math.random()*gameChoice.length)];
    return x;
}
