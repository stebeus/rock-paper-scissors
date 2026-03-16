const formatPlayerName = (playerIndex) =>
  playerIndex === 0 ? 'Your' : 'Computer';

const formatButtonLabel = (label) => label.split('-').join(' ');

export { formatButtonLabel, formatPlayerName };
