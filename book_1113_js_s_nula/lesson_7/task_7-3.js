/*Напишите класс, содержащий свойства для разных животных — в том числе звуки, издаваемые каждым видом — и создайте два (или более) объекта.
1.Создайте метод, который выводит на экран название этого животного и звук, который оно издает.
2.Добавьте прототип с другим действием для животного.
3.Выведите весь объект животного на экран.*/

class Animal {
  constructor(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }
  makeSound(sound) {
    console.log(`${this.name} the ${this.breed} says ${sound}`);
  }
}

Animal.prototype.doing = function (move) {
  console.log(`${this.breed} is ${move}`);
};

let cat = new Animal("Musya", "cat", 3);
cat.makeSound("meow");
cat.doing("jumping");

console.log(cat);