//Верхний и нижний регистры toLowerCase(), toUpperCase()
let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital); //Hi how are you?

let first_capital2 = caps.charAt(0).concat(fixed_caps.slice(1));
console.log(first_capital2); //Hi how are you?

// Сторока в массив
let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result); //[ 'Hello', 'JavaScript' ]

// массив в строку
let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x); //a,b,c

//Создание подстрок
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3);
console.log("1:", substr1); //1: e a substring
console.log("2:", substr2); //2: Cre

//Замена фрагментов строки: replace(old, new); replaceAll()
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi); //Hi Pascal

let s3 = "hello hello";
let new_s3 = s3.replaceAll("hello", "oh");
console.log(new_s3); //oh oh

//Начало и конец строки startsWith, endsWith
let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start); //true
let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2); //false
