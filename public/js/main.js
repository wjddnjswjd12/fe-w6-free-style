const body = {
  sidoName: "서울",
};

fetch("http://localhost:3000/city", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
})
  .then((res) => res.json())
  .then((result) => console.table(result.list[0]));

window.onload = function () {
  let canvasToday = document.getElementById("canvas_today");
  let draw = canvasToday.getContext("2d");

  let img = new Image();
  img.src = "img/1.PNG";
  img.onload = function () {
    draw.drawImage(img, 0, 0, 600, 700);
  };
};
