// 1️⃣ Create a Vehicle class with:
// Private properties: #brand, #model, and #year.
// A constructor to set these values.
// Getters and setters for these properties.
// A startEngine() method that logs:
// The [brand] [model] engine has started.
// 2️⃣ Create a Car class that extends Vehicle with:
// A private property #fuelType (e.g., "Gasoline" or "Electric").
// A constructor that takes all Vehicle properties plus fuelType.
// A honk() method that logs:
// The [brand] [model] goes Beep Beep!
// 3️⃣ Create a Motorcycle class that extends Vehicle with:
// A private property #hasSidecar (boolean: true or false).
// A constructor that takes all Vehicle properties plus hasSidecar.
// A wheelie() method that logs:
// The [brand] [model] does a wheelie!
// But if it has a sidecar, log:
// The [brand] [model] can't do a wheelie because it has a sidecar.

class Vehicle {
  #brand;
  #model;
  #year;
  constructor(brand, model, year) {
    this.#brand = brand;
    this.#model = model;
    this.#year = year;
  }
  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    if (newBrand.length > 0) {
      this.#brand = newBrand;
      console.log("Your brand is updated succsessfully");
    } else {
      console.log("Your brand should be at least 1 characters long");
    }
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    if (newModel.length > 0) {
      this.#model = newModel;
      console.log("Your model is updated succsessfully");
    } else {
      console.log("Your model should be at least 1 characters long");
    }
  }

  get year() {
    return this.#year;
  }

  set year(newYear) {
    if (newYear.toString().length >= 2) {
      this.#year = newYear;
      console.log("Year is updated succsessfully");
    } else {
      console.log("Year should be at least 2 characters long");
    }
  }
  startEngine() {
    console.log(`The ${this.#brand} ${this.#model} engine has started `);
  }
}

class Car extends Vehicle {
  #fuelType;
  constructor(brand, model, year, fuelType) {
    super(brand, model, year);
    this.#fuelType = fuelType;
  }
  get fuelType() {
    return this.#fuelType;
  }

  set fuelType(newFuelType) {
    if (newFuelType.length > 0) {
      this.#fuelType = newFuelType;
      console.log("Fuel type updated successfully");
    } else {
      console.log("Fuel type cannot be empty.");
    }
  }

  honk() {
    console.log(`This ${this.brand} ${this.model} goes Beep Beep!`);
  }
}


class Motorcycle extends Vehicle {
  #hasSidecar;
  constructor(brand, model, year, hasSidecar) {
    super(brand, model, year);
    this.#hasSidecar = hasSidecar;
  }

  get hasSidecar() {
    return this.#hasSidecar;
    }
    
  wheelie() {
    if (!this.#hasSidecar) {
      console.log(`This ${this.brand} ${this.model} does a wheelie!`);
    } else {
      console.log(`This ${this.brand} ${this.model} can't do a wheelie because it has a sidecar.`);
    }
  }
}
const car1 = new Car("Toyota", "Corolla", 2022, "Gasoline");
console.log(car1.brand); // Toyota
car1.startEngine(); // "The Toyota Corolla engine has started."
car1.honk(); // "The Toyota Corolla goes Beep Beep!"

const bike1 = new Motorcycle("Harley-Davidson", "Sportster", 2020, false);
bike1.startEngine(); // "The Harley-Davidson Sportster engine has started."
bike1.wheelie(); // "The Harley-Davidson Sportster does a wheelie!"

const bike2 = new Motorcycle("Ural", "Gear Up", 2019, true);
bike2.wheelie(); // "The Ural Gear Up can't do a wheelie because it has a sidecar."
