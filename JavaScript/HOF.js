// Translate into ES6
// var increment = function(n){ return n + 1; };
// var square = function(n){ return n*n; };
// var doMathSoIDontHaveTo = function(n, func){ return func(n); };
// doMathSoIDontHaveTo(5, square);
// doMathSoIDontHaveTo(4, increment);

const increment = n => n + 1;
const square = n => n * n;

const doMathSoIDontHaveTo = (n, func) => func(n);
//console.log(doMathSoIDontHaveTo(5, square))
//console.log(doMathSoIDontHaveTo(4, increment))

// Passing arguments as function with an multiple arguments using rest operator
  // const ifElse = (condition, isTrue, isFalse, ...args) => {
  //   console.log(args) //['HI', 'BYE', 'HOLA']
  //   return condition ? isTrue(...args) : isFalse(...args);
  //   //isTrue('HI', 'BYE', 'HOLA') === ...args
  // };
  // ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');

// Implement Reduce
const _ = {}

_.reduce = (list, iteratee, initialValue) => {
  let startingVal = initialValue;
  
  if(Array.isArray(list)) {

    for(let i = 0; i < list.length; i++) {
      startingVal = iteratee(startingVal, list[i])
    }

  } else {

    for(let key in list) {
      startingVal = iteratee(startingVal, list[key], key);
    }
  }

  return startingVal;
}

function add(sum, n) {
  return sum + n;
}

//console.log(_.reduce([1, 2, 10], add, 0))
//console.log(_.reduce({'a': 1, 'b': 2, 'c': 1}, function(result, value, key){
//   (result[value] || (result[value] = [])).push(key)
//   return result;
// }, {}))

// Exercise 2
const newDevelopment = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': true},
          {'billiard room': false},
          {library: true}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': true},
          {'billiard room': false},
          {library: false}
      ]
  }
];

//Figure out which room no one claims to be the night of the murder from this data set

//newDevelopment

const whoIsInTheRoom = (arr, cb) => { //isIn boolean true if in the room, false not in the room 
  return arr.map(person => {
    return {
      name: person.name,
      rooms: cb(person.rooms)  
    }
  })
}

const result = whoIsInTheRoom(newDevelopment, function(rooms) {
  const arr = []

  rooms.forEach(room => {
    for(let key in room) {
      if(room[key] === false) {
        arr.push(room)
      }
    }
  })

  return arr;
})

console.log(result)