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

/**
 * This function generates a staircase pattern of `#` symbols.
 * The staircase is right-aligned, with the number of rows determined by `n`.
 * Each row contains a mix of spaces and `#`, where the `#` increases from top to bottom.
 */
function staircase(n) {
  // Outer loop to iterate over each row of the staircase
  for (let i = 0; i < n; i++) {
      let symbol = ""; // Initialize an empty string for the current row

      // Inner loop to construct each row character by character
      for (let j = 0; j < n; j++) {
          // Add a `#` if the current column index meets the condition
          // Otherwise, add a space
          if (n - 1 - i < j + 1) {
              symbol += "#";
          } else {
              symbol += " "; 
          }
      }
      
      // Print the completed row
      console.log(symbol);
  }
}

/**
 * This function calculates the minimum and maximum sums that can be obtained
 * by summing four out of five integers in an array.
 * It returns a string with the two sums separated by a space.
 *
 * Example:
 * Input: [3, 1, 5, 7, 9]
 * Output: "16 24"
 */
function miniMaxSum(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
    if (min > arr[i]) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  
  const maxSum = sum - min;
  const minSum = sum - max;
  
  return minSum + " " + maxSum;
}

/**
 * This function calculates how many candles on a birthday cake are the tallest.
 * It iterates through the `candles` array to find the maximum height, and then
 * counts how many candles have that height.
 */
function birthdayCakeCandles(candles) {
  let max = -Infinity; // Initialize max to the lowest possible value.
  let counter = 0;     // Counter to keep track of the tallest candles.

  candles.forEach(candle => {
      if (candle > max) {
          max = candle;    // Update max when a taller candle is found.
          counter = 1;     // Reset counter since a new max is found.
      } else if (max === candle) {
          counter++;       // Increment counter for each occurrence of the max height.
      }
  });

  return counter;
}



