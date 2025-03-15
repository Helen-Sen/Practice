/*Создайте класс для контроля сотрудников компании.
1.Используйте имена, фамилии и количество отработанных лет в качестве значений в конструкторе.
2.Создайте записи о двух или более сотрудниках со значениями их имен, фамилий и количества лет, которые они проработали в компании. Добавьте этих людей в массив.
3.Создайте прототип, чтобы возвращать данные об имени и фамилии человека и о том, как долго он проработал в компании.
4.Повторите содержимое массива для вывода результатов на экран, добавив немного текста, чтобы на выходе получилось полноценное предложение.*/

class Employee {
  #firstName;
  #lastName;
  #years;
  constructor(firstName, lastName, years) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#years = years;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get years() {
    return this.#years;
  }
}

let nata = new Employee("Nata", "Sol", 5);
let sveta = new Employee("Sveta", "R", 10);
let personal = [nata, sveta];

Employee.prototype.getInfo = function () {
  return `${this.firstName} ${this.lastName} has worked ${this.years} years`;
};

for (const person of personal) {
  console.log(person.getInfo());
}
