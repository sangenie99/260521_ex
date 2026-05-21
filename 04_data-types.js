// JS ->값을 분류, 적절한 대응 -> 타입(형) -> data type -> 자료형

// number -> 감싸줄 필요가 없음. '',"", {}, [] ...
// namespace -> 숫자로 시작하지 않는다.
const int = 1;
const int2 = -1;
const float = 1.01;

console.log(int / 0); // Infinity
console.log(int2 / 0); // -Infinity
console.log(typeof (int / 0)); // number

// JS에서 number는 정수, 실수를 구분하지 않는다.

// boolean (true,false)
const t = true; //예약어, 키워드 'true' 변수명으로 쓸 수 x
const f = false;
console.log(typeof t);
console.log(typeof f);

// string - 열, 현
// 문자(1글자) -> 메모리. -> 메모리들을 연결시켜서 문자들의 집합/ 배열/ 나열 -> 문자 배열 {'h','e', 'l', 'l', 'o'}
// 문자(string) -> "hello"
const name ="윌리엄"
console.log(typeof name);

//null
const n = null;
console.log(typeof n); //object 설계 미스

//undefined
let u;
console.log(typeof u);
let u2 = undefined;
console.log(typeof u2);
let u3 = {};
console.log(typeof u3,u);

//object 
let o ={};//주소가 저장되는 타입
console.log(typeof o);
let arr =[] 
console.log(typeof arr);

// 템플릿 리터럴
const nn ="김자바"
console.log(nn + "은(는) 개발자이다.");
console.log("대한민국의에사는" +nn + "은(는) 개발자이다.");
console.log(`대한민국에 사는${nn}은(는) 개발자이다.`);

console.log(`시작
    
    
엔터가 있으면 그대로 읽음
    
끝`)