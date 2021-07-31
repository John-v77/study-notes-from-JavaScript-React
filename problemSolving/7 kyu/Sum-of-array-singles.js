/*

Title: Sum of array singles
Source: CodeWars.com

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15. Every other number occurs twice.

More examples in the test cases.
Good luck!
*/

// Solution:

function repeats(arr) {
  arr.sort((a, b) => a - b);

  let totalTwoNum = 0;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] !== arr[i + 1]) {
      totalTwoNum += arr[i];
    } else {
      i++;
    }
  }
  return totalTwoNum;
}
