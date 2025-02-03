// 1. Create a class Product
// Private Properties:
// #name (string) → Product name
// #price (number) → Product price (must be greater than 0)
// Methods:
// Getter get name(): Returns the product name.
// Setter set name(newName): Updates the name (only if it's a non-empty string).
// Getter get price(): Returns the price.
// Setter set price(newPrice): Updates the price(only if it's greater than 0).

// 2. Create a class ShoppingCart
// Private Properties:
// #items (array) → Stores added products (Product objects).
// Methods:
// addProduct(product): Adds a Product to #items.
// removeProduct(productName): Removes a product by name (if it exists).
// get totalPrice(): Returns the total cost of all products in the cart.
// listProducts(): Prints all products in the cart.
// checkout(): Clears the cart and prints "Purchase complete! Total: $XX".

//     3. Bonus Challenge 🏆
// Add a method applyDiscount(code) in ShoppingCart.
// If code === "DISCOUNT10", apply a 10% discount to totalPrice.
// Add a quantity property in Product and modify ShoppingCart to track quantities.

class Product {
  #name;
  #price;

  constructor(name, price, quantity = 1) {
    this.#name = name;
    this.#price = price;
    this.quantity = quantity;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this.#name = newName;
    } else {
      console.log("Product name can't be empty.");
    }
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log("Price must be greater than 0.");
    }
  }
}

class ShoppingCart {
  #items = [];

  addProduct(product) {
    this.#items.push(product);
    console.log(`${product.name} added to the cart.`);
  }

  listProducts() {
    if (this.#items.length === 0) {
      console.log("Your shopping cart is empty.");
    } else {
      console.log("Products in your cart:");
      this.#items.forEach((product) => {
        console.log(`${product.name} - $${product.price} (x${product.quantity})`);
      });
    }
  }

  removeProduct(productName) {
    const initialLength = this.#items.length;
    this.#items = this.#items.filter((product) => product.name !== productName);

    if (this.#items.length < initialLength) {
      console.log(`${productName} removed from the cart.`);
    } else {
      console.log(`There is no ${productName} in your shopping cart.`);
    }
  }

  get totalPrice() {
    let totalPrice = 0;
    for (let product of this.#items) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  }

  checkout() {
    const finalPrice = this.totalPrice;
    this.#items = [];
    console.log(`Purchase complete! Total: ${finalPrice}.`);
  }

  applyDiscount(code) {
    if (code === "DISCOUNT10") {
      const discountedPrice = this.totalPrice * 0.9;
      console.log(`Discount applied! New total: ${discountedPrice}.`);
      return discountedPrice;
    } else {
      console.log("Invalid discount code.");
      return this.totalPrice;
    }
  }
}
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Mouse", 40);

const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.listProducts(); 
console.log(cart.totalPrice); // Expected: 1240

cart.applyDiscount("DISCOUNT10");
console.log(cart.totalPrice); // Expected: 1116

cart.checkout(); 
cart.listProducts(); // Expected: Cart is empty!
