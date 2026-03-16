import { parseHtml } from '../utils/dom.js';
import { formatScore } from '../utils/formatters.js';

function createPlayerScore(playerIndex, playerScores) {
  const score = formatScore(playerIndex, playerScores);

  return parseHtml`
    <p class="scoreboard__player-score" data-player="${playerIndex}">
      ${score}
    </p>
  `;
}
