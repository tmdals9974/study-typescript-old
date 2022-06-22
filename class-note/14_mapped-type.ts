// 맵드 타입 : js map 함수를 호출하는 것과 같은 결과
type Heroes = "Hulk" | "Capt" | "Thor";

// type HeroAges = { [ ~ in Heroes ] : ~} //기본적인 Mapped type 형태
type HeroAges = { [K in Heroes]: number };

const ages: HeroAges = {
  Hulk: 0, 
  Capt: 0,
  Thor: 0,
}