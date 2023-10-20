const calculateFactorial = (n) => {
  return Array.from({ length: n - 1 }, (_, i) => i + 2)
    .reduce(
      (prod, currentNumber) => prod * currentNumber
    , 1);
}
