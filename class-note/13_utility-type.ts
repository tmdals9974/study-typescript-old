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



// 유틸리티 타입 구현하기 - Partial
interface UserProfile { 
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// #1
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #2
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #3 Mapped Type
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// #4 keyof
// type UserProfileKeys = keyof UserProfile;

// #5 
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p]
// }

// 6
type Subset<T> = { 
  [p in keyof T]?: T[p]
}