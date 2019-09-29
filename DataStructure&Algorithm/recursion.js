function factorial(n) {
  if(n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(10) === 3628800)
console.log(factorial(1) === 1)