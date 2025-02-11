/*push - добавляет элемент в конце
let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
console.log(favoriteFruits);

/*Метод splice() использует несколько параметров. Первый параметр (в нашем случае 2) — это индекс массива, 
с которого мы хотим начать делать вставку. Второй параметр (в нашем случае 0) — это число элементов, 
которые мы хотим удалить, начиная с ранее определенного стартового значения. 
После этих двух параметров следуют значения (в нашем случае square и trapezoid), которые требуется внести, начиная с определенного индекса.*/

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

/*метод concat() - добавить один массив в другой. Элементы первого массива будут первыми, а элементы метода concat() будут собраны к концу*/
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr6.concat(arr5);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

