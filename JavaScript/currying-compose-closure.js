// Currying 
// Can later be called with different arguments
const abc = function (a, b, c) {
  return [a, b, c];
}

const curried = _.curry(abc);
curried(1)(2)(3);
// => [1, 2, 3]

curried(1)(2)(3);
// => [1, 2, 3]

// Composing
//const consider = ...
//const exclaim = ...

// const blame = _.compose(consider, exclaim);
// blam('you')

// Closure
// when function is invoke
// it creates an execution context
// and the return function will still have access to outer parent local variables.