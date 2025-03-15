/*У тебя есть массив заказов, где каждый заказ — это объект с информацией о клиенте, товарах и их количестве. Нужно:
Использовать .forEach() — вывести в консоль информацию о каждом заказе.
Использовать .filter() — выбрать заказы, где общая сумма больше 500.
Использовать .map() — создать массив только с именами клиентов.
Использовать .reduce() — посчитать общую сумму всех заказов.
Использовать .sort() — отсортировать заказы по сумме.*/

let orders = [
  { customer: "Alice", items: [{ product: "Laptop", price: 1000, quantity: 1 }] },
  { customer: "Bob", items: [{ product: "Mouse", price: 25, quantity: 2 }] },
  {
    customer: "Charlie",
    items: [
      { product: "Keyboard", price: 250, quantity: 1 },
      { product: "Monitor", price: 300, quantity: 1 },
    ],
  },
  { customer: "David", items: [{ product: "Phone", price: 800, quantity: 1 }] },
];

orders.forEach((order) => {
  console.log(`customer: ${order.customer}: `);
  order.items.forEach((item) => {
    console.log(`product: ${item.product}, price: ${item.price}, quantity: ${item.quantity};`);
  });
});

let filterOrders = orders.filter((order) => {
  let total = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log(`Order ${order.customer}: sum total ${total}`); 
  return total > 500;
});

console.log(filterOrders);

let customers = orders.map((name) => name.customer);
console.log(customers);

orders.sort((a, b) => {
  let totalA = a.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let totalB = b.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return totalA - totalB; 
});

console.log(orders);


    
