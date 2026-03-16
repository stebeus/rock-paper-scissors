import { controlGame } from './game-controller.js';

function handleWeaponChoice({ target }) {
  const control = target.closest('[data-weapon]');
  if (control == null) return;

  const humanChoice = control.dataset.weapon;
  controlGame(humanChoice);
}

export { handleWeaponChoice };
