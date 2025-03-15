/*Используя методы управления строками, создайте функцию, которая будет возвращать строку, где каждое слово будет написано с большой буквы. Иными словами, вы должны преобразовать предложение thIs will be capiTalized for each word в This Will Be Capitalized For Each Word.
1.Создайте строку из нескольких слов, содержащих в себе буквы разного регистра.
2.Создайте функцию, получающую строку в качестве аргумента. Эта строка будет значением, которым мы будем управлять.
3.Преобразуйте в функции написание всех букв в нижний регистр.
4.Создайте пустой массив — в нем будут храниться значения слов, написанных с заглавной буквы.
5.Преобразуйте целую фразу в отдельные слова в массиве, используя метод split().
6.Переберите циклом все слова нового массива, чтобы обращаться независимо к любому из них. Можно для этого применить forEach().
7.Отделите первую букву каждого слова с помощью slice() и преобразуйте ее в верхний регистр. Снова примените slice(), чтобы получить оставшееся слово без первой буквы. Затем соедините части слова, чтобы образовать слово, которое теперь пишется с заглавной буквы.
8.Добавьте новое слово с заглавной буквы в созданный вами пустой массив. К концу цикла вы должны получить массив всех слов как отдельных элементов массива.
9.Возьмите массив обновленных слов и, используя метод join(), преобразуйте их обратно в строку с пробелами между каждым словом.
10. Верните значение обновленной строки, которое затем можно вывести на экран.*/

let startLine = "thIs will be capiTalized for each word";
// function transform(line) {
//   return line.toLowerCase();
// }
// let lowerCaseLine = transform(startLine);
let lowerCaseLine = startLine.toLowerCase();

console.log(lowerCaseLine);

let upperCaseArray = [];
let lowerCaseArray = lowerCaseLine.split(" ");
console.log(lowerCaseArray);
lowerCaseArray.forEach((word) => {
  let newWord = word.slice(0, 1).toUpperCase().concat(word.slice(1));
  upperCaseArray.push(newWord);
 });
console.log(upperCaseArray);

let finishLine = upperCaseArray.join(" ");
console.log(finishLine);

//Variant chatGPT
let finishLine2 = startLine
  .toLowerCase()
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(finishLine2); // This Will Be Capitalized For Each Word

