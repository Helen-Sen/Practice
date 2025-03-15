/*1. Создайте класс Person, включающий конструктор для firstname и lastname.
2. Создайте переменную и присвойте значение новому объекту Person, используя имя и фамилию вашего первого друга.
3. Теперь добавьте вторую переменную с именем второго друга, используя его имя и фамилию.
4. Выведите на экран обе записи с приветствием hello.*/

class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let nata = new Person("Nata", "Sol");
let sveta = new Person("Sveta", "R");
console.log("hello " + nata.firstName);
console.log("hello " + sveta.firstName);