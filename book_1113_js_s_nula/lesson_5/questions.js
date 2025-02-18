// 1.Какой результат следует ожидать после выполнения этого кода?
// let step = 3;
// for (let i = 0; i < 1000; i += step) {
// if (i > 10) {
// break;
// }
// console.log(i);//0, 3, 6, 9
// }

// 2.Каким будет итоговое значение myArray и каким получится результат в консоли?
const myArray = [1,5,7];
for(el in myArray){
console.log(Number(el)); 
el = Number(el) + 5;
console.log(el);
}
console.log(myArray); 
//0, 5, 1, 6, 2, 7, [ 1, 5, 7 ]

