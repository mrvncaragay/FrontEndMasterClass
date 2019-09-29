function insertionsort(arr) {
 
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i]; 
    let j = i - 1; // 0 initial

    while(arr[j] > current && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionsort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]))