/*Рисуем треугольник
Используя вложенные циклы for, нарисуйте треугольник из *:
*
**
***
****
******
Нарисуйте такой треугольник (используя вложенные for):
1  
1 2  
1 2 3  
1 2 3 4  
1 2 3 4 5*/

let line1 = "";
let line3 = "";
let n = 5;

for (let i = 1; i <= n; i++) {
  line1 += i + " ";
  console.log(line1);
}

for (let i = 1; i <= n; i++) {
  let line2 = "";
  for (let j = 1; j <= i; j++) {
       line2 += j + " ";
  }
  console.log(line2);
}

// for (let i = 1; i <= n; i++) {
//   line3 += "*";
//   console.log(line3);
// }

// for (let i = 1; i <= n; i++) {
//   let line4 = "";
//   for (let j = 1; j <= i; j++) {
//     line4 += "*";
//   }
//   console.log(line4);
// }
