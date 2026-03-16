function renderAnnouncement({ title, description } = {}) {
  const announcementTitle = document.querySelector('.announcement__title');
  const announcementDesc = document.querySelector('.announcement__description');

  announcementTitle.textContent = title ?? 'Choose a weapon';
  announcementDesc.textContent =
    description ?? 'First to score a 2-point lead wins';
}

export { renderAnnouncement };
