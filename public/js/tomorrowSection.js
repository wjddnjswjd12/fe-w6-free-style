import { loadNewsData, loadMyTownData } from "./manageDatas.js";
import { drawChart } from "./canvas.js";
import { JennySelector } from "./utils.js";

function renderMiseMovement() {
  loadNewsData().then((result) => {
    JennySelector("tom_left_img").innerHTML = makeImgHtml(
      result.list[0].imageUrl7
    );
    JennySelector(
      "info_box_text"
    ).innerHTML = `${result.list[0].informOverall}<br>${result.list[0].informCause}`;
  });
}

function renderMyTownInfo(town) {
  drawChart();
  loadMyTownData(town).then((result) => {
    JennySelector("myTown_info_place").innerHTML = makeMyTownHtml(
      town,
      result.list[0]
    );
    rotateScroll(result.list[0].pm10Value);
    JennySelector("myTown_info_table").innerHTML = makeTableHTML(
      result.list[0]
    );
  });
  JennySelector("chooseStn_btn").addEventListener("click", () => {
    JennySelector("myTown_popup").style.display = "flex";
  });
}

function makeTableHTML(data) {
  return `<table>
  <th>항목</th>
  <th>등급</th>
  <th>측정값</th>
  <th>항목</th>
  <th>등급</th>
  <th>측정값</th>
  <tr>
    <th bgcolor="lightblue" align="center">초미세먼지</th>
    <td>${getMyTownGrade(data.pm25Grade1h)}</td>
    <td>${data.pm25Value}㎍/㎥</td>
    <th bgcolor="lightblue" align="center">미세먼지</th>
    <td>${getMyTownGrade(data.pm10Grade1h)}</td>
    <td>${data.pm10Value}㎍/㎥</td>
  </tr>
  <tr>
    <th bgcolor="lightblue" align="center">이산화질소</th>
    <td>${getMyTownGrade(data.no2Grade)}</td>
    <td>${data.no2Value}ppm</td>
    <th bgcolor="lightblue" align="center">일산화탄소</th>
    <td>${getMyTownGrade(data.coGrade)}</td>
    <td>${data.coValue}ppm</td>
  </tr>
  <tr>
    <th bgcolor="lightblue" align="center">오존</th>
    <td>${getMyTownGrade(data.o3Grade)}</td>
    <td>${data.o3Value}ppm</td>
    <th bgcolor="lightblue" align="center">아황산가스</th>
    <td>${getMyTownGrade(data.so2Grade)}</td>
    <td>${data.so2Value}ppm</td>
  </tr>
</table>`;
}

function makeImgHtml(url) {
  return `<img src="${url}" class="misemove_img"></img>`;
}

const getMyTownGrade = (grade) => {
  switch (grade) {
    case "1":
      return "🔵";
    case "2":
      return "🟢";
    case "3":
      return "🟠";
    case "4":
      return "🔴";
  }
};

function makeMyTownHtml(town, value) {
  return `<span><strong>${town}</strong>의 미세먼지 농도는, <strong>${
    value.pm10Value
  }</strong> 입니다.</span><br>${getMyTownGrade(value.pm10Grade1h)}`;
}

function rotateScroll(pmVal) {
  if (pmVal < 185) {
    JennySelector("pointer").style.transition = "0.3s ease-in-out";
    JennySelector("pointer").style.transform = `rotate(-${
      (185 - pmVal) / 2
    }deg)`;
  } else {
    JennySelector("pointer").style.transform = `rotate(${
      (185 - pmVal) / 2
    }deg)`;
  }
}

export { renderMiseMovement, renderMyTownInfo };
