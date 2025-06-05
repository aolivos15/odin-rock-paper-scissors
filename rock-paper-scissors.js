// Function for the computer to choose between rock, paper or scissors
const getComputerChoice = () => {
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
const getHumanChoice = () => {
  // Ask for choice
  let input = prompt('Choose \'rock\', \'paper\' or \'scissors\':');
  let humanChoice = input.toLowerCase();

  // Ask for choice again every time the person inputs something different than rock, paper or scissors.
  while (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
    input = prompt('Please enter a valid option.\nChoose \'rock\', \'paper\' or \'scissors\':');
    humanChoice = input.toLowerCase();
  }
  return humanChoice;

}

// Function to capitalize first letter of a string
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// Function to play a round
const playRound = (humanChoice, computerChoice) => {
  // Display chosen options
  console.log(`I chose ${computerChoice}.`);
  console.log(`You chose ${humanChoice}.`);

  // If human wins
  if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'scissors' && computerChoice === 'paper' ||
    humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore++;
      console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
    }
    // If computer wins
    else if (humanChoice === 'scissors' && computerChoice === 'rock' ||
    humanChoice === 'paper' && computerChoice === 'scissors' ||
    humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      console.log(`You lose! ${capitalize(humanChoice)} beats ${computerChoice}.`);
    }
    // If both chose the same option
    else {
      console.log(`It's a tie!`);
    }

}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);