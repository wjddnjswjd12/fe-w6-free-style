import { JennySelector } from "./utils.js";

const loadDustData = (name) => {
  let body = {
    sidoName: name,
  };
  fetch("http://localhost:3000/city", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((result) => {
      JennySelector("today_date").innerHTML = result.list[0].dataTime;
      JennySelector("today_sido").innerHTML = name;
      JennySelector("today_value").innerHTML = result.list[0].pm10Value;
      JennySelector("today_grade").innerHTML = result.list[0].pm10Grade;
      console.table(result.list[0]);
    });
};

export { loadDustData };
