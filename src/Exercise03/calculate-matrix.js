function calculateMatrixSum(matrix) {
  return matrix
    .toString()
    .split(",")
    .reduce((accumulator, row) => accumulator + +row, 0);
}

console.log(
  calculateMatrixSum([
    [1, 4, 5],
    [2, 3, 5],
  ])
);
