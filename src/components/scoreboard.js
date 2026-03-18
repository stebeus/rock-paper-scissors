import { elementFromHtml } from '../utils/dom.js';
import { formatPlayerName } from '../utils/formatters.js';

function createPlayerScore(playerIndex, scores) {
  const playerName = formatPlayerName(playerIndex);
  const score = scores[playerIndex];

  return elementFromHtml`
    <p class="scoreboard__player-score">
      ${playerName} score: <span data-player="${playerIndex}">${score}</span>
    </p>
  `;
}

function createPlayerScores(scores) {
  const scoreboard = document.querySelector('.scoreboard');

  for (const [index] of scores.entries()) {
    const playerScore = createPlayerScore(index, scores);
    scoreboard.append(playerScore);
  }
}

function renderScore(playerIndex, scores) {
  const playerScore = `[data-player="${playerIndex}"]`;
  const score = document.querySelector(playerScore);

  score.textContent = scores[playerIndex];
}

export { createPlayerScores, renderScore };
