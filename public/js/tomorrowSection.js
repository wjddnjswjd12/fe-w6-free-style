import { loadNewsData } from "./manageDatas.js";
import { JennySelector } from "./utils.js";

function renderMiseMovement() {
  loadNewsData().then((result) => {
    console.log(result);
    JennySelector("tom_left_img").innerHTML = makeImgHtml(
      result.list[0].imageUrl7
    );
    JennySelector("info_box_text").innerHTML = result.list[0].informOverall;
  });
}

function makeImgHtml(url) {
  return `<img src="${url}" class="misemove_img"></img>`;
}

export { renderMiseMovement };
