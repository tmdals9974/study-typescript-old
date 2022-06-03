function add(a:number, b: number) {
  return a+b; 
}

var res = add(1, 2);
res.toLocaleString();
// var로 선언했지만, 타입 추론으로 인해 해당 타입일 경우 사용할 수 있는 함수들이 인텔리전스됨.
// res. 