/*

Title: Even or Odd - Which is Greater?
Source: CodeWars.com

Given a string of digits confirm whether the sum of all the individual even digits are greater than 
the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"

*/

// Solution:

function evenOrOdd(str) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < str.length; i++) {
    let item = parseInt(str[i]);
    if (item % 2 === 0) {
      sumEven += item;
    } else {
      sumOdd += item;
    }
  }

  if (sumEven > sumOdd) {
    return "Even is greater than Odd";
  } else if (sumEven < sumOdd) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
}
