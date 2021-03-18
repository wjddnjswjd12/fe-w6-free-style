import { drawTodayMap } from "./todaySection.js";
import { renderMiseMovement, renderMyTownInfo } from "./tomorrowSection.js";
import { loadNewsData } from "./manageDatas.js";

window.onload = function () {
  drawTodayMap();
  renderMiseMovement();
  renderMyTownInfo();
};
