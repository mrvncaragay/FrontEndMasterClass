// Objet litteral
const person = {}

person[0] = "solve"

//console.log(person['0'])

// Destructuring
const obj = {
  name: 'Rusty',
  room: 'kichen',
  weapon: 'candlestick'
}

const {room, location} = obj;

//console.log(location)

// Looping
const game = {
  suspects: [
    {
      name: 'Rusty',
      color: 'orange'
    },
    {
      name: 'Miss Scarlet',
      color: 'red'
    }
  ]
}

// return an element in the array
for(let item of game.suspects) {
  const {name, color}  = item;

  //console.log(name, color)
}

// return index
for(let index in game.suspects) {
  const {name, color}  = game.suspects[index];

  //console.log(name, color)
}

// For each
game.suspects.forEach(item => {
  const {name, color}  = item;

  //console.log(name, color)
})

// Destructure color
const [{color: orange}, {color: red}] = [
  {
    name: 'Rusty',
    color: 'orange'
  },
  {
    name: 'Miss Scarlet',
    color: 'red'
  }
];

//console.log(orange, red);

// Implement _.each
const _ = {};

_.each = (list, callback) => {
    for(let i = 0; i < list.length; i++) {
      callback(list[i], i, list)
    }
}

_.map = (list, callback) => {
  const result = [];

    _.each(list, function(item) {
      result.push(callback(item))
    })
    return result;
}

_.filter = (list, callback) => {
  const result = [];

  _.each(list, function(item){
    if(callback(item)){
      result.push(item)
    }
  });

  return result;
}

_.from = arr => {
  return Array.prototype.slice.call(arr)
}

function CreateSuspectObjects(name) {
  return {
    name,
    color: name.split(' ')[1],
    speak() { console.log(`my name is ${name}`) }
  }
}

function rightAges(age) {
  return age < 50 ? true : false;
}

const arr = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 
const age = [32, 60, 52, 12]; 
//console.log(_.map(arr, CreateSuspectObjects))
console.log(_.filter(age, rightAges))