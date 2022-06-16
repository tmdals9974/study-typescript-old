// ! 타입 추론 기본1
var a; //any 타입으로 추론
var b = 10; //number 타입으로 추론
var c = "a"; //string 타입으로 추론

function getD(d) {
  //any를 받아 any를 리턴으로 추론
  return d;
}

function getE(e = 10) {
  //number를 받아 number를 리턴으로 추론
  return e;
}

// ! 타입 추론 기본2
/*
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  // value: 10, //Generic 추론으로 인해 string만 받음
  value: "value",
  title: "title",
};
*/

// ! 타입 추론 기본3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T1, T2> extends Dropdown<T2> {
  description: string;
  tag: T1;
}

var shoppingItem: DetailedDropdown<string, number> = {
  // value: "value", //Generic 추론으로 인해 number만 받음
  value: 10,
  title: "title",
  // description: 10, //Generic 추론으로 인해 string만 받음
  description: "description",
  tag: "tag",
};

// ! Best Common Type (가장 적절한 타입)
var arr = [1, 2, true, true, "a"]; //union 타입으로 추론
