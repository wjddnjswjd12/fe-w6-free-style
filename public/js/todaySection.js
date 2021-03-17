import { drawMap } from "./canvas.js";

function drawTodayMap() {
  let canvasToday = document.getElementById("canvas_today");

  drawMap(canvasToday);
}

export { drawTodayMap };
