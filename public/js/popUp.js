import { renderMyTownInfo } from "./tomorrowSection.js";
import { JennySelector } from "./utils.js";

function loadItems() {
  return fetch("http://localhost:3000/stationList").then((data) => data.json());
}

let datas = {};

const renderSidoList = () => {
  loadItems().then((result) => {
    datas = result;

    const sidos = result.map((v) => v.지역명);
    const uniqueSidos = [...new Set(sidos)];
    uniqueSidos.pop();
    uniqueSidos.unshift("도시명");
    select1.innerHTML = uniqueSidos.reduce((acc, curr, i) => {
      acc += `<option>${curr}</option>`;
      return acc;
    }, "");
  });
  addPopupEvent();
};

function returnArray(datas, sido) {
  let filteredData = datas.filter((v) => v.지역명 === sido);
  return filteredData.map((v) => v.측정소명);
}

function addPopupEvent() {
  let select1 = document.getElementById("select1");
  let select2 = document.getElementById("select2");
  let send = document.querySelector(".send");
  select1.addEventListener("change", function () {
    select2.innerHTML = returnArray(datas, this.value).reduce(
      (acc, curr, i) => {
        acc += `<option>${curr}</option>`;
        return acc;
      },
      ""
    );
  });
  send.addEventListener("click", () => {
    renderMyTownInfo(select2.value);
    JennySelector("myTown_popup").style.display = "none";
  });
}

export { renderSidoList };
