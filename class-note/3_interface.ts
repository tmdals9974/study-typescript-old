//!일반적인 인터페이스 활용
interface User {
  age: number;
  name: string;
}

let seho: User = {
  age: 13,
  name: "seho",
};

function getUser(user: User): void {
  console.log(user);
}

//!함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
// arr[0] = 10;

//!딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

obj["cssFile"].test("style.css");

//!인터페이스 확장
interface Person2 {
  name: string;
  age: number;
}

interface Developer2 extends Person2 {
  language: string;
}

var devSm: Developer2 = {
  name: "이승민",
  age: 28,
  language: "ko",
};
