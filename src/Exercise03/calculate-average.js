const calculateAverage = (numbers) => {

  return (
    numbers.reduce((sum, currentNumber) => sum + currentNumber, 0) /
    (numbers.length || 0)
  );
};

console.log(calculateAverage([3,5,8,3,5])); // 4.166666666666667

