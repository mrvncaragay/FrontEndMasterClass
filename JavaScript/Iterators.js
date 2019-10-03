// Iterator automate the accessing of each element so we can focus on what to do to each element and
// make it available to us in a smooth way.

// HOF resolve this issue by returning a new function w/ closure


// Generators

// function
// function createflow(array){
//   let i = 0;

//   return {
//     next: function() {
//       const element = array[i];
//       i++;
//       return element;
//     }
//   }
// }

// const returnNextElement = createflow([4, 5, 6]);
// console.log(returnNextElement.next())
// console.log(returnNextElement.next())
// console.log(returnNextElement.next())

// Generator
// function *createflow() {
//   const num = 10;
//   const newNum = yield num;
//   yield 5 + newNum;
//   yield 6;
// }

// const returnNextElement = createflow();
// console.log(returnNextElement.next())
// console.log(returnNextElement.next(2))
// console.log(returnNextElement.next())

// Async Generator answer create your own 'Async Away function'
// function doWhenDataReceived(value) {
//   returnNextElement.next(value)
// }

// function *createflow() {
//   // data received data argument from futureData.then()
//   const data = yield fectch('...')
//   console.log(data)
// }

// const returnNextElement = createflow();
// const futureData = returnNextElement.next();

// // When data is ready call doWhenDataReceived
// futureData.then(doWhenDataReceived)

// Async Generator
async function *createflow() {
  console.log('me first')
  const data = await fectch('...')
  console.log(data)
}

createflow();
console.log('Me second')