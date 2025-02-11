let terribleThingToDo = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo); //true

let betterOption = null;
console.log("Same null:", lastName === betterOption); //false

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef;
let unknown = null;
console.log("str", typeof str); //str string
console.log("nr", typeof nr); //nr number
console.log("bigNr", typeof bigNr); //bigNr bigint
console.log("bool", typeof bool); //bool boolean
console.log("sym", typeof sym); //sym symbol
console.log("undef", typeof undef); //undef undefined
console.log("unknown", typeof unknown); //unknown object - typeof null возвращает значение object, в то время как на самом деле null является примитивом, а не объектом


