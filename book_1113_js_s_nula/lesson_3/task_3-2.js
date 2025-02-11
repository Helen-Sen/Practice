/*1.Создайте массив — список покупок в продуктовом магазине.
2.Добавьте в список Milk, Bread и Apples.
3.Замените Bread на Bananas и Eggs.
4.Удалите последний элемент из массива и выведите его на экран.
5.Отсортируйте список в алфавитном порядке.
6.Найдите и выведите значение индекса Milk.
7.После Bananas добавьте Carrots и Lettuce.
8.Создайте новый список, в котором будет Juice и Pop.
9.Объедините оба списка, добавив новый список дважды в конец первого списка.
10. Получите последнее значение индекса Pop и выведите его на экран.*/

let shoppingList = [];
shoppingList.push("Milk", "Bread", "Apples");
shoppingList.splice(1, 1, "Bananas", "Eggs");
let removedItem = shoppingList.pop();
console.log(removedItem);
console.log(shoppingList);
shoppingList.sort();
console.log(shoppingList.indexOf("Milk")); //2
shoppingList.splice(1, 0, "Carrots", "Lettuce");
let shoppingList2 = ["Juice", "Pop"];
let shoppingList3 = shoppingList.concat(shoppingList2).concat(shoppingList2);
console.log(shoppingList3);
console.log(shoppingList3.lastIndexOf("Pop"));
