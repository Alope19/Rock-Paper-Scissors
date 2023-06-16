// Global variables
let playerScore = 0
let computerScore = 0
let rounds = 0
const text = document.querySelector(".results")
const score = document.querySelector(".score")


//Calls the function that starts the game
startGame()


//Function that checks if a user clicked on any of the icons and then runs the game
function startGame(){
    const buttons = document.querySelectorAll('div.options')
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            game(button.id)
        })
    })
}
//Function that plays a round in the game
function playRound(playerSelection,computerSelection){
    let winMessage = ("You won the round! computer chose " + computerSelection)
    let loseMessage = ("You lost the round! computer chose " + computerSelection)

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
// function that simulates a game being played
function game(playerChoice){
    if(playerScore < 5 && computerScore < 5 ){
        let computerChoice = getComputerChoice()      
        let result = playRound(playerChoice,computerChoice)
        rounds++

        if (result == "You won the round! computer chose " + computerChoice){
            playerScore++
        }
        else if(result == "You lost the round! computer chose " + computerChoice ){
            computerScore++
        }
        text.textContent = result
        score.textContent = "You: " + playerScore + " Bot: " + computerScore

    }
    if(playerScore === 5 || computerScore === 5) {
        announceWinner()
    }

}
//announce the winner of the game
function announceWinner(){

    if(playerScore > computerScore){
        text.textContent = "You won the game congrats"
    }
    else if(playerScore<computerScore){
        text.textContent = "You lost the game"
    }
    else{
        text.textContent = "Its a Tie"
    }
}
//gets the computer choice for the game
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
