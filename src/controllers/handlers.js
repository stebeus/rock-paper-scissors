import { weapons } from '../core/game.js';
import { controlGame, restartGame } from './game-controller.js';
import { bindKey, bindWeaponControlKeys } from './keybindings.js';

function handleWeaponChoice(target) {
  const control = target.closest('[data-weapon]');
  if (control == null) return;

  const humanChoice = control.dataset.weapon;
  controlGame(humanChoice);
}

function handleRestart(target) {
  const control = target.closest('[data-action="restart-game"]');
  if (control == null) return;

  restartGame();
}

function delegateEvents({ target }) {
  handleWeaponChoice(target);
  handleRestart(target);
}

function handleKeybindings({ key }) {
  bindWeaponControlKeys(key, weapons, controlGame);
  bindKey(key, 'q', restartGame);
}

export { delegateEvents };
