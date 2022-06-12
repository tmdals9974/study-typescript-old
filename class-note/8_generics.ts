function logText<T>(text: T): T {
  console.log(text);
  return text;
}

/**
 * ? generic을 사용하지 않았을 경우의 단점
 * * 1.  type마다 함수 선언
 *     => 코드 중복으로 인한 유지보수가 힘들어짐.
 * * 2.  Union type으로 함수 선언
 *     => string | number로 union을 했을 경우,
 *        타입추론을 string|number로 하기에,
 *        리턴객체 컨트롤에 어려움이 생김.
 */

logText(10); //return number
logText("hi"); //return string
logText<string>("hi"); //return string 명시적
logText(true); //return boolean

// ! interface에 Generic

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const emails1: Array<Dropdown<string>> = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts1: Array<Dropdown<number>> = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// ! 정의된 타입
function logTextLength<T>(text: T): T {
  // console.log(text.length); -> text에 length가 공통된 속성이 아니어서 오류남
  return text;
}
// logTextLength('hi');

interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2("a");
logTextLength2({ length: 5 }); // number는 length를 제공하지않아서 오류
// logTextLength2(10); // number는 length를 제공하지않아서 오류

// ! 제네릭 타입 제한 3 - key of
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>("a");
getShoppingItemOption("name");

