import { getRandomIndex } from './helpers.js';

const playerScores = [0, 0];
const weapons = ['rock', 'paper', 'scissors'];

const getComputerChoice = (choices) => choices[getRandomIndex(choices)];

export { getComputerChoice, playerScores, weapons };
