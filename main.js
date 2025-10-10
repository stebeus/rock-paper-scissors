'use strict';

console.log('Welcome to Rock Paper Scissors!');
console.log(`To play the game, type 'getHumanChoice()'.`);

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
  const choice = prompt('What will you choose?').toUpperCase();

  if (choice === rock || choice === paper || choice === scissors) {
    return choice;
  } else {
    return `INVALID CHOICE! Type 'getHumanChoice()' again and insert either Rock, Paper or Scissors.`;
  }
}

// Store the user and computer scores
let computerScore = 0;
let humanScore = 0;

// Store the human and computer inputs and validate both
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === rock && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice == paper)
  ) {
    console.log(
      `Draw! (Human choice: ${humanChoice}; Computer choice: ${computerChoice})`
    );
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === scissors && computerChoice === paper) ||
    (humanChoice === paper && computerChoice == rock)
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    ++humanScore;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    ++computerScore;
  }

  console.log(`USER SCORE: ${humanScore}; COMPUTER SCORE: ${computerScore}`);
}

// Store the get choice functions in human and computer selections
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Initiate game with selected inputs
playRound(humanSelection, computerSelection);

/**
 *   IF Rock === Rock OR Scissors === Scissors OR Paper === Paper THEN
 *     PRINT Draw! (Human choice, Computer choice)
 *   ELSE IF user chooses Rock over Scissors OR Scissors over Paper OR Paper over Rock
 *     PRINT You won! (Human choice, Computer choice)
 *     Increment and PRINT human score
 *   ELSE
 *     PRINT You lost! (Human choice, Computer choice)
 *     Increment and PRINT computer score
 *   ENDIF
 *   Ends game and output who won based on the cases above.
 * */
