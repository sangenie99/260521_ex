// 배열, 객체
// ->for 문을 공부할떄 객체를 빼먹을 수가 없음

const a1 ="사과";
const a2 ="배";
const a3 ="귤";
console.log(a1,a2,a3);

const fruits = ["사과", "배", "귤"];
console.log(fruits);

// java에서는 array과 list가 구분이 됨.

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 배열의 원소에 접근할 떄 대괄호를 사용

// 수정도 가능
fruits[0] ="수박"; //index는 0부터 시작한다.
console.log(fruits);

// 추가도 가능
fruits[3] ="딸기";
console.log(fruits);

//length
console.log(fruits.length);

// array/list -> collection의 길이, 가장 마지막에 위치하는 원소(element)의 인덱스는 length -1

// 객체 (Object)
const o = {
    키: "벨류", // 함수도 값취급니다. 특정 값/함수의 호출에 필요한 이름 - 값
    // 값 -> 0, "", true
    true : "", // ,로 키-벨류 쌍을 구분
    // 네임브세이스를 넣어도 된다
    hello: "hello",
    안녕: "안녕",
    "1 1": 12345
}
//네임스페이스 규약을 지킬경우(숫자로 시작하면 안되고, $,_를 제외한 특수문자는 들어갈 수 없다.)
// 값을 넣었다 (공백을 포함))

console.log(o["1 1"])

const arrr = [];
arrr.안녕 ="값";
console.log(arrr, arrr.안녕);
arrr[1.5] = "값2";
console.log(arrr, arrr[1.5]);

arrr.length = 0;
console.log(arrr);