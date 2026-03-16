import { controlGame, restartGame } from './game-controller.js';

function handleWeaponChoice({ target }) {
  const control = target.closest('[data-weapon]');
  if (control == null) return;

  const humanChoice = control.dataset.weapon;
  controlGame(humanChoice);
}

function handleRestart({ target }) {
  const control = target.closest('[data-action="restart-game"]');
  if (control == null) return;

  restartGame();
}

export { handleRestart, handleWeaponChoice };
