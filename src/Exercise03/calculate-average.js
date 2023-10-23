const calculateAverage = (numbers) => {
  let sum = 0;
  const count = numbers.length;

  sum = numbers.reduce((sum, currentNumber) => sum + currentNumber)
  return sum / count;
};

console.log(calculateAverage([2,2,4,5,6,6])); // 4.166666666666667

