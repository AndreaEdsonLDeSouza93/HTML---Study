/*
 * Exercise Explanation:
 * The task is to calculate the "Diagonal Difference" of a square matrix.
 * The "Diagonal Difference" is the absolute difference between:
 * 1. The sum of the primary diagonal (from top-left to bottom-right).
 * 2. The sum of the secondary diagonal (from top-right to bottom-left).
 *
 * const matrix = [
 * [2, 5, 2],
 * [4, -12, 5],
 * [2, 5, 7],
 * ];
 */
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

/**
 * The plusMinus function processes an array of integers to calculate the ratios
 * of positive, negative, and zero values within the array.
 * It outputs these ratios, formatted to six decimal places, to the console.
 * This algorithm provides a statistical breakdown of the distribution
 * of the array's elements, helping to analyze their composition.
 */
function plusMinus(arr) {
  let neg = 0; // Variable to count negative numbers
  let pos = 0; // Variable to count positive numbers
  let zero = 0; // Variable to count zero values
  let size = arr.length; // Stores the size of the array

  // Loop through the array to classify each element
  for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
      pos++; // Increment positive counter
    } else if (arr[i] < 0) {
      neg++; // Increment negative counter
    } else {
      zero++; // Increment zero counter
    }
  }

  // Calculate ratios and format them to six decimal places
  let calculation = [
    pos / size, // Ratio of positive numbers
    neg / size, // Ratio of negative numbers
    zero / size, // Ratio of zeros
  ].map((el) => el.toFixed(6)); // Format each ratio to six decimal places

  // Print each ratio to the console
  return calculation.forEach((ratio) => {
    console.log(ratio);
  });
}
