import { createControl, replaceControls } from '../components/controls.js';
import { isGameOver } from '../core/game.js';

function controlGameOver(scores) {
  if (!isGameOver(scores)) return;
  replaceControls(createControl, 'action', 'restart', 'Restart game');
}
