import { getRandomIndex, getScoreDifference } from './helpers.js';

const playerScores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const getComputerChoice = (choices) => choices[getRandomIndex(choices)];

const isGameOver = (scores) => getScoreDifference(scores) === 2;

function evaluateChoices([human, computer], { length }, scores) {
  const result = (human + computer + length) % length;

  for (const playerIndex in scores) {
    const outcome = Number(playerIndex) + 1;
    if (outcome === result) scores[playerIndex]++;
  }

  return result;
}

export { getComputerChoice, isGameOver, playerScores, weapons };
