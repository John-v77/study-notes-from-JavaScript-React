/*

Title: Build Tower
Source: CodeWars.com

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;

*/

// Solution:

function towerBuilder(nFloors) {
    let res = []
    let floor
    
    for(let i=1; i<= nFloors; i++){
      floor =' '.repeat(nFloors-i)+'*'.repeat((i*2)-1)+' '.repeat(nFloors-i)
      res.push(floor)
    }
    return res
  }