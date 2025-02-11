/*Создайте переменную для своего имени, еще одну — для вашего возраста, 
и еще одну — для строки, определяющей, умеете ли вы кодировать в JavaScript или нет.
Выведите на экран следующее суждение, где name, age и true/false будут переменными:
Hello, my name is Maaike, I am 29 years old and I can code
JavaScript: true.*/

const myName = "Maaike";
const myAge = 29;
const coder = true;
const message = "Hello, my name is " + myName + ", I am " + myAge + " years old and I can code JavaScript: " + coder + ".";
console.log(message);

let nr1 = 15;
let nr2 = 10;
let str1 = "Hi";

let result1 = nr1 * nr2;
let result2 = str1 * nr1;
console.log(result1, result2); //150 NaN

let result3 = nr1 / nr2;
let result4 = str1 / nr1;
console.log(result3, result4); //1.5 NaN

let result5 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result5}`); //15 % 10 = 5; 5 остаток от деления

nr1++;
console.log(nr1);
