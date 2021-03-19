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
        result.list[0].pm10Grade1h
      )}.PNG"></img>`;
    });
};

const loadNewsData = () => {
  let body = {
    date: getDate(),
  };
  return fetch("http://localhost:3000/news", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

const loadMyTownData = (place) => {
  let body = {
    station: place,
  };
  return fetch("http://localhost:3000/myTown", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
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

const getDate = () => {
  let today = new Date();
  return `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`;
};

export { loadDustData, loadNewsData, loadMyTownData };
