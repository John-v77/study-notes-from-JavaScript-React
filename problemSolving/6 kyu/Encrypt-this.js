/*

Title: Encrypt this!
Source: CodeWars.com

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// Solution:

var encryptThis = function (text) {
  // Implement me! :)
  let arrString = text.split(" ");

  let res = arrString.map((el) => {
    let len = el.length;
    if (len == 0) return null;
    if (len == 1) return `${el.charCodeAt(0)}`;
    if (len == 2) return el.charCodeAt(0) + el.slice(-1);
    return el.charCodeAt(0) + el.slice(-1) + el.slice(2, -1) + el.slice(1, 2);
  });

  return `${res.join(" ")}`;
};
