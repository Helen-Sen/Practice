/*Создайте рекурсивную функцию, которая считает до 10. Вызовите функцию с разными начальными значениями в качестве аргументов, которые передаются в функцию. Функция должна выполняться до тех пор, пока значение не станет больше 10.*/

function recursiveCount(num) {
  if (num > 10) {
    console.log("This function only works for numbers less than 11");
    return;
  }

  console.log(`num = ${num}`);
  recursiveCount(num + 1);
}

recursiveCount(5);
recursiveCount(10);
recursiveCount(15);


