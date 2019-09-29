function times10(n) {
  return n * 10;
}

function memoize(cb) {
  const cache = {}

  return (n) => {
    if(cache[n]) {
      return cache[n];
    } else {
      cache[n] = cb(n);
      return cache[n];
    }
  }
}

const multBy10 = memoize(times10);

console.log(multBy10(9))
console.log(multBy10(9))