'use strict';

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // ./routes/home/index.js 를 가져와서 사용

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
// __dirname은 현재 app.js 파일이 있는 위치를 반환 app 폴더

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어 등록 메서드
module.exports = app;
