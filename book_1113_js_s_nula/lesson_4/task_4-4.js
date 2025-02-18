/*// случайное число от 0 до 1
let randomNumber = Math.random();
// умножаем на 10, чтобы получить число от 0 до 10
randomNumber = randomNumber * 10;
// удаляем значки после десятичной запятой, чтобы получить целое число
RandomNumber = Math.floor(randomNumber);
В этом упражнении мы создадим магический шар судьбы.
1. Начнем с объявления переменной, которой присваивается случайное значение путем генерации случайного числа от 0 до 5 для шести возможных результатов. 
Вы можете увеличить это число по мере добавления новых результатов.
2. Создаем окно запроса, которое получает строковое значение, введенное пользователем, — его вы можете повторить в окончательном выводе.
3. Прописываем в switch шесть возможных ответов на вопрос пользователя, каждому из которых будет присвоено свое значение из генератора случайных чисел.
4. Создаем переменную для хранения конечного ответа — сообщения, выдаваемого в ответ на запрос пользователя. 
Вы можете давать разные строковые значения для каждого случая, присваивая новые значения в зависимости от величины случайной цифры.
5. Выводим вопрос пользователя и случайно выбранный ответ на экран, как только пользователь ввел какой-то текст в окне запроса.*/

let randomNumber = Math.floor(Math.random() * 7);
console.log(randomNumber);

switch (randomNumber) {
  case 0:
    console.log("Your happy day is Monday");
    break;
  case 1:
    console.log("Your happy day is Tuesday");
    break;
  case 2:
    console.log("Your happy day is Wednesday");
    break;
  case 3:
    console.log("Your happy day is Thursday");
    break;
  case 4:
    console.log("Your happy day is Friday");
    break;
  case 5:
    console.log("Your happy day is Saturday");
    break;
  case 6:
    console.log("Your happy day is Sunday");
    break;
}