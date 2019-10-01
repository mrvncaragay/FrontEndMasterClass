// Currying 
// Can later be called with different arguments
const abc = function (a, b, c) {
  return [a, b, c];
}

//const curried = _.curry(abc);
//curried(1)(2)(3);
// => [1, 2, 3]

//curried(1)(2)(3);
// => [1, 2, 3]

// Composing
//const consider = ...
//const exclaim = ...

// const blame = _.compose(consider, exclaim);
// blam('you')

// Example
const compose = (fnc1, fnc2) => {
  return (str) => {
    const result = fnc2(str)
   return fnc1(result)
  }
}

// Closure
// when function is invoke
// it creates an execution context
// and the return function will still have access to outer parent local variables.

// Recipe
// 1) Create a parent function
// 2) define some variables in the parent's local scope
// 3) define a cuntion inside the parent function. we call this a child
// 4) return that function inside the parent function

// START PRACTICE HERE `JS The Hard Part`

// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


function createFunction() {
  return () => console.log('haller')
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const fnc1 = createFunction();
//fnc1();



function createFunctionPrinter(input) {
  return () => console.log(input)
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
//printSample();
var printHello = createFunctionPrinter('hello');
//printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter(); // counter 1
// willCounter(); // counter 2
// willCounter(); // counter 3

// jasCounter(); // counter 1
// willCounter(); // counter 4



function addByX(x) {
  return y => x + y;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
//console.log(addByTwo(1))

// now call addByTwo with an input of 2
//console.log(addByTwo(2))


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let called = false;
  let res = undefined;

    return num => {

      if(!called) {
        called = true;
        res = func(num);
        return res;
      } 

      return res;
    }
  }

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


function delay(func, wait) {

}