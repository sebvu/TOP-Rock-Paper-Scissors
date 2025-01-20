// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.

// Create a new function named playGame.
function playGame(maxScore = 5) {
  // Create two new variables named humanScore and computerScore in the local scope.
  // Initialize those variables with the value of 0.
  let humanScore = 0,
    computerScore = 0;
  let scoreMessage = () => `Human Score: ${humanScore} | Computer Score: ${computerScore} | MAX SCORE: ${maxScore}`;

  // Play until one of the players reaches 5 points.
  while (humanScore < maxScore && computerScore < maxScore)
    playRound(getHumanChoice(), getComputerChoice());

  if (humanScore >= maxScore) {
    alert(`Player wins the game! 🎊\n${scoreMessage()}`);
  } else {
    alert(`Computer wins the game! 🎊\n${scoreMessage()}`);
  }

  // Create a new function named playRound.
  // Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
  // Move your playRound function and score variables so that they’re declared inside of the new playGame function
  function playRound(humanChoice, computerChoice) {
    // Increment the humanScore or computerScore variable based on the round winner.
    let choicesMessage = `PLAYER CHOSE: ${humanChoice}\nCOMPUTER CHOSE: ${computerChoice}`;
    let winnerMessage = ``;
    if (humanChoice === computerChoice) {
      winnerMessage += `It's a tie!`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice == "paper")
    ) {
      humanScore++;
      winnerMessage += `Player wins round!`;
    } else {
      computerScore++;
      winnerMessage += `Computer wins round!`;
    }
    if (humanScore < maxScore && computerScore < maxScore) {
      alert(`${choicesMessage}\n${winnerMessage}\n\n${scoreMessage()}`);
    }
  }
}

// Create a new function named getComputerChoice.
function getComputerChoice() {
  // Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  try {
    switch (computerChoice) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";
      default:
        throw new InvalidComputerChoice(
          "Computer choice did not match options.",
        );
    }
  } catch (e) {
    console.log(e.message);
    console.log(e.name);
    console.log(e.choice);
  }
}

// Create a new function named getHumanChoice.
function getHumanChoice() {
  // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
  while (true) {
    // Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    //
    const humanChoice = prompt(
      "Choose the follow options: [ rock | paper | scissors ]",
    );

    if (humanChoice === null) {
      alert("You canceled the choice! Retry.");
    } else if (
      humanChoice.toLowerCase() === "rock" ||
      humanChoice.toLowerCase() === "paper" ||
      humanChoice.toLowerCase() === "scissors"
    ) {
      return humanChoice;
    } else {
      alert(`${humanChoice} is not a valid choice!`);
    }
  }
}

// Create class exception that catches an unlikely invalid computer choice
class InvalidComputerChoice extends Error {
  constructor(message, choice) {
    super(message); // set the message property of the Error object
    this.name = "InvalidComputerChoice";
    this.choice = choice;
  }
}

while (true) {
  let maxScore = Number(
    prompt(
      "Type in the max score to play for!\n\nIf the value is negative or not a number, then it will default to 5",
    ),
  );

  if (isNaN(maxScore)) {
    playGame();
  } else {
    playGame(maxScore);
  }

  if (confirm("Do you want to play again?")) {
    continue;
  } else {
    alert("Thanks for playing! 🎮");
    break;
  }
}
