/*Ты работаешь с массивом заказов, где каждый заказ — это объект с информацией о клиенте и купленных товарах. Тебе нужно:
Подсчитать общую сумму продаж с помощью reduce().
Вывести список всех клиентов с помощью forEach().
Создать массив товаров, проданных более чем в 2 экземплярах с помощью filter().
Отсортировать заказы по общей сумме с помощью sort().
Вывести все товары, купленные хотя бы одним клиентом, без дубликатов.*/

let orders = [
  {
    customer: "Alice",
    items: [
      { product: "Laptop", price: 1000, quantity: 1 },
      { product: "Mouse", price: 50, quantity: 2 },
      { product: "Keyboard", price: 100, quantity: 4 },
      { product: "Monitor", price: 300, quantity: 1 },
    ],
  },
  {
    customer: "Bob",
    items: [
      { product: "Monitor", price: 300, quantity: 1 },
      { product: "Keyboard", price: 100, quantity: 3 },
    ],
  },
  {
    customer: "Charlie",
    items: [
      { product: "Phone", price: 800, quantity: 1 },
      { product: "Headphones", price: 150, quantity: 2 },
      { product: "Monitor", price: 300, quantity: 2 },
    ],
  },
];

let totalSum = 0;
orders.forEach((order) => {
  let sum = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalSum += sum;
});
console.log(`Total sum of all orders: ${totalSum}`);

//Alternative from ChatGPT:
// let totalSum = orders.reduce((acc, order) => acc + order.items.reduce((sum, item) => sum + item.price * item.quantity, 0), 0);

// console.log(`Total sum of all orders: ${totalSum}`);

orders.forEach((order) => {
  console.log(`customer: ${order.customer}`);
});

//Alternative from ChatGPT:
let customers = orders.map((order) => order.customer);
console.log(customers);

let listOfOrders = orders.flatMap((order) => order.items);
console.log(listOfOrders);
let popularProducts = listOfOrders.filter((order) => {
  return order.quantity >= 2;
});
console.log(popularProducts);

orders.sort((a, b) => {
  let totalA = a.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let totalB = b.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return totalB - totalA;
});
console.log(orders);

let listOfProducts = listOfOrders.map((order) => order.product);
console.log(listOfProducts);

let uniqProduct = listOfProducts.filter((product, index) => {
  return listOfProducts.indexOf(product) === index;
});
console.log(uniqProduct);

//Alternative from ChatGPT:
/*new Set(listOfProducts) создаёт множество (Set) – оно автоматически удаляет дубликаты.
[...] — превращает множество обратно в массив.*/

let listOfProducts2 = listOfOrders.map((item) => item.product);
console.log(listOfProducts2);

let uniqProduct2 = new Set(listOfProducts2); // Using Set for uniqueness
console.log(Array.from(uniqProduct2));


listOfProducts.forEach((item, i, sa) => {  
  console.log(item, i, sa.filter((item2) => item2 == item).length);
});

let a = [1, 2, 3];
// let b = a;
let b = Array.from(a);

// a.push(4);
// console.log(a);
// console.log(b);

// b.push(5);
console.log(a);
console.log(b);

console.log(a == b);