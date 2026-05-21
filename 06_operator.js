// 연산자 -> 1개 이상의 피연산자를 대상으로 변환, 계산 -> 그 결과값

// 산술연산자 (+,-,*,/,%) -> 2개의 피연산자가 필요
// 나머지 연산자(%) -> 2개의 피연산자가 필요

console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2); // 소수점 연산까지 진행
console.log(1%2); // 나머지 연산 -> 몫 말고 나머지.

//사칙연산 계산우선순위를 따름 (곱셈, 나눗셈 먼저 -> +,-)
console.log(1+2*3);
// ()를 쓰면 우선순위를 지정할 수 있음
console.log((1+2)*3);

// 대입/할당 연산자 <- 변수/상수에 값을 넣음
let a = 0; // = <- 연산자, 값을 넣는 행위
a = a + 5; // 계산
//왼쪽이 변수 네임스페이스 = 새로운 값

// a,b가 있고 a와 동일한 타입이면 a += b 가 가능
console.log(a);

a += 5 // a = a + 5; 대입/할당 연산자

console.log(a); // + - * / %
// 연산자를 연습할 수 있는 연습할 수 있는 웹사이트 : https://www.codewars.com/

// 비교연산자
// == -> =은 이미 더 중요해보이는 할당에 써버림
100 == 10

// 일치 연산자(형 변환을 하지 않는다 - 그대로 둔다)
console.log (1 === "1"); //false
console.log (1 !== "1"); //true

// 같지 않다
console.log(1 != "1");

//truthy, falsey
console.log(0 == 0);
console.log("" == 0);
console.log("" == "0");

// 논리 연산자
// 1개 이상의 값에 대해서 논리적 평가값(true, false)를 합성, 변환하는 연산자
// &&(and), ||(or), !(not)
console.log("--------")
const b1 = 100 >10;
console.log(b1);
console.log(!b1); // not(!) => true => false
const b2 = 50 < 20;
console.log(b2);
//b1도 true, b2도 true일 때 true => 모든 조건을 만족시켜야 true
console.log(b1 && b2);
//b1이true or b2가 true 일 때 true => 하나라도 만족하면 true
console.log(b1 || b2);

// ! <-이건 이해가 감
// && ,|| -> 단축 연산
// || -> 맨 처음에 true -> a || b => a가 true면 b는 신경써야함? => 무조건 true
// && -> 맨 처음에 false -> a && b => a가 false면 b는 신경써야함? => 무조건 false

console.log("--------")
// 증감 연산자로 증명할 것임
let x =1;
x++; // x+=1, x = x+1
console.log(x)
// x++ => x를 먼저 호출하고 나서, ++을 처리 (값을 반환) -> 호출 후 증가
// ++x => ++을 먼저 처리하고 나서, x를 호출 (호출 대상 값) -> 증가 후 반환
console.log(x++); 
console.log(++x);


console.log("--------")
console.log("|| 전", x);
true || x++; //이런식의 구문을 만들었다.
console.log("|| 후", x);

console.log("|| 전", x);
false || x++; //이런식의 구문을 만들었다.
console.log("|| 후", x);

console.log("&& 전", x);
true && x++; //이런식의 구문을 만들었다.
console.log("&& 후", x);

console.log("&& 전", x);
false && x++; //이런식의 구문을 만들었다.
console.log("&& 후", x);

// 삼항 연산자 - 일반적으로 연산자는 1~2개까지 피연산자(항)
// true, false ? true 일때: fasledlfEo
// 1 + 2 -> 1, 2 피연산자(항) 2개

const age = 28
console.log(
    age >= 28 ? "음주 가능" : "음주 불가능"
)
console.log(age <28 ? "낫이상진" : "이상진");

// && || -> 단축연산, 삼항연산자  -> react
// <컴포넌트, 페이지> 리터럴 값 취급 -> 보이고 말고를 흐름제어로 하는게 아니라
// 이런 연산자들을 묶어서가지고 표현하고...
// jsx, tsx 이쪽을 좀 해보신 분들은 (조건) : (조건 만족했을 때 이런 컴포넌트): 아닐때는 비워둠 혹은 이런 컴포넌트...
// 프론트엔드를 하기 위해서는 단축연산, 삼항연산자 잘알아야함

// 비트 연산자는 일부러 안하는 것 ( && -> '&', ||)
// null 처리 관련. .
console.log(2 ** 3); // 2의 3승
console.log(2 ** 0.5); // 루트
console.log(2 ** (1/3)); // 3승