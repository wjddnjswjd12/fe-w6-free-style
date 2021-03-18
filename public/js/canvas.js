import { loadDustData } from "./manageDatas.js";

const sidoLists = [
  { name: "서울", x: 160, y: 120 },
  { name: "경기", x: 185, y: 165 },
  { name: "인천", x: 65, y: 165 },
  { name: "대전", x: 205, y: 275 },
  { name: "세종", x: 190, y: 240 },
  { name: "충남", x: 120, y: 245 },
  { name: "충북", x: 240, y: 220 },
  { name: "광주", x: 140, y: 420 },
  { name: "강원", x: 325, y: 105 },
  { name: "전북", x: 160, y: 350 },
  { name: "전남", x: 140, y: 475 },
  { name: "경북", x: 375, y: 255 },
  { name: "경남", x: 310, y: 400 },
  { name: "대구", x: 370, y: 325 },
  { name: "부산", x: 435, y: 410 },
  { name: "울산", x: 460, y: 360 },
  { name: "제주", x: 115, y: 570 },
];
const radius = 20;
function drawMap(ctx) {
  let draw = ctx.getContext("2d");
  draw.fillStyle = "#fff";
  draw.fillRect(0, 0, 500, 600);
  let img = new Image();
  img.src = "img/map1.png";
  img.onload = function () {
    draw.drawImage(img, 0, 0, 500, 600);
    sidoLists.forEach((sido) => {
      markCity(draw, sido.x, sido.y, sido.name, "#ffba3b");
    });
  };

  ctx.addEventListener("click", (e) => {
    checkMouseClick(e, draw);
  });
}

function markCity(ctx, x, y, name, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.font = "12px Verdana ";
  ctx.fillStyle = "#fff";
  ctx.fillText(name, x - 13, y + 4);
}

function checkMouseClick(evt, ctx) {
  let x = evt.offsetX;
  let y = evt.offsetY;

  sidoLists.forEach((sido) => {
    if (getDistanceBtwPoints(x, sido.x, y, sido.y) <= radius) {
      markCity(ctx, sido.x, sido.y, sido.name, "pink");
      loadDustData(sido.name);
    } else if (!getDistanceBtwPoints(x, sido.x, y, sido.y) <= radius) {
      markCity(ctx, sido.x, sido.y, sido.name, "#ffba3b");
    }
  });
}

// function checkMouseMovement(evt, ctx) {
//   let x = evt.offsetX;
//   let y = evt.offsetY;

//   sidoLists.forEach((sido) => {
//     if (getDistanceBtwPoints(x, sido.x, y, sido.y) <= radius) {
//       markCity(ctx, sido.x, sido.y, sido.name, "pink");
//     } else if (!getDistanceBtwPoints(x, sido.x, y, sido.y) <= radius) {
//       markCity(ctx, sido.x, sido.y, sido.name, "#ffba3b");
//     }
//   });
// }

function getDistanceBtwPoints(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function drawChart() {
  let chart = document.getElementById("canvas_chart").getContext("2d");
  drawArc(chart);
  chart.fillStyle = "white";
  chart.beginPath();
  chart.arc(130, 150, 90, 0, 2 * Math.PI);
  chart.fill();
  chart.fillStyle = "black";
}

const data = [25, 25, 75, 55];
const color = ["blue", "green", "orange", "red"];

function drawArc(chart) {
  let startAngle = 0;
  let nextAngle = 0;
  for (let i = 0; i < data.length; i++) {
    nextAngle += data[data.length - 1 - i];
    chart.fillStyle = color[color.length - 1 - i];
    chart.beginPath();
    chart.moveTo(130, 150);
    chart.arc(
      130,
      150,
      120,
      getRadian(startAngle),
      getRadian(360 - nextAngle),
      true
    );
    chart.fill();
    markValue(chart);
    startAngle = 360 - nextAngle;
  }
}

function getRadian(degree) {
  return (degree * Math.PI) / 180;
}

function markValue(chart) {
  chart.fillStyle = "black";
  chart.fillText("50", 10, 98);
  chart.fillText("100", 44, 53);
  chart.fillText("250", 195, 46);
}

export { drawMap, drawChart };
