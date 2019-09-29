

function quicksort(arr) {

  if(arr.length <= 1) return arr; 

  // last element
  const pivot = arr[0];
  const left = [];
  const right = [];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([10, 5, 100, 3, 8, 11, 32, 65, 2, 6, 4, 7, 9, 1]))