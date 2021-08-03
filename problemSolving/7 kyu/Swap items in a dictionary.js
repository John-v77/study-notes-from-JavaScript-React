/*

Title: Swap items in a dictionary
Source: CodeWars.com

In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}

Notes:
The dictionary given will only contain strings
The dictionary given will not be empty
You do not have to sort the items in the lists
*/

// Solution:

function switchDict(dic) {
    let newDic = {}
    
    for(let i in dic){
      if(newDic[dic[i]]  === undefined){
        newDic[dic[i]] = [i]
      }
      else{
        newDic[dic[i]].push(i)
      }
    }
    
  return newDic
  }

  //or

  const swapped = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))

  //or
  const switchDict = require("ramda").invert;