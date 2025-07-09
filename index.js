// Create a new function named getComputerChoice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)

    if (choice === 0) {
        return "rock"
    }
    else if (choice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

// Create a new function named getHumanChoice
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    
    if (choice.toLowerCase() === "rock") {
        return "rock"
    }
    else if (choice.toLowerCase() === "paper") {
        return "paper"
    }
    else if (choice.toLowerCase() === "scissors") {
        return "scissors"
    }
    else {
        return "No Choice"
    }
}

// Create a new function named playRound
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        console.log("Tie!")
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log("You win! Rock beats Scissors")
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("You win! Paper beats Rock")
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper") {
        console.log("Tie!")
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("You win! Scissors beats Paper")
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors") {
        console.log("Tie!")
    }
}

// Create a new function named playGame
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
}

let humanScore = 0
let computerScore = 0

playGame()
