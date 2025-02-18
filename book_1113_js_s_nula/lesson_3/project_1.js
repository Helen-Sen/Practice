/*const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Используя методы pop(), push(), shift() и unshift(), добейтесь следующего результата в консоли:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
Вы можете предпринять следующие шаги или реализовать собственный подход:
удалите первый и последний элементы массива;
добавьте значение FIRST в начало массива;
присвойте значение hello World четвертому элементу;
присвойте значение MIDDLE элементу с третьим индексом;
добавьте значение LAST в конечную позицию массива;
выведите результат на экран.*/

const theList = ["Laurence", "Svekis", true, 35, null, undefined, { test: "one", score: 55 }, ["one", "two"]];
for (i = 0; i < 4; i++) {
  theList.pop();
}
theList.shift();
theList.unshift("FIRST");
theList[2] = "MIDDLE";
theList[3] = "hello World";
theList.push("LAST");
console.log(theList);
