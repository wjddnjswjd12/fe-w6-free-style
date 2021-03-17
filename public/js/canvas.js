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
function drawMap() {
  let canvasToday = document.getElementById("canvas_today");
  let draw = canvasToday.getContext("2d");

  let img = new Image();
  img.src = "img/map1.png";
  img.onload = function () {
    draw.drawImage(img, 0, 0, 500, 600);
    sidoLists.forEach((sido) => {
      markCity(draw, sido.x, sido.y, sido.name, "#ffba3b");
    });
  };

  canvasToday.addEventListener("click", (e) => {
    checkMouseMovement(e);
  });
}

function markCity(ctx, x, y, name, color) {
  //수정중

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fill();

  ctx.font = "12px Verdana ";
  ctx.fillStyle = "#fff";
  ctx.fillText(name, x - 13, y + 4);
}

function checkMouseMovement(evt) {
  let x = evt.offsetX;
  let y = evt.offsetY;

  sidoLists.forEach((sido) => {
    if (getDistanceBtwPoints(x, sido.x, y, sido.y) <= radius) {
      markCity(
        document.getElementById("canvas_today").getContext("2d"),
        sido.x,
        sido.y,
        sido.name,
        "pink"
      );
    } else if (!getDistanceBtwPoints(x, sido.x, y, sido.y) <= radius) {
      markCity(
        document.getElementById("canvas_today").getContext("2d"),
        sido.x,
        sido.y,
        sido.name,
        "#ffba3b"
      );
    }
  });
}

function getDistanceBtwPoints(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

export { drawMap };
