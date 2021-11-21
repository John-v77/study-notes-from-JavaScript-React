/*

Title: Basic Compression
Source: CodeWars.com

First, You will write a very basic compression algorithm

It gets a string:
string="aaaaaaaabaaaa"
And generates an array that sums all the repeating characters like so:
compressed=[[8,"a"],[1,"b"],[4,"a"]]
The compressed version is turned into a string:
compressed='[[8,"a"],[1,"b"],[4,"a"]]'

Finally,
If the compressed version is shorter than the original string, the function will return the compressed version.
Otherwise it will return the original string.

Example1:
string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
output1='[[26,"a"],[1,"b"],[18,"a"]]'

Example2:
string2="abcde"
output2="abcde"

After you created the compression algorithm, create a decompression algorithm:

It gets a string (output1, output2, etc.).
If the string is comrpessed, it returns the uncompressed version,
If it is uncompressed, it returns the original string unchanged.

//output1='[[26,"a"],[1,"b"],[18,"a"]]'
uncompress(output1)
//returns
"aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"

//output2="abcde"
uncompress(output2)
//returns
"abcde"
Note: The original string may not contain "[]" for obvious reasons.
*/

// My Solution:

var compress = function (str) {
  if (str.lenght == 0) return str;
  let compressString = "[";
  let len = str.length;
  let counter = 1;
  if (!len) return str;
  for (let i = 0; i < len; i++) {
    if (i == len - 1) {
      compressString += `[${counter},"${str[i]}"]]`;
    } else if (str[i] == str[i + 1]) {
      counter++;
    } else {
      compressString += `[${counter},"${str[i]}"],`;
      counter = 1;
    }
  }
  let result = len > compressString.length ? compressString : str;
  return result;
};

var decompress = function (c) {
  if (c.lenght == 0) return c;
  if (c[0] != "[") return c;

  let res = "";
  let list = JSON.parse(c);

  for (let i = 0; i < list.length; i++) {
    res += list[i][1].repeat(list[i][0]);
  }
  return res;
};

// more concise using REGEX

var compress = function (str) {
  let out = JSON.stringify(str.match(/(.)\1*/g).map((m) => [m.length, m[0]]));
  return out.length < str.length ? out : str;
};

var decompress = function (c) {
  if (c[0] !== "[") return c;
  return JSON.parse(c)
    .map((m) => m[1].repeat(m[0]))
    .join("");
};
