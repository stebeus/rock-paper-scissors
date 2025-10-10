'use strict';

alert(`Welcome to Rock Paper Scissors!

Press F12 to play the game.

If the console is not showing "GAME LOADED" on page load, press Cancel and refresh the page.
  `);

console.log('GAME LOADED');

// Store in three constants each one of the following strings: Rock, Paper and Scissors
const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

// CALL the get computer choice to return the three global constants randomly
function getComputerChoice() {
  // Store a three random number generator in the get random choice constant
  const getRandomChoice = Math.floor(Math.random() * 3);

  if (getRandomChoice === 0) {
    return rock;
  } else if (getRandomChoice === 1) {
    return paper;
  } else {
    return scissors;
  }
}

// CALL a prompt to store and validate the user's input
function getHumanChoice() {
  const choice = prompt('Choose Rock, Paper or Scissors!').toUpperCase();

  if (choice === rock || choice === paper || choice === scissors) {
    return choice;
  } else {
    return `INVALID CHOICE! Insert either Rock, Paper or Scissors.`;
  }
}

// Store score and initialize five rounds
function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  // Store human and computer inputs for one round
  function playRound(humanChoice, computerChoice) {
    // Validate human and computer inputs, then increment score based on draw, victory and defeat cases.
    if (
      (humanChoice === rock && computerChoice === rock) ||
      (humanChoice === scissors && computerChoice === scissors) ||
      (humanChoice === paper && computerChoice === paper)
    ) {
      console.log(`Draw! ${humanChoice} doesn't beat ${computerChoice}...`);
    } else if (
      (humanChoice === rock && computerChoice === scissors) ||
      (humanChoice === scissors && computerChoice === paper) ||
      (humanChoice === paper && computerChoice === rock)
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
    }

    // Display score
    console.log(`USER SCORE: ${humanScore}; COMPUTER SCORE: ${computerScore}`);
  }

  // Loop to five rounds
  for (let currentRound = 0; currentRound < 5; currentRound++) {
    // Store the get choice functions in human and computer selections
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Initiate round
    playRound(humanSelection, computerSelection);

    // End the game
    if (currentRound === 4) {
      if (humanScore === computerScore) {
        console.log(`Game's over! TIE`);
      } else if (humanScore > computerScore) {
        console.log(`Game's over! VICTORY`);
      } else {
        console.log(`Game's over! DEFEAT`);
      }
    }
  }
}

// Initiate game
playGame();
