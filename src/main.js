import { renderAnnouncement } from './components/announcement.js';
import { createWeaponControls } from './components/controls.js';
import { createPlayerScores } from './components/scoreboard.js';
import { handleRestart, handleWeaponChoice } from './controllers/handlers.js';
import { playerScores, weapons } from './core/game.js';

renderAnnouncement();
createPlayerScores(playerScores);
createWeaponControls(weapons);

// Event delegation
document.addEventListener('click', (event) => {
  handleWeaponChoice(event);
  handleRestart(event);
});
