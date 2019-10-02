// // Main
// undefined
// string
// number
// boolean
// object
// symbol

// // Maybe 
// undeclared
// null
// function
// array
// bigint (released 2019)

// typeof returns a STRING!!!
// Object.is is like quadruple ====

console.log({}.toString())

console.log(1 < '2')

function sayName() {
  {
    let age = 12;
  }

  console.log(age) // not defined
}
//sayName()

// Hoisting
// console.log(skill) // undefined
// skill = 'c++'
// console.log(skill) // c++
// var skill;
