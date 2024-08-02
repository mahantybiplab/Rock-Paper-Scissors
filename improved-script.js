const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const result = document.createElement("div");
const winner = document.createElement("div");
let humanScore = 0;
let computerScore = 0;

function playGame() {
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      result.innerText = `It's a draw! Computer chose ${computerChoice}. \nYour Score: ${humanScore} vs Computer Score: ${computerScore}.`;
    } else if (winningConditions[humanChoice] === computerChoice) {
      humanScore += 1;
      result.innerText = `You got a point! Computer chose ${computerChoice}. \nYour Score: ${humanScore} vs Computer Score: ${computerScore}.`;
    } else {
      computerScore += 1;
      result.innerText = `Computer got a point! Computer chose ${computerChoice}. \nYour Score: ${humanScore} vs Computer Score: ${computerScore}.`;
    }
    container.appendChild(result);
    checkWinner();
  }

  function checkWinner() {
    if (humanScore === 5) {
      humanScore = 0;
      computerScore = 0;
      winner.textContent = "You win! Restarting the game.";
      container.removeChild(result);
      container.appendChild(winner);
      removeEventListeners(); // Stop the game
      setTimeout(() => {
        winner.textContent = "";
        addEventListeners(); // Restart the game
      }, 1000); // Wait for 1 second before clearing the winner text and restarting the game
    } else if (computerScore === 5) {
      computerScore = 0;
      humanScore = 0;
      winner.textContent = "Computer wins! Restarting the game.";
      container.removeChild(result);
      container.appendChild(winner);
      removeEventListeners(); // Stop the game
      setTimeout(() => {
        winner.textContent = "";
        addEventListeners(); // Restart the game
      }, 1000); // Wait for 1 second before clearing the winner text and restarting the game
    }
    
  }

  function handleClick(event) {
    const computerChoice = getComputerChoice();
    const humanChoice = event.target.id;

    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      playRound(humanChoice, computerChoice);
    }
  }

  function addEventListeners() {
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
  }

  function removeEventListeners() {
    buttons.forEach((button) => {
      button.removeEventListener("click", handleClick);
    });
  }

  addEventListeners();
}

// Start the game
playGame();
