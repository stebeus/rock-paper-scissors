import { renderAnnouncement } from './components/announcement.js';
import { renderComputerOutput } from './components/computer-output.js';
import { createPlayerScores } from './components/scoreboard.js';
import { playerScores } from './core/game.js';

renderAnnouncement();
renderComputerOutput;
createPlayerScores(playerScores);
