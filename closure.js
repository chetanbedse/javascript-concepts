// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

/*
var sum = function (a) {
  console.log("Live Viewers" + a);
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};
var store = sum(2); // Calling function
console.log(store(5));
*/
/*
var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};
var store = sum(3, 4, 5);
console.log(store.getSumTwo());
console.log(store.getSumThree());

var store1 = sum(7, 8, 9);
console.log(store1.getSumTwo());
console.log(store1.getSumThree());
*/
/*
// Lexical scoping
function outer() {
  let myname = "Chetan"; // myname is a local variable created by outer()
  function inner() {
    // inner() is the inner function, that forms the closure
    console.log(myname); // use variable declared in the parent function outer()
  }
  inner();
}
outer();
console.log(myname); // gives error
*/

function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document
  .querySelector("#orange")
  .addEventListener("click", clickHandler("orange"));

document
  .querySelector("#green")
  .addEventListener("click", clickHandler("green"));
