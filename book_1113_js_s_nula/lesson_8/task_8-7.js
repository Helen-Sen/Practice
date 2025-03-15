/*Выведите на экран дату с указанием полного названия месяца. Преобразуя в массивы или из них, помните, что они начинаются с нуля.
1.Задайте объект, который может быть любой датой в будущем или прошлом. Выведите дату в консоль, чтобы посмотреть, как выглядит обычный вывод для объекта date.
2.Задайте массив, включающий названия всех месяцев года. Храните их в порядке следования, чтобы они соответствовали выводимой дате месяца.
3.Получите значение дня из объекта date, используя getDate().
4.Получите значение года из объекта date, используя getFullYear().
5.Получите значение месяца из объекта date, используя getMonth().
6.Создайте переменную для хранения даты объекта date и выведите месяц, используя его номер в качестве индекса для имени месяца из массива. Из-за того, что массивы начинаются с нуля, а месяц возвращает значение в диапазоне от 1 до 12, из результата необходимо вычесть единицу.
7.Выведите результаты на экран.*/

let currentDate = new Date();
console.log(currentDate);

let months = ["jan", "feb", "march", "apr", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];

let date = currentDate.getDate();
console.log(date);

let fullYear = currentDate.getFullYear();
console.log(fullYear);

let currentMonth1 = currentDate.getMonth();
console.log(currentMonth1);

let currentMonth2 = months[currentMonth1];
console.log(currentMonth2);

console.log(`${date} ${currentMonth2} ${fullYear}`);