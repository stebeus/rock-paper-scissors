function formatScore(playerIndex, playerScores) {
  const parsedIndex = Number(playerIndex);
  const playerName = parsedIndex === 0 ? 'Your' : 'Computer';

  return `${playerName} score: ${playerScores[playerIndex]}`;
}

const formatButtonLabel = (label) => label.split('-').join(' ');

export { formatButtonLabel, formatScore };
