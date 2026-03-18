import { controlGame, restartGame } from './game-controller.js';

function handleWeaponChoice({ target }) {
  const control = target.closest('[data-choice]');
  const humanChoice = control.dataset.choice;
  controlGame(humanChoice);
}

const handleRestart = () => restartGame();
