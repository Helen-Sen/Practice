/*Создайте массив для хранения перечня товаров магазина.
Создайте три элемента, каждый из которых имеет свойства имени, модели, стоимости и количества.
Добавьте все три объекта в основной массив с помощью соответствующего метода, а затем выведите получившийся массив на экран.
Получите доступ к значению количества вашего третьего товара и зафиксируйте его в консоли. 
Поэкспериментируйте, добавляя новые элементы и получая доступ к большему числу элементов в вашей структуре данных.*/

let catalog = [];
let kettle = {
    name: "Bosh",
    model: "electro",
    price: 50,
    quantity: 3
};

let pan = {
  name: "Tefal",
  model: "ultra",
  price: 35,
  quantity: 2,
};

let thermos = {
  name: "Ikea",
  model: "modern",
  price: 20,
  quantity: 5,
};
catalog.push(kettle, pan, thermos);

console.log(catalog);
let qntThermos = catalog[2].quantity;
console.log(qntThermos);