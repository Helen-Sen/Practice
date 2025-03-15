// 1.Какое значение будет выведено на экран?
let val = 10;
function tester(val){
val += 10;
if(val < 100){
return tester(val);
}
return val;
}
tester(val); //20
console.log(tester(val)); //100
console.log(val); //10

// 2.Что выведет в консоль следующий код?
let testFunction = function(){
console.log("Hello");
}(); //Hello

// 3. Какой результат появится на экране?
(function () {
console.log("Welcome");
})(); //Welcome
(function () {
let firstName = "Laurence";
})();
let result = (function () {
let firstName = "Laurence";
return firstName;
})(); 
console.log(result); ////Laurence
(function (firstName) {
console.log("My Name is " + firstName);
})("Laurence"); // My Name is Laurence


// 4. Какое значение будет выведено на экран?
let test2 = (num) => num + 5;
console.log(test2(14)); //19


// 5. Какой результат получится после выполнения данного кода?
var addFive1 = function addFive1(num) {
return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14)); //16