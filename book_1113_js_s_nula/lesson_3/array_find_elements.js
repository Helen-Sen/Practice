/*метод find(). Это функция, которая будет применяться к каждому элементу массива, пока не найдет совпадения. 
Если совпадений не встретится, функция вернет значение undefined.*/

arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) {
  return e === 6;
});
let findValue2 = arr8.find((e) => e === 10);
console.log(findValue, findValue2); //6 undefined

/*метод indexOf() возвращает значение индекса, по которому найдено значение. 
Если значение встречается в массиве несколько раз, метод вернет индекс первого совпадения. 
Если значение не найдено, вернется значение -1*/

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2); //1 -1
let findIndex3 = arr8.indexOf(6, 2); // ищем индекс числа 6 начиная со второй позиции
console.log(findIndex3); //-1

//lastIndexOf(): последнее совпадение
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog); //4
