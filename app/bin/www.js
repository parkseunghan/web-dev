'use strict';

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => { // port를 직접 명시하는 건 좋지 않음. 변수로 따로 쓰기
    console.log("http://localhost:3000 에서 서버 실행 중.");
})

