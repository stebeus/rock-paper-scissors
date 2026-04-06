export function elementFromHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

export const formatPlayerName = (playerIndex) =>
  playerIndex === 0 ? 'Your' : 'Computer';
