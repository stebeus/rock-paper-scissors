const playerScores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const resetScores = (scores) => scores.fill(0);

function getComputerChoice({ length }) {
  const randomChoice = Math.random() * length;
  return Math.floor(randomChoice);
}

function getRoundWinner(scores, result) {
  for (const [index] of scores.entries()) {
    const outcome = index + 1;

    if (outcome === result) {
      scores[index]++;
      return index;
    }
  }
}

function evaluateChoices(human, computer, { length }, scores) {
  const result = (human - computer + length) % length;
  const roundWinner = getRoundWinner(scores, result);
  return roundWinner;
}

function isGameOver([humanScore, computerScore]) {
  const difference = Math.abs(humanScore - computerScore);
  return difference === 2;
}

export { getComputerChoice, isGameOver, playerScores, resetScores, weapons };
