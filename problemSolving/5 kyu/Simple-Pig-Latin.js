/*

Title: Simple Pig Latin
Source: CodeWars.com

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// Solution:

//using Regex
function pigIt(str) {
  return str.replace(/\w+/g, (word) => {
    return word.slice(1) + word[0] + "ay";
  });
}
