// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var result = str.split('').reverse().join('');
  console.log(result)
 var checker = str;
if(str == result){
  return true;
}
else {
  return false;
}
}

console.log(palindrome('hi')) // false


// or solve it this way:

function paldindrom1(str){
return str.split('').every((char, i) => {
  return char === str[str.length -1 -1];
  })
}
