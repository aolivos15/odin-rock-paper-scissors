// Function for the computer to choose between rock, paper or scissors
const getcomputerSelection = () => {
  let randomNumber = 0;
  // Choose a random number from 1 to 9. As Math.random will go from 0 to 9, every time the choice is 0, try again.
  while (randomNumber === 0) {
    randomNumber = Math.floor( Math.random() * 10 );
  }

  // 1, 2 and 3 select "rock"
  if (randomNumber <= 3) {
    return "rock";
  } // 7, 8 and 9 select "paper"
  else if (randomNumber >= 7) {
    return "paper";
  } // 4, 5 and 6 select "scissors"
  else {
    return "scissors";
  }
}

// Function to get the choice of the human
const getPlayerSelection = () => {
  // Ask for choice
  let input = prompt('Choose \'rock\', \'paper\' or \'scissors\':');
  let playerSelection = input.toLowerCase();

  // Ask for choice again every time the person inputs something different than rock, paper or scissors.
  while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    input = prompt('Please enter a valid option.\nChoose \'rock\', \'paper\' or \'scissors\':');
    playerSelection = input.toLowerCase();
  }
  return playerSelection;

}

// Function to capitalize first letter of a string
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const computerSelectionPara = document.querySelector("p#computer-selection");
const playerSelectionPara = document.querySelector("p#player-selection");
const roundResultPara = document.querySelector("p#round-result");
const playerScorePara = document.querySelector("p#player-score");
const computerScorePara = document.querySelector("p#computer-score");
const winnerPara = document.querySelector("p#winner");

// Function to announce a winner
const displayWinner = () => {
  if (playerScore > computerScore) {
    winnerPara.textContent = 'You win! :D Congratulations!';
  }  else {
    winnerPara.textContent = 'Computer wins! Better luck next time!';
  }
  playerScore = 0;
  computerScore = 0;
  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}


// Function to play a round
const playRound = (playerSelection, computerSelection) => {
  // Display chosen options
  computerSelectionPara.textContent = `Computer chose ${computerSelection}.`;
  playerSelectionPara.textContent = `You chose ${playerSelection}.`;

  // If human wins
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++;
      roundResultPara.textContent = `You win the round! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    }
    // If computer wins
    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      roundResultPara.textContent = `Computer wins the round! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    }
    // If both chose the same option
    else {
      roundResultPara.textContent = `It's a tie!`;
    }

  // Display running scores
  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;

  // Announce a winner when someone reaches 5 points
  if (playerScore === 5 || computerScore === 5) {
    displayWinner();
  }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getcomputerSelection();
    playRound(playerSelection, computerSelection);
  });
});

