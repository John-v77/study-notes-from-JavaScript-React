/*

Title: Decipher this!
Source: CodeWars.com

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

// Solution:
function decipherThis(str) {

    let newArr = str.split(' ')
    let indexLetter
    let firstLetter
    let res = ''
  
    
    const findIndexOfFirstLetter=(str1)=>{
      const regex = /[a-zA-Z]/g;
      const firstLetter = str1.match(regex) ?  str1.match(regex)[0] : null 
      if(!firstLetter) return null
      return (str1.indexOf(firstLetter))
    }
    
    const convertAsciiToLetter=(string2)=>{
      let numCast = parseInt(string2)
      let res = String.fromCharCode(numCast)
      return res
    }
    
    const decryptSubString=(firstLetter, string)=>{
      
      let lenSubstring =  string.length
      
      switch(lenSubstring){
          case 1: 
            return firstLetter;
          case 2: return string;
          case 3: return firstLetter + string[2] + string[1];
          default: return firstLetter + string.slice(-1) + string.slice(2,-1) + string.slice(1,2)
      }
    }
    
    for(let i of newArr){
      
      let newString =''
      
      indexLetter = findIndexOfFirstLetter(i)
      // get the first letter
      if(indexLetter !== null){  
        firstLetter =convertAsciiToLetter(i.slice(0,indexLetter))
        newString = firstLetter + i.slice(indexLetter)
      }else {
        firstLetter = convertAsciiToLetter(i)
        newString = firstLetter
      }
  
      res += decryptSubString(firstLetter, newString) + ' '
    }
    
    return res.slice(0, -1)
  }; 


  // or ---------------------------------------------------------------------------


  const swap = str => {
    return str.length >= 2
      ? str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)
      : str;
  };
  
  const translateWord = word => {
    const initial = word.match(/^\d+/)[0];
    const rest = word.replace(/^\d+/, '');
  
    return `${String.fromCharCode(initial)}${swap(rest)}`;
  };
  
  const decipherThis = str => {
    return str.split(' ')
      .map(word => translateWord(word))
      .join(' ');
  };