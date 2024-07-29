function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  function getHumanChoice() {
    const userInput = prompt(
      "Enter your choice (rock, paper, or scissors): "
    ).toLowerCase();
    return userInput;
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      //   console.log("It's a draw!");
      return;
    } else if (winningConditions[humanChoice] === computerChoice) {
      humanScore += 1;
      //   console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore += 1;
      //   console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  let i = 0;
  while (i < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (!["rock", "paper", "scissors"].includes(humanSelection)) {
      console.log("Invalid choice. Please enter rock, paper, or scissors.");
      continue;
    }

    playRound(humanSelection, computerSelection);

    i++;
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
