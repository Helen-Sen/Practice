// 1. Какой результат будет выведен на экран?
let q = "1";
switch (q) {
  case "1":
    answer = "one";
    break;
  case 1:
    answer = 1;
    break;
  case 2:
    answer = "this is the one";
    break;
  default:
    answer = "not working";
}
console.log(answer); //"one"

// 2. Что отобразится в консоли после выполнения данного кода?
let n = 1;
let answer;
switch (n) {
  case "1":
    answer = "one";
  case 1:
    answer = 1;
  case 2:
    answer = "this is the one";
    break;
  default:
    answer = "not working";
}
console.log(answer); // "this is the one"

// 3.Какой результат появится на экране?
let login = false;
let outputHolder = "";
let userOkay = login ? (outputHolder = "logout") : (outputHolder = "login");
console.log(userOkay); //"login"

// Каким будет итог выполнения этого кода?
const userNames = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
  htmlOutput = "Welcome, that is a user";
} else {
  htmlOutput = "Denied, not a user ";
}
console.log(htmlOutput + ": " + userInput); //Welcome, that is a user: John

// 5. Какой результат будет выведен в консоль в этом примере?
let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
  output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
  output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
  output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
  output = "Dinner time";
} else if (myTime >= 22) {
  output = "Time to go to sleep";
} else {
  output = "You should be sleeping";
}
console.log(output); //"Wake up, it's morning"

//6. Что выдаст программа после выполнения данного кода?
let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a); //true
console.log(a > b && b > a); // false
console.log(d > b || b > a); //true
console.log(d > b && b > a); //true

// 7. Что будет выведено на экран в этом примере?
let val = 100;
let message = val > 100 ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;
console.log(message); //100 was LESS or Equal to 100
let check = val % 2 ? `Odd` : `Even`;
check = `${val} is ${check}`;
console.log(check); //100 is even
