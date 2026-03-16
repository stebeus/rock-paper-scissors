function renderAnnouncement({ title, description }) {
  const announcementTitle = document.querySelector('.announcement__title');
  const announcementDescription = document.querySelector(
    '.announcement__description',
  );

  announcementTitle.textContent = title;
  announcementDescription.textContent = description;
}

export { renderAnnouncement };
