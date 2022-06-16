// ! 타입가드
interface Developer3 {
  name: string;
  skill: string;
}
interface Person3 {
  name: string;
  age: number;
}

function introduce(): Developer3 | Person3 {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}
var tony = introduce();
console.log(tony.name);
// console.log(tony.skill);
// 리턴 타입이 Developer | Person 이어서 공통된 값만 사용 가능함.
// 아래와 같이 해결이 가능하지만, 가독성이 좋지 않음.
if ((tony as Developer3).skill) {
  console.log((tony as Developer3).skill);
} else if ((tony as Person3).age) {
  console.log((tony as Person3).age);
}

// ! 타입가드 사용 (국룰 = is{{Type}}(target))
function isDeveloper(target: Developer3 | Person3): target is Developer3 {
  // Developer | Person 일 때, 두개를 구분 할 수 있는 필드를 통해 타입을 구분함.
  return (target as Developer3).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
