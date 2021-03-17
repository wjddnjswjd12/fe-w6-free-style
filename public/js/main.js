import { drawTodayMap } from "./todaySection.js";
import { drawTomorrowMap } from "./tomorrowSection.js";

import { JennySelector } from "./utils.js";

window.onload = function () {
  drawTodayMap();
  drawTomorrowMap();
  console.log(JennySelector("rolling"));
};
