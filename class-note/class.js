
//! function 기반
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.print = function() {
    console.log(this.name);
    console.log(this.age);
  }
}
var sm = new Person('승민', 28);
sm.print();

//! class 문법 기반
class Person {
  // 클래스 로직
  constructor(name, age) {
    //초기화 메소드
    console.log("created");
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(this.name);
    console.log(this.age);
  }
}

var sm = new Person("승민", 28);
sm.print();