// Store in three constants each one of the following strings: Rock, Paper and Scissors
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

// Store a three random number generator in the get random choice constant
const getRandomChoice = Math.floor(Math.random() * 3);

// CALL the get computer choice to return the three global constants randomly
function getComputerChoice() {
  if (getRandomChoice === 0) {
    return rock;
  } else if (getRandomChoice === 1) {
    return paper;
  } else {
    return scissors;
  }
}
