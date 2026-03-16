import { renderAnnouncement } from './components/announcement.js';
import { createWeaponControls } from './components/controls.js';
import { createPlayerScores } from './components/scoreboard.js';
import { playerScores, weapons } from './core/game.js';

renderAnnouncement();
createPlayerScores(playerScores);
createWeaponControls(weapons);
