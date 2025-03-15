/*Выведите в консоль результат работы decodeURIComponent() для строки How's%20it%20going%3F. Закодируйте строку How's it going?. Создайте веб-URL и закодируйте URI.
1.Добавьте строки в качестве переменных в код JavaScript.
2.Используйте encodeURIComponent() и decodeURIComponent() и выведите результаты их работы на экран.
3.Создайте веб-URI с параметрами http://www.basescripts.com?=Hello World";.
4.Закодируйте и выведите веб-URI на экран.*/

let line1 = "How's it going?";
let encodedLine1 = encodeURIComponent(line1);
console.log(`encodedLine1: ${encodedLine1}`);


let line2 = "How's%20it%20going%3F";
let decodedLine2 = decodeURIComponent(line2);
console.log(`decodedLine2: ${decodedLine2}`); 

let webAdress = "http://www.basescripts.com?=Hello World";
let encodedWebAdress = encodeURI(webAdress);
console.log(`encodedWebAdress: ${encodedWebAdress}`);

let webAdress2 = "http://www.basescripts.com?message=Hello World";
let encodedWebAdress2 = encodeURI(webAdress2);
console.log(`encodedWebAdress2: ${encodedWebAdress2}`);