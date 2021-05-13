/*

Title: Sum of positive
Source: CodeWars.com

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

// Solution:

function positiveSum(arr) {
  let lenArr = arr.length;

  if (lenArr === 0) {
    return 0;
  }

  let totalSum = 0;
  for (let i = 0; i < lenArr; i++) {
    if (arr[i] > 0) {
      totalSum += arr[i];
    }
  }
  return totalSum;
}
