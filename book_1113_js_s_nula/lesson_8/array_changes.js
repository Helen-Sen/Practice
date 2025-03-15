/*Есть очередь людей. Нужно удалить первого, добавить нового в конец и вставить еще одного в середину.
let queue = ["Alice", "Bob", "Charlie", "David"];
Что нужно сделать:
Удалить первого человека.
Добавить в конец "Eva".
Вставить "Frank" перед "Charlie" (splice).
Вывести итоговый массив.*/

let queue = ["Alice", "Bob", "Charlie", "David"];
queue.shift();
queue.push("Eva");
queue.splice(1, 1, "Frank");

console.log(queue);
