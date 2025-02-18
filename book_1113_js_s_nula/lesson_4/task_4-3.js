/*1. Создайте переменную ID (удостоверение личности) с логическим значением.
2. Используя тернарный оператор, создайте переменную message, которая проверит, является ли ID действительным, и либо разрешит человеку войти в заведение, либо нет.
3. Выведите результат на экран.*/

let id1 = true;
id1 ? console.log("you ID is valid") : console.log("you ID is invalid");

// variant 2
let id2 = false;
let message = id2 ? "Your ID is valid" : "Your ID is invalid";
console.log(message);