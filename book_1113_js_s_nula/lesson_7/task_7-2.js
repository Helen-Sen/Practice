/*1.Используйте класс Person из практического занятия 7.1, добавив метод с названием fullname, который будет возвращать совокупное значение firstname и lastname.
2.Создайте значения для person1 и person2, используя фамилии и имена друзей.
3.Используя метод fullname внутри класса, верните полное имя одного или обоих человек.*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

let nata = new Person("Nata", "Sol");
let sveta = new Person("Sveta", "R");
console.log(nata.fullName());
console.log(sveta.fullName());