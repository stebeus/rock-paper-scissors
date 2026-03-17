import { isGameOver, playerScores, weapons } from '../core/game.js';
import { controlGame, restartGame } from './game-controller.js';

function bindKey(eventKey, key, action, ...parameters) {
  const keybinding = eventKey.toLowerCase();
  if (keybinding !== key) return;

  action(...parameters);
}

function bindWeaponKeys(eventKey) {
  for (const weapon of weapons) {
    const key = weapon.charAt(0);
    bindKey(eventKey, key, controlGame, weapon);
  }
}

function bindRestartKey(eventKey) {
  if (isGameOver(playerScores)) {
    bindKey(eventKey, 'q', restartGame);
    return;
  }
}

export { bindRestartKey, bindWeaponKeys };
