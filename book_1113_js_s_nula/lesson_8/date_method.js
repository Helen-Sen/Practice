let currentDateTime = new Date();
console.log(currentDateTime);

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());

//установка дат
// d.setFullYear(2020);
// d.setMonth(9);
// d.setDate(10);
// d.setHours(21);
// console.log(d);

console.log(d.toDateString()); //Tue Mar 11 2025
console.log(d.toLocaleDateString()); //3/11/2025