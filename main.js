let playerScore = 0
let computerScore = 0
let rounds = 0
startGame()

function startGame(){
    const buttons = document.querySelectorAll('div.options')
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            game(button.id)
        })
    })
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

function game(playerChoice){
    if(rounds < 5){
        let computerChoice = getComputerChoice()      
        let result = playRound(playerChoice,computerChoice)
        rounds++

        if (result == "You win! computer chose " + computerChoice){
            console.log(result)
            playerScore++
        }
        else if(result == "You lose! computer chose " + computerChoice ){
            console.log(result)
            computerScore++
        }
        else{
            console.log(result)
            computerScore++
        }

    }
    else if(rounds >= 5){
        announceWinner()
    }

}

function announceWinner(){

    if(playerScore > computerScore){
        console.log("You won the game congrats")
    }
    else if(playerScore<computerScore){
        console.log("You lost")
    }
    else{
        console.log("Its a Tie")
    }
}

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
