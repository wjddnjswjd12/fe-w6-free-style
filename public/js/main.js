import { drawTodayMap } from "./todaySection.js";
import { renderMiseMovement, renderMyTownInfo } from "./tomorrowSection.js";
import { renderSidoList } from "./popUp.js";
window.onload = function () {
  drawTodayMap();
  renderMiseMovement();
  renderMyTownInfo("서초구");
  renderSidoList();
};
