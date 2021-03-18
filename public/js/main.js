import { drawTodayMap } from "./todaySection.js";
import { renderMiseMovement } from "./tomorrowSection.js";
import { loadNewsData } from "./manageDatas.js";

window.onload = function () {
  drawTodayMap();
  renderMiseMovement();
};
