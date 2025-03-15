/*Напиши функцию createMultiplier(baseNumber), которая принимает число и возвращает другую функцию.
Вложенная функция должна принимать еще одно число и умножать его на baseNumber.
Вызови createMultiplier с разными значениями и проверь, как работает вложенная функция.*/

// let baseNumber = 5;
// let newNumber = 2;
function createMultiplier1(baseNumber) {
  function newFunction(newNumber) {
    return newNumber * baseNumber + 1;
  }
  return newFunction;
}

// console.log(createMultiplier(baseNumber));
const double1 = createMultiplier1(3);
console.log(double1(6));

//variant 2 from ChatGPT
function createMultiplier(baseNumber) {
  return function (newNumber) {
    return newNumber * baseNumber;
  };
}
const double = createMultiplier(2);
console.log(double(5));

console.log(double1(7));
