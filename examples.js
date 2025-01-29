// let firstName = "Kyle";

// console.log("My name is ${ firstName }.");
// // My name is ${ firstName }.
// console.log('My name is ${ firstName }.');
// // My name is ${ firstName }.
// console.log(`My name is ${ firstName }.`);
// // My name is Kyle.


// console.log(typeof 42); // "number"
// console.log(typeof "abc"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" // историческая особенность
// console.log(typeof { "a": 1 }); // "object"
// console.log(typeof [1, 2, 3]); // "object" // массивы являются объектами
// console.log(typeof function hello() {}); // "function"


// function example(param) {
//   if (true) {
//     var testVar = "I am var";
//     let testLet = "I am let";
//     console.log(param); // Доступен
//   }
//   console.log(testVar); // Работает: var виден везде в функции
// //   console.log(testLet); // Ошибка: let виден только внутри блока if
// }
// example(42);

// function greeting(myName) {
//     return `Hello, ${myName}!`;
//     }
// var msg = greeting("Kyle");
// console.log(msg); // Hello, Kyle!

// var whatToSay = {
// greeting() {
// console.log("Hello!");
// },
// question() {
// console.log("What's your name?");
//     },
// answer() {
// console.log("My name is Kyle.");
// }
// };
// whatToSay.greeting();
// // Hello!

var myName = "Kyle";
var yourName = myName;
myName = "Frank";
console.log(myName);
// Frank
console.log(yourName);
// Kyle