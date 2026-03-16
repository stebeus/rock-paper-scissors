import { parseHtml } from '../utils/dom.js';
import { formatScore } from '../utils/formatters.js';

function createPlayerScore(playerIndex, playerScores) {
  const playerName = formatScore(playerIndex, playerScores);

  return parseHtml`
    <p class="scoreboard__player-score" data-player="${playerIndex}">
      ${playerName}
    </p>
  `;
}

function createPlayerScores(playerScores) {
  const scoreboard = document.querySelector('.scoreboard');

  for (const playerIndex of playerScores) {
    const playerScore = createPlayerScore(playerIndex, playerScores);
    scoreboard.append(playerScore);
  }
}

export { createPlayerScores };
