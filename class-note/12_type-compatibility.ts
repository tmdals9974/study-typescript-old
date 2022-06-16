//! 타입 호환

// * 인터페이스 예제
interface Developer4 {
  name: string;
  skill: string;
}

interface Person4 {
  name: string;
}

var developer4: Developer4 = {
  name: "",
  skill: "",
};
var person4: Person4 = {
  name: "",
};
// developer4 = person4; //구조적으로 맞지 않음. skill이 person에 없기 때문.
person4 = developer4;

// * 클래스 예쩨
class Person5 {
  name: string;
}

var person5: Person5 = { name: "" };
// developr4 = new Person5();
person5 = developer4;

// * 함수 예제
var add5 = function (a: number) {
  //...
};
var sum5 = function (a: number, b: number) {
  //...
};

// add5 = sum5; //불가
sum5 = add5; //가능

// * 제네릭 예제
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
// empty1 = empty2; //가능
// empty2 = empty1; //가능

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string> = { data: "" };
var notEmpty2: NotEmpty<number> = { data: 0 };
// notEmpty1 = notEmpty2; //불가
// notEmpty2 = notEmpty1; //불가