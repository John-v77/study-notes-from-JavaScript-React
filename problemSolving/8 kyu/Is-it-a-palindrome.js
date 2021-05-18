/*

Title: Is it a palindrome?
Source: CodeWars.com

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

// Solution:

function isPalindrome(x) {
  const string = x.toLowerCase();
  return string === string.split("").reverse().join("");
}
