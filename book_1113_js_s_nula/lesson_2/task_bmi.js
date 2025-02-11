/*Установите значения для роста в дюймах и веса в фунтах, затем преобразуйте значения в сантиметры и килограммы:
1 дюйм равен 2,54 см;
2,2046 фунта равны 1 кг.
Выведите результаты. Затем рассчитайте и запишите ИМТ: он равен весу (в килограммах), 
деленному на квадрат роста (в метрах). Выведите результаты на экран.*/


let weightInFeet = 150;
let weightInKilo = weightInFeet / 2.2046;
let heightInInches = 70
    ;
let heightIncentimeters = heightInInches * 2.54;
let bmi = weightInKilo / ((heightIncentimeters/100) ** 2);

console.log(`Your weight in kilo = ${weightInKilo}`);
console.log(`Your heigh in centimeters = ${heightIncentimeters}`);
console.log(`Your BMI = ${bmi}`);


let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total); //16
let total2 = 500 + 100 / 5 + total--;
console.log(total2); //536

const a = 5;
const b = 10;
console.log(a > 0 && b > 0); //true
console.log(a == 5 && b == 4); //false
console.log(true || false); //true
console.log(a == 3 || b == 10); //true
console.log(a == 3 || b == 7); //false


