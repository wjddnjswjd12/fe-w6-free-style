import { drawMap, markCity } from "./canvas.js";
import { JennySelector, searchChildren } from "./utils.js";
const body = {
  sidoName: "서울",
};

const loadDustData = () => {
  fetch("http://localhost:3000/city", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((result) => console.table(result.list[0]));
};

window.onload = function () {
  loadDustData();
  drawMap();
  markCity();
  console.log(JennySelector("rolling"));
};
