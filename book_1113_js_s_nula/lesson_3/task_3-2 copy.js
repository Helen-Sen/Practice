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
shoppingList.push("milk", "bread", "apples");
shoppingList.splice(1, 1, "bananas", "eggs")
console.log(shoppingList.pop());
shoppingList.sort();
console.log(shoppingList.indexOf("milk"));
shoppingList.splice(shoppingList.indexOf("bananas") + 1, 0, "carrots", "lettuce");
let shoppingList2 = ["juice", "pop"];
let shoppingList3 = shoppingList.concat(shoppingList2).concat(shoppingList2);
console.log(shoppingList3.lastIndexOf("pop"));
