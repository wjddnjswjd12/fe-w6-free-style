const express = require("express");
const sassMiddleware = require("node-sass-middleware");
const dustData = require("./dustData");
const newsData = require("./newsData");
const myTownData = require("./myTownData");
const fs = require("fs");

const path = require("path");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentSyntax: false,
    sourceMap: true,
    outputStyle: "compressed",
  })
);

app.use(express.static(path.join(__dirname, "public")));

const stationList = JSON.parse(
  fs.readFileSync("./public/datas/stationList.json", "utf8")
);

app.get("/stationList", (req, res, next) => {
  res.json(stationList);
});

app.post("/city", (req, res) => {
  dustData(req.body.sidoName, (body) => {
    return res.send(body);
  });
});

app.post("/news", (req, res) => {
  newsData(req.body.date, (body) => {
    return res.send(body);
  });
});

app.post("/myTown", (req, res) => {
  myTownData(req.body.station, (body) => {
    return res.send(body);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
