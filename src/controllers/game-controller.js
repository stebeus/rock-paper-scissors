import { createControl, replaceControls } from '../components/controls.js';
import { isGameOver } from '../core/game.js';

function manageGameOver(scores) {
  if (!isGameOver(scores)) return;
  replaceControls(createControl, 'restart', 'Restart game');
}
