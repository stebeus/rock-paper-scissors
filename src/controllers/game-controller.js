import { renderAnnouncement } from '../components/announcement.js';
import {
  createRestartControl,
  createWeaponControls,
} from '../components/controls.js';
import { renderScores } from '../components/scoreboard.js';
import {
  getComputerChoice,
  isGameOver,
  playerScores,
  playRound,
  resetScores,
  weapons,
} from '../core/game.js';

function controlGame(humanChoice) {
  const computerChoice = getComputerChoice(weapons);
  const outcome = playRound(humanChoice, computerChoice, weapons, playerScores);

  if (isGameOver(playerScores)) createRestartControl();

  renderAnnouncement(outcome);
  renderScores(playerScores);
}

function restartGame() {
  renderAnnouncement();
  resetScores(playerScores);
  renderScores(playerScores);
  createWeaponControls(weapons);
}

export { controlGame, restartGame };
