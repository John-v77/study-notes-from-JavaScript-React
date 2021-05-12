/*

Title: Remove First and Last Character
Source: CodeWars.com

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

// Solution:

function removeChar(str) {
  let lenStr = str.length;

  if (lenStr < 2) {
    return "";
  }

  return str.substring(1, lenStr - 1);
}
