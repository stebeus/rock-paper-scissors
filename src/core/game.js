const playerScores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const resetScores = (scores) => scores.fill(0);

function getComputerChoice({ length }) {
  const randomChoice = Math.random() * length;
  return Math.floor(randomChoice);
}

function evaluateChoices(human, computer, { length }, scores) {
  const result = (human - computer + length) % length;

  let roundWinner = null;

  for (const [index] of scores.entries()) {
    const outcome = index + 1;

    if (outcome === result) {
      scores[index]++;
      roundWinner = index;
    }
  }

  return roundWinner;
}

export { getComputerChoice, playerScores, resetScores, weapons };
