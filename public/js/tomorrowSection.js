import { drawMap } from "./canvas.js";

function drawTomorrowMap() {
  let canvasTomorrow = document.getElementById("canvas_tomorrow");

  drawMap(canvasTomorrow);
}

export { drawTomorrowMap };
