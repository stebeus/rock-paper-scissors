function renderAnnouncement(content = 'Choose a weapon') {
  const announcement = document.querySelector('#announcement');
  announcement.textContent = content;
}

export { renderAnnouncement };
