import { Announcement } from '../core/announcers.js';

function renderAnnouncement({ title, description } = new Announcement()) {
  const announcementTitle = document.querySelector('.announcement__title');
  const announcementDesc = document.querySelector('.announcement__description');

  announcementTitle.textContent = title;
  announcementDesc.textContent = description;
}

export { renderAnnouncement };
