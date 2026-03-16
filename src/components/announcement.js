function renderAnnouncement({ title, description } = {}) {
  const announcementTitle = document.querySelector('.announcement__title');
  const announcementDescription = document.querySelector(
    '.announcement__description',
  );

  announcementTitle.textContent = title ?? 'Choose a weapon';
  announcementDescription.textContent =
    description ?? 'First to score a 2-point lead wins';
}

export { renderAnnouncement };
