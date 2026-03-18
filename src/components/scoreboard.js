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
