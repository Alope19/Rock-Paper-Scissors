
let computerChoice = getComputerChoice()
let playerChoice = prompt("Rock Paper or Scissors?").toLowerCase()









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
function game(){
    let playerScore = 0
    let computerSCore = 0
    for(let i = 0; i < 0; i++){
        let result = playRound()

        if (result == "You win! computer chose " + computerChoice){
            console.log(result)
            playerscore++
        }
        else{
            console.log(result)
            computerSCore++
        }

    }
    if(playerScore > computerSCore){
        console.log("You won the game congrats")
    }
    else{
        console.log("You lost to computer how embarrasing")
    }

}
