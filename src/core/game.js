import { announceGameWinner, announceRoundWinner } from './announcers.js';
import {
  getRandomIndex,
  getScoreDifference,
  getWeaponIndexes,
} from './helpers.js';

const playerScores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const getComputerChoice = (choices) => choices[getRandomIndex(choices)];

function evaluateChoices([human, computer], { length }, scores) {
  const result = (human - computer + length) % length;

  for (const [index] of scores.entries()) {
    const outcome = index + 1;
    if (outcome === result) scores[index]++;
  }

  return result;
}

const isGameOver = (scores) => getScoreDifference(scores) === 2;

const resetScores = (scores) => scores.fill(0);

function playRound(humanChoice, computerChoice, weapons, scores) {
  const choices = getWeaponIndexes(weapons, humanChoice, computerChoice);
  const result = evaluateChoices(choices, weapons, scores);

  return isGameOver(scores)
    ? announceGameWinner(scores)
    : announceRoundWinner(humanChoice, computerChoice, result);
}

export {
  getComputerChoice,
  isGameOver,
  playerScores,
  playRound,
  resetScores,
  weapons,
};
