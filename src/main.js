import { renderAnnouncement } from './components/announcement.js';
import { renderComputerOutput } from './components/computer-output.js';
import { createWeaponControls } from './components/controls.js';
import { createPlayerScores } from './components/scoreboard.js';
import { playerScores, weapons } from './core/game.js';

renderAnnouncement();
renderComputerOutput();
createPlayerScores(playerScores);
createWeaponControls(weapons);
