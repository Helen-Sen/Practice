// (function () {
//   console.log("IIFE!");
// })();

// (() => {
//   console.log("run right away");
// })();

// let counter = (function() {
//     let count = 0;
//     return {
//         increment: function() { return `our counter is ${++count}`; },
//         decrement: function() { return --count; }
//     };
// })();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1


(async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
  console.log(data);
})();