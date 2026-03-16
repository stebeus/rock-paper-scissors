import { renderAnnouncement } from './components/announcement.js';
import { createPlayerScores } from './components/scoreboard.js';
import { playerScores } from './core/game.js';

renderAnnouncement();
createPlayerScores(playerScores);
