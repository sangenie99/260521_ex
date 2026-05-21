// var이라는 키워드는 있음(참고)

// 변수: 특정한 메모리에 저장되어 있는 값을 호출하기 위해서 사용하는 호칭
name ="윌리엄";
console.log(name);

// 호이스팅이라는 개념을 알기

//let 키워드
let foo; // let 변수명 -> '변수명'으로 메모리에 장소를 만들겠다 (선언 : declaration)
foo = 10; // 선언된 변수에 값을 넣는 행위 (할당/대입 : assignment/attribution)
let bar = 10; // 선언과 할당 -> 초기화 (initiaztion)
console.log(foo);
console.log(bar);
//재할당 0, 재선언 x
foo = 100;

let o = {name: "will", age: 20};
console.log(o.name);
o = 10;
console.log(o.name); // undefined
// 변수는 재할당을 받을 수 있기 때문에 메모리상 가변적인 위치를 받음
// 상수는 재할당이 안되기 때문에 메모리상 고정적인 길이. -> 약간의 최적화 기능도 한다.

//var (함수 스코프) <-> let, const (블록 스코프)
//v = 1000;
// var v = 100;
// var v;
