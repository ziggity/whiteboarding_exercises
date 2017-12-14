// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
var result = '';

for(i=str.length -1; i<=str.length; i-- ){
  result =  result + str[i];
}
return result;
}

console.log(reverse("apple"));
module.exports = reverse;
