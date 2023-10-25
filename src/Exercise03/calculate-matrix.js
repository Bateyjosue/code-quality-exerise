function calculateMatrixSum(matrix) {
  let sum = 0;
  for (const i = 0; i < matrix.length; i++)
    for (const j = 0; j < matrix[i].length; j++) sum += matrix[i][j];
  return sum;
}

console.log(calculateMatrixSum([[1,4,5], [2,3,5]]));
