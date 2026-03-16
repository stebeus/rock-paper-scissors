import { renderAnnouncement } from '../components/announcement.js';
import { createRestartControl } from '../components/controls.js';
import { renderScores } from '../components/scoreboard.js';
import {
  getComputerChoice,
  isGameOver,
  playerScores,
  playRound,
  weapons,
} from '../core/game.js';

function controlGame(humanChoice) {
  if (isGameOver(playerScores)) createRestartControl();

  const computerChoice = getComputerChoice(weapons);
  const outcome = playRound(humanChoice, computerChoice, weapons, playerScores);

  renderAnnouncement(outcome);
  renderScores(playerScores);
}

export { controlGame };
