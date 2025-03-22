/*
 * Exercise Explanation:
 * The task is to calculate the "Diagonal Difference" of a square matrix.
 * The "Diagonal Difference" is the absolute difference between:
 * 1. The sum of the primary diagonal (from top-left to bottom-right).
 * 2. The sum of the secondary diagonal (from top-right to bottom-left).
 */

const matrix = [
  [2, 5, 2],
  [4, -12, 5],
  [2, 5, 7],
];

function diagonalDifference(matrix) {
  const size = matrix.length;
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < size; i++) {
    primaryDiagonalSum += matrix[i][i]; // Primary diagonal
    secondaryDiagonalSum += matrix[i][size - i - 1]; // Secondary diagonal
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}
