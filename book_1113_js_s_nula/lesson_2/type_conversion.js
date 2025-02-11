let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr); //6 string

let str1ToNr = "12";
str1ToNr = Number(str1ToNr);
console.log(str1ToNr, typeof str1ToNr); //12 number

let str2ToNr = "";
str2ToNr = Number(str2ToNr);
console.log("empty string", str2ToNr, typeof str2ToNr); //empty string 0 number

let str3ToNr = "hello";
str3ToNr = Number(str3ToNr);
console.log(str3ToNr, typeof str3ToNr); //NaN number

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr); //null 0 number

console.log("----------------------------------")

/*Boolean() преобразует переменную в тип Boolean. Данный метод будет работать для всего, кроме null, undefined, 0 (число), пустой строки и NaN.*/

let str1ToBool = "any string will return true";
str1ToBool = Boolean(str1ToBool);
console.log(str1ToBool, typeof str1ToBool); //true boolean

let str2ToBool = "";
str2ToBool = Boolean(str2ToBool);
console.log(str2ToBool, typeof str2ToBool); //false boolean

let nullToBool = null;
nullToBool = Boolean(nullToBool);
console.log(nullToBool, typeof nullToBool); //false boolean

let undToBool;
undToBool = Boolean(undToBool);
console.log(undToBool, typeof undToBool); //false boolean

let numer0ToBool = 0;
numer0ToBool = Boolean(numer0ToBool);
console.log(numer0ToBool, typeof numer0ToBool); //false boolean

let nanToBool = NaN;
nanToBool = Boolean(nanToBool);
console.log(nanToBool, typeof nanToBool); //false boolean


