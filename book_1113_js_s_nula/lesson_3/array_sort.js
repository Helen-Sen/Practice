/*sort() - числа от маленьких до больших и располагает строки от А к Z
By default, the JavaScript sort() method converts numbers to strings and sorts them lexicographically.*/
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names.sort()); //[ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]

let ages = [18, 72, -20, -2, 33, 56, 40];
console.log(ages.sort()); // [-2, -20, 18, 33, 40,  56, 72]

/*To sort numbers (including negative numbers) numerically, you need to pass a comparator function to sort()*/
ages.sort((a, b) => a - b);
console.log(ages); //[-20, -2, 18, 33, 40, 56, 72]

/*метод reverse() - меняет элементы массива местами. */
console.log(names.reverse()); //[ 'Maria', 'James', 'Fatiha', 'Bert', 'Alicia' ]
