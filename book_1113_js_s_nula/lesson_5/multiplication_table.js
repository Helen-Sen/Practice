// Variant 1 (without zero row and column)
let table1 = [];
for (i = 1; i < 11; i++) {
  table1.push([]);
  for (j = 1; j < 11; j++) {
    //   table1[i - 1].push(i * j);
      table1[i - 1].push(`${i} * ${j} = ${i * j}`);
     
  }
}
console.table(table1);
console.log(table1);


// Variant 2 
let table2 = [];
for (i = 0; i < 11; i++) {
  table2.push([]);
  for (j = 0; j < 11; j++) {
    table2[i].push(i * j);
  }
}
console.table(table2);

// for (i = 0; i <= 10; i++) {
//     console.log(table2[i]);
// }

// // 1 * 1 = 1   1 * 2 = 2 ...
// // 2 * 1 = 2   2 * 2 = 4
// // ...

// Variant 3
const myTable = [];
const numm = 10;
for (let x = 0; x < numm; x++) {
  const temp = [];
  for (let y = 0; y < numm; y++) {
    temp.push(x * y);
  }
  myTable.push(temp);
}

console.table(myTable); 