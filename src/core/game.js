import { getRandomIndex, getScoreDifference } from './helpers.js';

const playerScores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const getComputerChoice = (choices) => choices[getRandomIndex(choices)];

const isGameOver = (scores) => getScoreDifference(scores) === 2;

export { getComputerChoice, isGameOver, playerScores, weapons };
