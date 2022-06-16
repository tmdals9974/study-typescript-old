// ! 타입 단언(type assertion)
var a1;
a1 = 200;
a1 = "a";
var b1 = a1 as string;
// a1은 any타입이며, 타입추론이 불가능한 상황.
// 다만 개발자는 a1의 타입을 알고 있기 때문에 (마지막에 string이 들어감) 타입을 강제할 수 있음.
// 따라서 b1은 string이 됨. (a1의 타입이 바뀌진 않음)

// 예제 : DOM API 조작
// <div id="app"> hi </div>
var div = document.querySelector('div') as HTMLDivElement;
// querySelector는 HTMLDivElement | null 이므로 divElement 내부 속성값에 접근할 수 없게됨.
div.innerText = 'a';
