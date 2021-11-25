/*

Title: Highest Scoring Word
Source: CodeWars.com

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

// Solution:

function high(x) {
  let arr = x.split(" ");
  let wordScores = arr.map((el) => {
    let charZs = el.split("");
    let score = charZs.reduce((acc, val) => acc + (val.charCodeAt() - 96), 0);
    return score;
  });

  let b = Math.max(...wordScores);
  let f = wordScores.indexOf(b);
  return arr[f];
}
