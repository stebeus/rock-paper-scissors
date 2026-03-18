import { renderAnnouncement } from '../components/announcement.js';
import { renderComputerOutput } from '../components/computer-output.js';
import { createControl, replaceControls } from '../components/controls.js';
import { renderScore } from '../components/scoreboard.js';
import { announceGameWinner, announceOutcome } from '../core/announcers.js';
import {
  evaluateChoices,
  getComputerChoice,
  isGameOver,
  playerScores,
  resetScores,
  weapons,
} from '../core/game.js';
import { formatChoices } from '../utils/formatters.js';

function controlAnnouncement(announcer, ...announcerParameters) {
  const announcement = announcer(...announcerParameters);
  renderAnnouncement(announcement);
}

function controlGameOver(scores) {
  if (!isGameOver(scores)) return;

  const restartControlParameters = ['action', 'restart', 'Restart game'];

  controlAnnouncement(announceGameWinner, scores);
  replaceControls(createControl, restartControlParameters);
}

function controlGame(humanChoice) {
  const computerChoice = getComputerChoice(weapons);
  const formattedChoices = formatChoices(weapons, humanChoice, computerChoice);

  const roundWinner = evaluateChoices(
    humanChoice,
    computerChoice,
    weapons,
    playerScores,
  );

  controlGameOver(playerScores);
  controlAnnouncement(announceOutcome, formattedChoices, roundWinner);

  renderComputerOutput(weapons[computerChoice]);
  renderScore(roundWinner, playerScores);
}

function controlScoresReset(scores) {
  resetScores(scores);

  for (const [index] of scores.entries()) {
    renderScore(index, scores);
  }
}

export { controlGame };
