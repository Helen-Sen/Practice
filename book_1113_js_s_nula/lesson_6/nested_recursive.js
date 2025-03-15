/*Напиши функцию sumOfDigits(num), которая получает число num и возвращает сумму его цифр.
Внутри этой функции должна быть вложенная рекурсивная функция recursiveSum(), которая выполняет всю логику.
Используй рекурсию, чтобы разбирать число на отдельные цифры и складывать их.
Функция должна работать для любых положительных чисел.
Подсказки:
🔹 Вложенная функция нужна, чтобы изолировать логику рекурсии.
🔹 Используй num % 10, чтобы получить последнюю цифру числа.
🔹 Используй Math.floor(num / 10), чтобы убрать последнюю цифру.
🔹 Базовый случай рекурсии — когда число станет 0, тогда просто верни 0
Пример:
console.log(sumOfDigits(1234)); // 1 + 2 + 3 + 4 = 10
console.log(sumOfDigits(987));  // 9 + 8 + 7 = 24
console.log(sumOfDigits(5));    // 5 (одно число, не изменяется)*/

function sumOfDigits(num) {
  if (num < 0) {
    console.log("number should be more than 0");
    return null;
  }
  return recursiveSum(num);

  function recursiveSum(num) {
    let number = num % 10;

    if (num === 0) {
      return 0;
    } else {
      num = Math.floor(num / 10);
      return number + recursiveSum(num);
    }
  }
}
console.log(sumOfDigits(1234));
console.log(sumOfDigits(987));
console.log(sumOfDigits(5));
console.log(sumOfDigits(0));
console.log(sumOfDigits(-12));
// console.log(recursiveSum(-123)) ;

//превратить число в строку, дергать по элеменнтно, снова превращать в число и суммировать
