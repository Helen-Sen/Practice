/*Напишите фрагмент кода для вычисления гипотенузы треугольника с использованием теоремы Пифагора при заданных значениях двух других сторон.*/
let a = Number(prompt("Enter value for leg a ="));
let b = Number(prompt("Enter value for leg b ="));

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  alert("Please enter valid positive numbers for both legs.");
} else {
    // let c = Math.sqrt(a ** 2 + b ** 2);
    let c = (a ** 2 + b ** 2)**0.5;
    //   alert(`Hypotenuse = ${c}`);
    document.write(`Hypotenuse = ${c}`);
}

/*author code
let a = window.prompt("Value 1?");
let b = window.prompt("Value 2?");
a = Number(a);
b = Number(b);
let hypotenuseVal = (a * a + b * b) ** 0.5;
console.log(hypotenuseVal); */
