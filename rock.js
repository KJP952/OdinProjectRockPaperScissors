
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber == 0){
        return "rock";
    } else if (randomNumber == 1){
        return "scissors";
    } else {
        return "paper";
    }
}


function getHumanChoice(sign){

    if(sign.toLowerCase() == "rock"){
        return "rock";
    } else if (sign.toLowerCase() == "scissors"){
        return "scissors";
    } else if (sign.toLowerCase() == "paper"){
        return "paper"
    } else {
        return "Invalid choice";
    }
}

function playRound(humanChoice, computerChoice){

    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return "You Win! Rock beats Scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You Win! Scissors beat Paper";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You Win! Paper beats Rock";
    }

    else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return "You Lose! Scissors beat Paper";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }

    else if (humanChoice === computerChoice) {
        return "It's a Tie! You both chose " + humanChoice;
    }

    else {
        return "Invalid choice! Please choose Rock, Paper, or Scissors.";
    }
}




function playGame(){

    for(let i = 0; i < 5; i++){
        let sign = prompt("Rock, Paper, Scissors?");
        let humanSelection = getHumanChoice(sign);
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));

        console.log("Computer Score " + computerScore);
        console.log("Human Score " + humanScore);
    }

    if(computerScore > humanScore){
        return "You Lose Computer wins";
    } else if (humanScore > computerScore) {
        return "You Win Computer lose";
    } else {
        return "You Tie";
    }

}

console.log(playGame());