'use strict';

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginButton = document.querySelector("#button");
// #id 태그명과 id명을 구분하기 위해 선택자 앞에 #을 써줌
// button은 선택자 그대로여서 button을 그대로 씀
// 선택자: HTML태그 안에서 id="id", id="pw"같은 것

loginButton.addEventListener("click", login);

function login() {
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!pw.value) return alert("비밀번호를 입력해주세요.");
    const req = {
        id: id.value,
        pw: pw.value,
    };

    fetch("/login", {
        method: "POST", // restapi관련
        headers: {
            "Content-Type": "application/json", // 전달하는 데이터가 JSON데이터라고 명시적으로 알려줌
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        }).catch((err) => {
            console.error(new Error("로그인 중 에러가 발생했습니다."));

        })
}
// id변수명에 담긴 값을 가져오기 전에 먼저 실행되어버림.
// 이를 방지하기 위해 HTML태그에 defer를 부여
