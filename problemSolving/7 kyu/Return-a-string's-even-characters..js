/*

Title: Return a string's even characters.
Source: CodeWars.com

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"

*/

// Solution:

function evenChars(string) {
  let arrStr = string.split("");
  let lenArr = arrStr.length;
  let newArr = [];

  if (lenArr <= 1 || lenArr > 100) {
    return "invalid string";
  } else {
    for (let i = 1; i < lenArr; i += 2) {
      newArr.push(arrStr[i]);
    }
  }
  return newArr;
}
