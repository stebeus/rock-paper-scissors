import { renderAnnouncement } from './components/announcement.js';
import { renderComputerOutput } from './components/computer-output.js';
import { createWeaponControls } from './components/controls.js';
import { createPlayerScores } from './components/scoreboard.js';
import { handleRestart, handleWeaponChoice } from './controllers/handlers.js';
import { playerScores, weapons } from './core/game.js';
import { delegateEventListener } from './utils/dom.js';

renderAnnouncement();
renderComputerOutput();
createPlayerScores(playerScores);
createWeaponControls(weapons);

delegateEventListener('click', '[data-choice]', handleWeaponChoice);
delegateEventListener('click', '[data-action="restart"]', handleRestart);
