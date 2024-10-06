function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Function to get computer's choice
  function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.33) {
      return "rock";
    } else if (randomNum < 0.66) {
      return "paper";
    } else {
      return "scissor";
    }
  }

  // Function to get human's choice
  function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissor?").toLowerCase();
    return choice;
  }

  // Function to play one round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a draw!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "scissor" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Declare the overall winner
  console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, the computer won the game.");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();
