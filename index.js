const scores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const resetScores = (scores) => scores.fill(0);

function getComputerChoice({ length }) {
  const randomChoice = Math.random() * length;
  return Math.floor(randomChoice);
}
