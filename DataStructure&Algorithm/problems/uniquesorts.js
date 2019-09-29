function uniquesort(arr) {
  const freq = {}
  const result = []

  for(let i = 0; i < arr.length; i++) {
    if(!freq[arr[i]]) {
      freq[arr[i]] = arr[i];
      result.push(arr[i]);
    }
  }

  return result.sort((a, b) => a - b)
}

console.log(uniquesort([4, 2, 2, 3, 2, 2, 2]))