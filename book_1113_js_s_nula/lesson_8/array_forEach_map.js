/*Описание:
Дан массив цен товаров. Нужно вывести в консоль каждую цену с учетом 10% налога (используем forEach) и создать новый массив с увеличенными ценами (map).
let prices = [100, 200, 300, 400, 500];
🔹 Что нужно сделать:
С помощью forEach() вывести в консоль цену с налогом.
С помощью map() создать новый массив с увеличенными ценами.*/

let prices = [100, 200, 300, 400, 500];
prices.forEach((price, index) => {
  console.log(`new price is ${Math.round(price * 1.1)}`);
});

let newPrices = prices.map((price) => Math.round(price * 1.1));

console.log(newPrices);
