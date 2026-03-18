import { renderAnnouncement } from '../components/announcement.js';
import { createControl, replaceControls } from '../components/controls.js';
import { isGameOver } from '../core/game.js';

function controlAnnouncement(announcer, ...announcerParameters) {
  const announcement = announcer(...announcerParameters);
  renderAnnouncement(announcement);
}

function controlGameOver(scores) {
  if (!isGameOver(scores)) return;
  replaceControls(createControl, 'action', 'restart', 'Restart game');
}
