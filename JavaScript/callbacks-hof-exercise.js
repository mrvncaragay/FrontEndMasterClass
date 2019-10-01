// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const result = [];

  array.forEach(num => result.push(callback(num)) )
  
  return result;
}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

// see for yourself if your forEach works!
//console.log(forEach([1, 2, 3], addTwo));

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const result = [];

  forEach(array, function(data){
    result.push(callback(data))
  })
  
  return result;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let result = initialValue

  for(let i = 0; i < array.length; i++) {
    result = callback(array[i], result)
  }

  return result;
}

//var add = function (a, b) { return a + b; };
//var nums = [4, 1, 3];
//console.log(reduce(nums, add, 0));

//Extension 3
function intersection(...arrays) {
  const hasNum = []
  const freq = {}
  
  for(let i = 0; i < arrays[0].length; i++){
    freq[arrays[0][i]] = (freq[arrays[0][i]] || 0) + 1;
  }

  for(let i = 1; i < arrays.length; i++){
    for(let j = 0; j < arrays[i].length; j++) {
      freq[arrays[i][j]] = (freq[arrays[i][j]] || 0) + 1;
    }
  }

  for(let key in freq) {
    if(freq[key] >= 3) {
      hasNum.push(+key)
    }
  }
  
  return hasNum;
}

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  const firstArr = arrays[0]
  const set = new Set([...firstArr])

  for(let i = 1; i < arrays.length; i++){
    for(let j = 0; j < arrays[i].length; j++) {
      set.add(arrays[i][j])
    }
  }

  return [...set]
}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

  // assuming that array1 and array2 has the same length 
  // and each element are synchrounous
  const obj = {}

  for(let i = 0; i < array1.length; i++) {
    const upperCasedStr = callback(array1[i]);
    if( upperCasedStr ===  array2[i]) obj[array1[i]] = array2[i]
  }

  return obj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

