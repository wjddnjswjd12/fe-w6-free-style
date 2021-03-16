function drawMap() {
  let canvasToday = document.getElementById("canvas_today");
  let draw = canvasToday.getContext("2d");

  let img = new Image();
  img.src = "img/map.png";
  img.onload = function () {
    draw.drawImage(img, 0, 0, 500, 600);
  };
}

function markCity() {
  //수정중
  let canvasToday = document.getElementById("canvas_today");
  let draw = canvasToday.getContext("2d");
  draw.strokeStyle = "red";

  draw.beginPath();
  draw.arc(75, 75, 40, 0, 2 * Math.PI);
  draw.stroke();
}

export { drawMap, markCity };
