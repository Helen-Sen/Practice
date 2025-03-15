/*Проверить, все ли числа в массиве больше нуля.
Вывести true или false.*/

let numbers = [10, 20, 30, -5, 40];

function checkNumber(number) {
    return number > 0;
}

console.log(numbers.every(checkNumber));