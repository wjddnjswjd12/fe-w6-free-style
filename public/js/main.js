import { drawTodayMap } from "./todaySection.js";
import { drawTomorrowMap } from "./tomorrowSection.js";
import { loadNewsData } from "./manageDatas.js";
import { JennySelector } from "./utils.js";

window.onload = function () {
  loadNewsData();
  drawTodayMap();
  drawTomorrowMap();
  console.log(JennySelector("rolling"));
};
