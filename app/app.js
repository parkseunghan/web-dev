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


module.exports = app;
