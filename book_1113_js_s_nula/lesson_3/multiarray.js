/*1. Создайте массив, содержащий три значения: 1, 2 и 3.
2. Трижды вложите исходный массив в новый массив.
3. Выведите на экран значение 2 из любого массива.*/


let simpleArray = [1, 2, 3]
let multiArray = [simpleArray, simpleArray, simpleArray];
console.log(multiArray[1][1]);