import { announceGameWinner, announceRoundWinner } from './announcers.js';
import {
  getRandomIndex,
  getScoreDifference,
  getWeaponIndexes,
} from './helpers.js';

const playerScores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const getComputerChoice = (choices) => choices[getRandomIndex(choices)];

const isGameOver = (scores) => getScoreDifference(scores) === 2;

function evaluateChoices([human, computer], { length }, scores) {
  const result = (human - computer + length) % length;

  for (const [index] of scores.entries()) {
    const outcome = index + 1;
    if (outcome === result) scores[index]++;
  }

  return result;
}

function playRound(humanChoice, computerChoice, weapons, scores) {
  if (isGameOver(scores)) return announceGameWinner(scores);

  const choices = getWeaponIndexes(weapons, humanChoice, computerChoice);
  const result = evaluateChoices(choices, weapons, scores);
  const roundWinner = announceRoundWinner(humanChoice, computerChoice, result);

  return roundWinner;
}

export { getComputerChoice, isGameOver, playerScores, playRound, weapons };
