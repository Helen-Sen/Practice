/*1.Выведите значение PI на экран с помощью Math.
2.Используя Math для числа 5.7, получите значение ceil(), значение floor(), округленное значение. Выведите результат на экран.
3.Выведите на экран случайное значение.
4.Используйте Math.floor() и Math.random() для получения числа в диапазоне от 0 до 10.
5.Используйте Math.floor() и Math.random() для получения числа в диапазоне от 1 до 10.
6.Используйте Math.floor() и Math.random() для получения числа в диапазоне от 1 до 100.
7.Создайте функцию для генерации случайного числа, используя параметры min и max. Запустите функцию 100 раз, каждый раз возвращая на экран случайное число в диапазоне от 1 до 100.*/

let pi = Math.PI;
console.log(pi);

let number = 5.7;
console.log(Math.ceil(number)); //округление в большую сторону до целого числа
console.log(Math.floor(number)); //округление в меньшую сторону до целого числа
console.log(Math.round(number));

let numRandom0_10 = Math.floor(Math.random() * 11); //// min = 0, max = 10
console.log(numRandom0_10);

let numRandom1_10 = Math.floor(Math.random() * 10) + 1; // min = 1, max = 10
console.log(numRandom1_10);

let numRandom1_100 = Math.floor(Math.random() * 100) + 1; //// min = 1, max = 100
console.log(numRandom1_100);

function randomNumber(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

for (let i = 1; i <= 100; i++) {
  randomNumber(1, 100);
}
