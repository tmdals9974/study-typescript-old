//! 유니온타입
var seho3: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "string") {
    //value가 string으로 추론되어 인텔리전스됨
    value.toLocaleLowerCase();
  } else if (typeof value === "number") {
    value = value.toFixed(5);
  }

  throw new TypeError("value must be a string or number");
}

logMessage("hello world");
logMessage(2);

interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

function askSomeone(someone: Developer2 | Person2) {
  someone.name = "1";
  // ? 인터페이스의 유니온타입 경우, 공통되는 속성만 허락됨.
  // someone.age = 5;
  // someone.skill = "skill";
}

//!인터섹션
var seho4: string | number | boolean;
var capt4: string & number & boolean;

function askSomeone2(someone: Developer2 & Person2) {
  //? 인터섹션은 Developer2와 Person2의 모든 속성을 가지고 있는 타입이어야함.
  someone.age = 5;
  someone.name = "1";
  someone.skill = "skill";
}

askSomeone2({ name: "1", age: 5, skill: "skill",   });
