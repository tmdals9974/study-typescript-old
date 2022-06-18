/**
 * * 유틸리티 타입 : 타입스크랩트 내부에 미리 정의되어 있는 편의성을 제공하는 타입
 * * https://www.typescriptlang.org/docs/handbook/utility-types.html
 * ? Partial : 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있음
 * ? Pick : 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의할 수 있음
 * ? Omit : 특정 타입에서 지정된 속성만 제거한 타입을 정의할 수 있음
 */

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

const product1: Partial<Product> = {};
const product2: Partial<Product> = { id: 5, name: "test" };
type shoppingItem = Pick<Product, "id" | "name" | "price">;
type itemInfo = Omit<Product, "price" | "brand" | "stock">;
