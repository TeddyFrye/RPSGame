const gameChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let compChoice = gameChoice[Math.floor(Math.random()*gameChoice.length)];
    return compChoice;
}

function getPlayerChoice(){
    let str = prompt("Type your weapon of choice");
    if(
        str == "rock" || str =="Rock" || str =="ROCK" 
        || str =="rOcK" || str =="rOCK" || str =="rocK" 
        || str =="RoCk" || str =="roc" || str == "rok")
        {let playerChoice = "Rock";
        return playerChoice;}
    else if(
        str == "paper" || str =="Paper" || str =="pAper" 
        || str =="papar" || str =="PAPER" || str =="PAper" 
        || str =="papers" || str =="newspaper" || str =="Newspaper")
        {let playerChoice = "Paper";
        return playerChoice;} 
    else if(
        str == "scissors" || str =="Scissors" || str =="SCISSORS" 
        || str =="scissor" || str =="Scissor" || str =="SCISSOR" 
        || str =="scisor" || str =="sissor" || str =="Sissor")
       {let playerChoice = "Scissors";
       return playerChoice;} 
    else
        {let playerChoice = ("You have inputted an invalid weapon. The computer defeats you handily.");
        return playerChoice;}
    
}
function playRound(playerChoice, compChoice){
    if ((playerChoice == "Rock" && compChoice == "Scissors") ||
        (playerChoice == "Paper" && compChoice == "Rock")||
        (playerChoice == "Scissors" && compChoice == "Paper"))
        {return "You Win";}
    else if (playerChoice == compChoice)
        {return "It's a tie, try again!";}
    else {return "You Lose"}
}
function run(){
        let playerChoice = getPlayerChoice();
        let compChoice = getComputerChoice();
        return playRound(playerChoice, compChoice)
      }

function game(){ 
      let playerScore = 0
      let compScore = 0

    for (let i = 0; i < 5; i++){
        let result = run();
        console.log(result);
        if (result == "You Win"){playerScore++;}
        else if (result == "You Lose"){compScore++;}
        else {};}  
   if (playerScore > compScore) {return "You win the whole game!"};
        else if (compScore > playerScore){return "The computer is victorious."};
        else {return "Nobody wins, go home."}
    }





    
console.log(game())