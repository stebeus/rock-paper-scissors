import { renderAnnouncement } from '../components/announcement.js';
import {
  createControl,
  createWeaponControls,
  replaceControls,
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

function controlGameOver(scores) {
  if (!isGameOver(scores)) return;

  const restartControl = [createControl, 'action', 'restart-game'];
  replaceControls(...restartControl);
}

function controlGame(humanChoice) {
  const computerChoice = getComputerChoice(weapons);
  const outcome = playRound(humanChoice, computerChoice, weapons, playerScores);

  controlGameOver(playerScores);
  renderAnnouncement(outcome);
  renderScores(playerScores);
}

function restartGame() {
  renderAnnouncement();
  resetScores(playerScores);
  renderScores(playerScores);
  replaceControls(createWeaponControls, weapons);
}

export { controlGame, restartGame };
