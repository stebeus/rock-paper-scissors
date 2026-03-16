import { parseHtml } from '../utils/dom.js';
import { formatScore } from '../utils/formatters.js';

function createPlayerScore(playerIndex, playerScores) {
  const playerName = formatScore(playerIndex);
  const playerScore = playerScores[playerIndex];

  return parseHtml`
    <p class="scoreboard__player-score">
      ${playerName} score: <span data-score>${playerScore}</span>
    </p>
  `;
}

function createPlayerScores(playerScores) {
  const scoreboard = document.querySelector('.scoreboard');

  for (const [index] of playerScores.entries()) {
    const playerScore = createPlayerScore(index, playerScores);
    scoreboard.append(playerScore);
  }
}

function renderScores(playerScores) {
  const scores = document.querySelectorAll('[data-score]');

  let playerIndex = 0;

  for (const score of scores) {
    score.textContent = playerScores[playerIndex];
    playerIndex++;
  }
}

export { createPlayerScores, renderScores };
