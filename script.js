function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
      return "rock";
    }
    if (randomNumber === 2) {
      return "paper";
    }
    if (randomNumber === 3) {
      return "scissors";
    }
  }

  function getHumanChoice() {
    const userInput = prompt("Enter your choice: ").toLowerCase();
    return userInput;
  }

  function playRound(humanChoice, computeChoice) {
    if (humanChoice === computeChoice) {
      console.log("Its a draw");
    } else if (humanChoice === "scissors" && computeChoice === "paper") {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computeChoice}`);
    } else if (humanChoice === "rock" && computeChoice === "scissors") {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computeChoice}`);
    } else if (humanChoice === "paper" && computeChoice === "rock") {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computeChoice}`);
    } else if (humanChoice === "paper" && computeChoice === "scissors") {
      computerScore += 1;
      console.log(`You lose! ${computeChoice} beats ${humanChoice}`);
    } else if (humanChoice === "scissors" && computeChoice === "rock") {
      computerScore += 1;
      console.log(`You lose! ${computeChoice} beats ${humanChoice}`);
    } else if (humanChoice === "rock" && computeChoice === "scissors") {
      computerScore += 1;
      console.log(`You lose! ${computeChoice} beats ${humanChoice}`);
    } else {
      console.log("You entered wrong choice!");
    }
  }

  for(let i=0 ; i<5;i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore){
    console.log("You win!");
  }else if(computerScore > humanScore){
    console.log("Computer win!");
  }else{
    console.log("You lose!");
  }
  
}

playGame()
