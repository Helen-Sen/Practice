// Example_1
class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("moving at", this.currentSpeed);
  }
  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
  doWheelie() {
    console.log("Driving on one wheel!");
  }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

console.log("----------------------------------------------------------------------------------");

// Example_2
class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
  print() {
    console.log(`Title: ${this.title} By: ${this.author} ${this.pubDate}`);
  }
}

class Book extends Publication {
  constructor(bookDetails) {
    super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }
  print() {
    super.print();
    console.log(`Publisher: ${this.publisher} ISBN: ${this.ISBN}`);
  }
}
class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }
  print() {
    super.print();
    console.log(this.URL);
  }
}

var YDKJS = new Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789",
});
YDKJS.print();

var forAgainstLet = new BlogPost("For and against let", "Kyle Simpson", "October 27, 2014", "https://davidwalsh.name/for-and-against-let");
forAgainstLet.print();

console.log("----------------------------------------------------------------------------------");

// Создай класс Animal, который будет иметь свойства и методы, а затем создай два класса-наследника с дополнительными уникальными свойствами.
// Требования:
// Создай класс Animal

// Свойства:
// name (имя животного)
// age (возраст животного)
// Метод:
// speak() — выводит сообщение "Животное издает звук"
// Создай два класса-наследника

// Dog:
// Дополнительное свойство: breed (порода собаки)
// Переопредели метод speak(), чтобы он выводил "Собака лает"
// Cat:
// Дополнительное свойство: color (цвет шерсти)
// Переопредели метод speak(), чтобы он выводил "Кошка мяукает"
// Создай объекты классов Dog и Cat, задай им свойства и вызови метод speak()

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log("Животное издает звук");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  speak() {
    console.log("Собака лает");
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  speak() {
    console.log("Кошка мяукает");
  }
}

const dog = new Dog("Шарик", 3, "Лабрадор");
dog.speak();

const cat = new Cat("Мурка", 2, "Черный");
cat.speak();

console.log("----------------------------------------------------------------------------------");

// Task: Create a User class with private security properties and access methods
// Requirements:
// The class should have the following private properties:
// #password (string)
// #email (string)
// The class should have a constructor to set these properties when creating an object.
// Implement getter methods to access email, but not password directly.
// Implement a setter method to update the password, but only if the new password is at least 6 characters long.
// Create a subclass called AdminUser that extends User and adds an extra property:
// adminLevel (number, accessible normally)
// Test your class by:
// Creating a User instance and trying to access/change properties.
// Creating an AdminUser instance and checking if it works correctly.

class User {
  #email;
  #password;
  constructor(email, password) {
    this.#password = password;
    this.#email = email;
    this.adminLevel = 0;
  }
  get email() {
    return this.#email;
  }
  set password(newPassword) {
    if (newPassword.length >= 6) {
      this.#password = newPassword;
      console.log("Your password is updated succsessfully");
    } else {
      console.log("Your password should be at least 6 characters long");
    }
  }

  getPassword(user) {
    console.log(`Admin level = ${this.adminLevel}`);
    if (this.adminLevel > 0) {
      console.log(`User password = ${user.#password}`);
      return user.#password;
    } else {
      console.log("You don't have permission.");
    }
  }
}

class AdminUser extends User {
  constructor(email, password, adminLevel) {
    super(email, password);
    this.adminLevel = adminLevel;
  }  
}

const user = new User("example@email.com", "securePass123");
console.log(user.email);
console.log(user.getPassword(user));

user.password = "123";
user.password = "newUserPass";

const admin = new AdminUser("admin@email.com", "adminPass", 3);
console.log(admin.adminLevel);
console.log(admin.email);
admin.password = "12345";
admin.password = "newAdminPass";
console.log(admin.getPassword(user));
console.log(admin.getPassword(admin));
