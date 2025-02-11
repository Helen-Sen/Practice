/*1.Создайте объект с именем people, содержащий пустой массив под названием friends.
2.Создайте три переменные, каждая из которых содержит объект, включающий имя, фамилию и значение ID вашего друга.
3.Добавьте трех друзей в массив friend.
4.Выведите результат на экран.*/

let people = { friends: [] };
let nata = {
  name: "Natalia",
  lastName: "Soldatova",
  ID: 1,
};

let sveta = {
  name: "Sveta",
  lastName: "Ryabko",
  ID: 2,
};

let tanya = {
  name: "Tanya",
  lastName: "Morozova",
  ID: 3,
};

people.friends.push(nata, sveta, tanya);
console.log(people);