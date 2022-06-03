// @ts-check
// 위 ts-check를 선언하면 IDE 상에서 타입을 체크하여줌.
// jsDoc을 이용하기 때문에 jsDoc이 선언되어있어야 정상작동함.
// 해당 타입에서 이용할 수 있는 메소드나, 매개변수 타입 등을 모두 체크함.

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns {number} a+b
 */
function sum(a, b) {
  return a + b;
}

var a = sum(2, 4);

// 인텔리전스 추천 됨.
// a.