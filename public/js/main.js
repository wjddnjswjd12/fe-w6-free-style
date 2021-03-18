import { drawTodayMap } from "./todaySection.js";
import { renderMiseMovement, renderMyTownInfo } from "./tomorrowSection.js";

window.onload = function () {
  drawTodayMap();
  renderMiseMovement();
  renderMyTownInfo();
};
