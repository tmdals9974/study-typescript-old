enum Shoes {
  Nike, //0
  Adidas, //1
  Vans, //2
  Discovery, //3
  NewBalance = 10,
}

enum Shoes2 {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Nike; //0
var myShoes2 = Shoes2.Nike; //나이키



// ! 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("good");
  } else if (answer === Answer.No) {
    console.log("sad");
  }
}

askQuestion(Answer.No);