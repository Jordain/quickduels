const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

const inputField = document.getElementById('inputField');
const outputDiv = document.getElementById('output');

  // Function to handle key press event
  function handleKeyPress(event) {
    const keyPressed = event.key;
    outputDiv.textContent = `Key pressed: ${keyPressed}`;
  }

  // Function to handle key release event
  function handleKeyRelease(event) {
    const keyReleased = event.key;
    outputDiv.textContent = `Key released: ${keyReleased}`;

    if (keyReleased === 'ArrowUp') {
        playGame("rock");
    } else if (keyReleased === 'ArrowRight') {
        playGame("paper");
    } else if (keyReleased === 'ArrowLeft') {
        playGame("scissors");   
    }
  }

// Attach event listeners to the input field
inputField.addEventListener('keydown', handleKeyPress);
inputField.addEventListener('keyup', handleKeyRelease);

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                (computerChoice === "scissors") ? result = "You win!" : result = "You lose!";
                break;
            case "paper":
                (computerChoice === "rock") ? result = "You win!" : result = "You lose!";
                break;
            case "scissors":
                (computerChoice === "paper") ? result = "You win!" : result = "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    console.log(computerChoice);
}