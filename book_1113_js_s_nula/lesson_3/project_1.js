/*const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Используя методы pop(), push(), shift() и unshift(), добейтесь следующего результата в консоли:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]*/

const theList = ["Laurence", "Svekis", true, 35, null, undefined, { test: "one", score: 55 }, ["one", "two"]];
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.shift();
theList.unshift("FIRST"); 
theList[2] = "MIDDLE";
theList[3] = "hello World";
theList.push("LAST");
console.log(theList);