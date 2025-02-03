// Create a Person class with a constructor that takes name and age. Then, use prototype to add new methods dynamically.
// Requirements:
// 1️⃣ Define a class Person with properties:
// name (string)
// age (number)
// 2️⃣ Create a method introduce() inside the class, which logs:
// "Hi, my name is {name} and I am {age} years old."
// 3️⃣ Using prototype, add:
// A method celebrateBirthday() that increases age by 1 and logs:
// "Happy Birthday! Now I am {age} years old."
// A property species = "Human" to all instances of Person.
// 4️⃣ Create a Person instance and test the new methods and property.
// adding another method via prototype, like greet(otherPerson).
// adding a new prototype method called compareAge(otherPerson). It should compare ages and print who is older or if they are the same age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

Person.prototype.celebrateBirthday = function () {
  this.age++;
  console.log(`Happy Birthday! Now I am ${this.age} years old.`);
};

Person.prototype.species = "Human";

Person.prototype.celebrateBirthday = function (otherPerson) {
  Person.prototype.greet = function (otherPerson) {
    console.log(`Hi, ${otherPerson.name}! My name is ${this.name}.`);
  };
};

Person.prototype.compareAge = function (otherPerson) {
  if (otherPerson.age === this.age) {
    console.log(`${otherPerson.name} and ${this.name} have the same age.`);
  } else if (otherPerson.age < this.age) {
    console.log(`${otherPerson.name} is younger than ${this.name}.`);
  } else {
    console.log(`${otherPerson.name} is older than ${this.name}.`);
  }
};


    
const alice = new Person("Alice", 25);
alice.introduce(); // Hi, my name is Alice and I am 25 years old.
alice.celebrateBirthday(); // Happy Birthday! Now I am 26 years old.
console.log(alice.species); // Human

const bob = new Person("Bob", 30);
alice.greet(bob); // Output: "Hi, Bob! My name is Alice."
bob.greet(alice); // Output: "Hi, Alice! My name is Bob."

alice.compareAge(bob);    // Output: "Bob is older than Alice."
bob.compareAge(alice);    // Output: "Alice is younger than Bob."

