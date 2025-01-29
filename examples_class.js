// Task 1
// 1.Создайте класс Person, включающий конструктор для firstname и lastname.
// 2.Создайте переменную и присвойте значение новому объекту Person, используя имя и фамилию вашего первого друга.
// 3.Теперь добавьте вторую переменную с именем второго друга, используя его имя и фамилию.
// 4.Выведите на экран обе записи с приветствием hello.

// Task 2
// Получите полное имя своего друга.
// 1.Используйте класс Person из практического занятия 7.1, добавив метод с названием fullname, который будет возвращать совокупное значение firstname и lastname.
// 2.Создайте значения для person1 и person2, используя фамилии и имена друзей.
// 3.Используя метод fullname внутри класса, верните полное имя одного или обоих человек.

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullname() {
    // console.log("My name is", this.firstname, this.lastname);
    return `${this.firstname} ${this.lastname}`;
  }
}

let ilya = new Person("Ilya", "Miflig");
let nata = new Person("Natali", "Soldatova");

console.log("Hello,", ilya.firstname, ilya.lastname);
console.log("Hello,", nata.firstname, nata.lastname);

let person1 = new Person("Ilya", "Miflig");
let person2 = new Person("Natali", "Soldatova");

console.log("My name is", person1.fullname());
console.log(`My name is ${person2.fullname()} and I like it!`);

// add properties, get, set
class PersonSecret {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

let ilyaSecret = new PersonSecret("Ilya", "Miflig");
let nataSecret = new PersonSecret("Natali", "Soldatova");

ilyaSecret.firstname = "Ilya Danilovich";
console.log(`my full name is ${ilyaSecret.firstname}`);




