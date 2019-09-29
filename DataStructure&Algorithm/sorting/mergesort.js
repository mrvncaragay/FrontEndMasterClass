function merge(left, right) {
 
  let i = j = 0;
  const mergeArr = [];

  while(i < left.length && j < right.length) {
    if(left[i] > right[j]) {
      mergeArr.push(right[j]);
      j++;
    } else {

      mergeArr.push(left[i]);
      i++;
    }
  }

  if(i < left.length) mergeArr.push(...left.slice(i));
  if(j < right.length) mergeArr.push(...right.slice(j));

  return mergeArr;
}

function mergesort(arr) {
  if(arr.length === 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const left = mergesort(arr.slice(0, midIndex)) ;
  const right = mergesort(arr.slice(midIndex))

  return merge(left, right);
}

console.log(mergesort([10, 5, 100, 3, 8, 11, 32, 65, 2, 6, 4, 7, 9, 1]))