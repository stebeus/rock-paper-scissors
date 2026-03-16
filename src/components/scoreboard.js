import { parseHtml } from '../utils/dom.js';
import { formatScore } from '../utils/formatters.js';

function createPlayerScore(playerIndex, scores) {
  const playerName = formatScore(playerIndex);
  const score = scores[playerIndex];

  return parseHtml`
    <p class="scoreboard__player-score">
      ${playerName} score: <span data-score>${score}</span>
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

function renderScores(playerScores) {
  const scores = document.querySelectorAll('[data-score]');

  let playerIndex = 0;

  for (const score of scores) {
    score.textContent = playerScores[playerIndex];
    playerIndex++;
  }
}

export { createPlayerScores, renderScores };
