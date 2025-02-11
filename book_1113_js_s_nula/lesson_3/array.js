let arr = ["hi there", 5, true];
console.log(typeof arr[0]); //string
console.log(typeof arr[1]); //number
console.log(typeof arr[2]); //boolean

const arr1 = ["hi there"];
arr1[0] = "new value";
console.log(arr1[0]); //new value
// arr1 = ["hello"];
// console.log(arr1[0]); //error: Assignment to constant variable.

const myArr2 = [];
myArr2[10] = "test";
console.log(myArr2); //[ <10 empty items>, 'test' ]
console.log(myArr2[2]); //undefined

const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]); //undefined