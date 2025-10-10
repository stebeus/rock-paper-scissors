'use strict';

console.log('Welcome to Rock Paper Scissors!');
console.log(`To play the game, type 'getHumanChoice()'.`);

// Store in three constants each one of the following strings: Rock, Paper and Scissors
const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

// Simplify return console log with print function
function print(value = `To insert text, wrap it around single quotes ('')`) {
  return console.log(value);
}

// CALL the get computer choice to return the three global constants randomly
function getComputerChoice() {
  // Store a three random number generator in the get random choice constant
  const getRandomChoice = Math.floor(Math.random() * 3);

  if (getRandomChoice === 0) {
    print(rock);
  } else if (getRandomChoice === 1) {
    print(paper);
  } else {
    print(scissors);
  }
}

// CALL a prompt to store and validate the user's input
function getHumanChoice() {
  const choice = prompt('What will you choose?').toUpperCase();

  if (choice === rock || choice === paper || choice === scissors) {
    print(choice);
  } else {
    print(
      `INVALID CHOICE! Type 'getHumanChoice()' again and insert either Rock, Paper or Scissors.`
    );
  }
}

// Store the user and computer scores
let computerScore = 0;
let humanScore = 0;

// Store the human and computer inputs and validate both
function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
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
