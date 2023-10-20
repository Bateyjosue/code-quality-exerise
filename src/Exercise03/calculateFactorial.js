const calculateFactorial = (n) => {
  return Array.from({ length: n - 1 }, (_, i) => i + 2)
    .reduce(
      (prod, currentNumber) => prod * currentNumber
    , 1);
}

const calculateFactorialRecursion = (n) => {
  // base condition
  if(n < 2) return 1
  /*
    call itself until the base is met
  */
  return n * calculateFactorialRecursion(n - 1)
};

console.log(calculateFactorialRecursion(5));