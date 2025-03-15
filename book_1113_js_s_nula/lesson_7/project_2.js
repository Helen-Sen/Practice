/*Создайте класс, который позволит рассчитать совокупную цену ряда товаров и взаимодействовать с ней, чтобы узнать общую стоимость различных заказов.
1.Создайте класс, содержащий цены двух пунктов прейскуранта в качестве объявлений частных полей.
2.Используйте конструктор в классе, чтобы получить значения аргументов (сколько покупается каждого товара).
3.Создайте метод для расчета и возврата общей стоимости в зависимости от того, сколько товаров выбирает пользователь.
4.Используйте геттер, чтобы получить значение, выводимое методом расчета.
5.Создайте два или три объекта с различными комбинациями пунктов прейскуранта и выведите общую стоимость на экран.*/

class Products {
  #priceNotebook;
  #priceMobile;
  constructor(priceNotebook, quantityNotebook, priceMobile, quantityMobile) {
    this.#priceNotebook = priceNotebook;
    this.quantityNotebook = quantityNotebook;
    this.#priceMobile = priceMobile;
    this.quantityMobile = quantityMobile;
  }
  calcTotalPrice() {
    return this.#priceNotebook * this.quantityNotebook + this.#priceMobile * this.quantityMobile;
  }

  get totalPrice() {
    return this.calcTotalPrice();
  }
}

let purchase1 = new Products(200, 2, 150, 1);
console.log(purchase1.totalPrice);

let purchase2 = new Products(400, 1, 3800, 10);
console.log(purchase2.totalPrice);
