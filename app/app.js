'use strict';

// 모듈
const express = require('express');
const app = express();


// 라우팅
const home = require("./src/routes/home"); // ./routes/home/index.js 를 가져와서 사용
app.use("/", home); // use -> 미들 웨어 등록 메서드

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
// __dirname은 현재 app.js 파일이 있는 위치를 반환 app 폴더

module.exports = app;
