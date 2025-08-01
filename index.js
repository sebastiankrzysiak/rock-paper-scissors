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

// Create a new function named playRound
function playRound(humanChoice, computerChoice) {
    let message = ""
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        message = "Tie!"
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        message = "You lose! Paper beats Rock"
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        message = "You win! Rock beats Scissors"
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        message = "You win! Paper beats Rock"
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper") {
        message = "Tie!"
        console.log("Tie!")
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        message = "You lose! Scissors beats Paper"
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        message = "You lose! Rock beats Scissors"
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        message = "You win! Scissors beats Paper"
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors") {
        message = "Tie!"
    }

    const result = document.querySelector("#result")
    const score = document.querySelector("#score")
    result.textContent = message
    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore

    if (humanScore === 5 || computerScore === 5) {
        const result = document.querySelector("#result");
        result.textContent = humanScore === 5 ? "Human is the Winner!" : "Computer is the Winner!";
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }    
}

// Create a new function named playGame
function playGame() {
    const buttons = document.querySelectorAll("button")
    
    const rock = buttons[0]
    const paper = buttons[1]
    const scissors = buttons[2]

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
    })

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
    })

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
    })
}

let humanScore = 0
let computerScore = 0

playGame()
