/*Из массива пользователей нужно оставить только тех, кому больше 18 лет.
Вывести новый массив в консоль.*/

let users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 25 },
];


function filterAge(user) {
  return user.age > 18;
}
let filterUsers = users.filter(filterAge);

console.log(filterUsers);

