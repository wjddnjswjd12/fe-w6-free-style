import { loadNewsData, loadMyTownData } from "./manageDatas.js";
import { drawChart } from "./canvas.js";
import { JennySelector } from "./utils.js";

function renderMiseMovement() {
  loadNewsData().then((result) => {
    console.log(result);
    JennySelector("tom_left_img").innerHTML = makeImgHtml(
      result.list[0].imageUrl7
    );
    JennySelector(
      "info_box_text"
    ).innerHTML = `${result.list[0].informOverall}<br>${result.list[0].informCause}`;
  });
}

function renderMyTownInfo() {
  drawChart();
  loadMyTownData().then((result) => {
    JennySelector("myTown_info_place").innerHTML = makeMyTownHtml(
      result.list[0].pm10Value
    );
    console.log(result.list[0]);
  });
}

function makeImgHtml(url) {
  return `<img src="${url}" class="misemove_img"></img>`;
}

function makeMyTownHtml(value) {
  return `<span><strong>서초구</strong>의 미세먼지 농도는, <strong>${value}</strong> 입니다.</span><br>😫`;
}

export { renderMiseMovement, renderMyTownInfo };
