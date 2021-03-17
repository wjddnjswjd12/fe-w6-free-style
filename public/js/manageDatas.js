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
      JennySelector("today_grade").innerHTML = `<img src="img/${getMiseGrade(
        result.list[0].pm10Grade
      )}.PNG"></img>`;
    });
};

const loadNewsData = () => {
  let body = {
    date: "2021-03-17",
  };
  fetch("http://localhost:3000/news", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
};

const getMiseGrade = (grade) => {
  //
  switch (grade) {
    case "1":
      return "good";
    case "2":
      return "ok";
    case "3":
      return "bad";
    case "4":
      return "horrible";
  }
};

export { loadDustData, loadNewsData };
