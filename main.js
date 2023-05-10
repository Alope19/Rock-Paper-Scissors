
let computerChoice = getComputerChoice()
let playerChoice = prompt("Rock Paper or Scissors?").toLowerCase()
console.log(playerChoice)
console.log(computerChoice)
console.log(playRound(playerChoice,computerChoice))














function getComputerChoice(){
    value = Math.floor(Math.random() * 3);

    if (value === 1){
        return("paper")
    }
    else if(value === 2){
        return "rock"
    }
    else{
        return "scissors"
    }
}
function playRound(playerSelection,computerSelection){
    let winMessage = ("You win! computer chose " + computerSelection)
    let loseMessage = ("You lose! computer chose " + computerSelection)

    if(computerSelection == playerSelection){
        return("Tie computer also chose " + computerSelection)
    }
    else if(computerSelection === "rock"){
        if (playerSelection === "paper"){
            return winMessage
        }
        else{
            return loseMessage
        }
    }
    else if(computerSelection === "paper"){
        if (playerSelection === "scissors"){
            return winMessage
        }
        else{
            return loseMessage
        }
    }
    else if(computerSelection === "scissors"){
        if (playerSelection === "rock"){
            return winMessage
        }
        else{
            return loseMessage
        }
    }

}
