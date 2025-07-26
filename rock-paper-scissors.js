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

// Function to capitalize first letter of a string
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const computerSelectionPara = document.querySelector("i#computer-selection");
const playerSelectionPara = document.querySelector("i#player-selection");
const roundResultPara = document.querySelector("p#round-result");
const playerScorePara = document.querySelector("p#player-score");
const computerScorePara = document.querySelector("p#computer-score");
const winnerPara = document.querySelector("p#game-result");

// Function to announce a winner
const displayWinner = () => {
  if (playerScore > computerScore) {
    winnerPara.textContent = 'You win! :D Congratulations!';
  }  else {
    winnerPara.textContent = 'Computer wins! Better luck next time!';
  }
  playerScore = 0;
  computerScore = 0;
  playerScorePara.textContent = `${playerScore}`;
  computerScorePara.textContent = `${computerScore}`;
}


// Function to play a round
const playRound = (playerSelection, computerSelection) => {

  computerSelectionPara.className = '';
  playerSelectionPara.className = '';

  // Display chosen options
  switch (computerSelection) {
    case 'rock':
      computerSelectionPara.classList.add('fa-solid', 'fa-hand-rock', 'score-p');
      break;
    case 'paper':
      computerSelectionPara.classList.add('fa-solid', 'fa-hand-paper', 'score-p');
      break;
    case 'scissors':
      computerSelectionPara.classList.add('fa-solid', 'fa-hand-scissors', 'fa-rotate-90', 'score-p');
      break;
    default:
      computerSelectionPara.textContent = 'Unexpected result'
  }

  // Display chosen options
  switch (playerSelection) {
    case 'rock':
      playerSelectionPara.classList.add('fa-solid', 'fa-hand-rock', 'score-p');
      break;
    case 'paper':
      playerSelectionPara.classList.add('fa-solid', 'fa-hand-paper', 'score-p');
      break;
    case 'scissors':
      playerSelectionPara.classList.add('fa-solid', 'fa-hand-scissors', 'fa-rotate-90', 'score-p');
      break;
    default:
      playerSelectionPara.textContent = 'Unexpected result';
  }

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
      roundResultPara.textContent = `Computer wins the round! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    }
    // If both chose the same option
    else {
      roundResultPara.textContent = `It's a tie!`;
    }

  // Display running scores
  playerScorePara.textContent = `${playerScore}`;
  computerScorePara.textContent = `${computerScore}`;

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
    winnerPara.textContent = '';
    const playerSelection = button.id;
    const computerSelection = getcomputerSelection();
    playRound(playerSelection, computerSelection);
  });
});

