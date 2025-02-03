// Requirements
// 1️⃣ Create a Animal class (parent class) with:
// A constructor that takes name and species.
// A method makeSound() that logs:
// [name] makes a sound.
// A method move() that logs:
// [name] moves around.
// 2️⃣ Create Mammal, Bird, and Fish classes that extend Animal:
// Each subclass should override the makeSound() and move() methods with unique behaviors:
// Mammal
// makeSound(): Logs
// [name] makes a mammal sound!
// move(): Logs
// [name] walks or runs.
// Bird
// makeSound(): Logs
// [name] chirps beautifully!
// move(): Logs
// [name] flies in the sky.
// Fish
// makeSound(): Logs
// [name] doesn't make much sound.
// move(): Logs
// [name] swims in the water.

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }

  move() {
    console.log(`${this.name} moves around.`);
  }
}

class Mammal extends Animal {
  makeSound() {
    console.log(`${this.name} makes a mammal sound!`);
  }

  move() {
    console.log(`${this.name} walks or runs.`);
  }
}

class Bird extends Animal {
  makeSound() {
    console.log(`${this.name} chirps beautifully!`);
  }

  move() {
    console.log(`${this.name} flies in the sky.`);
  }
}

class Fish extends Animal {
  makeSound() {
    console.log(`${this.name} doesn't make much sound.`);
  }

  move() {
    console.log(`${this.name} swims in the water.`);
  }
}

const tiger = new Mammal("Tiger", "Big Cat");
const parrot = new Bird("Parrot", "Tropical Bird");
const goldfish = new Fish("Goldfish", "Aquatic Fish");

const animals = [tiger, parrot, goldfish];

animals.forEach((animal) => {
  animal.makeSound();
  animal.move();
});
