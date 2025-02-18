/*В этом упражнении мы поэкспериментируем с циклическим перебором объектов и внутренних массивов.
1.Создайте простой объект, содержащий три элемента.
2.Используя цикл for in, получите имена и значения свойств объекта и выведите их на экран.
3.Создайте массив, содержащий те же самые три значения. Используйте цикл for или for in для вывода значений из массива на экран.*/

let song = {
    name: "Romantico",
    author: "G.Moradi",
    album: "The best song"
}

for (let name in song) {
    console.log(`name: ${name}, value: ${song[name]}`);
}

let songArr = ["Romantico", "G.Moradi", "The best song"];
for (let value of songArr) {
    console.log(value);
}