interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const emails: Array<Dropdown<string>> = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: Array<Dropdown<number>> = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem<T extends { toString: Function }>(item: Dropdown<T>): HTMLOptionElement { //toString 함수를 가진 타입만 받음
function createDropdownItem<T extends string | number>(item: Dropdown<T>): HTMLOptionElement { //string이나 number만 받음
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email: Dropdown<string>) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector("#email-dropdown")!;
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product: Dropdown<number>) {
  const item = createDropdownItem(product);
  const selectTag = document.querySelector("#email-dropdown")!;
  selectTag.appendChild(item);
});
