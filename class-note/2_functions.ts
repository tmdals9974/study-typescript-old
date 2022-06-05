function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);


// 옵셔널 파라미터
function log(a:string, b?: string) {

}

log('hello')
log('hello', 'world');