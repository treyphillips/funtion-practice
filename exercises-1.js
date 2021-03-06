
/**
 *
 */

// ---------------------
// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(x, y) {
    "use strict";
    //...
    if (x > y) {
      console.log(x);
    } else {
      console.log(y);
    }
}
max(4, 5);
// ---------------------
// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z) {
    "use strict";
    //...
    console.log(Math.max(x, y, z));
}
maxOfThree(38, 4, 202);
// ---------------------
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    "use strict";
    //...
    var vowel = ["a", "e", "i", "o", "u"];

    for(var i=0; i<vowel.length; i++) {
    if (char === vowel[i]) {
      console.log("true");
    }

  } console.log("false");
}

isVowel('b');
// ---------------------
// 4. Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function consonant(phrase){
    "use strict";
    //...


var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var isConsonant = false;

for ( var i = 0; i < consonant.length; i++) {
  if (i === consonant[i]) {
    isConsonant = true;
  }
  return(consonant + "o");
}
}


function translate(string) {
  "use strict";

  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (consonant(string[i])) {
      newString += string[i] + "o";
    } else {
      newString += string[i];
    }
  }
  console.log('The translation is: ' + '"' + newString + '"');
}

translate('this is fun');
// ---------------------
// 5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

var sum = function(array){
  "use strict";
  var length = array.length;
  var total = 0;

  for (var i = 0; i < length; i++) {
    total += array[i];
    }
    return total;
  };


function multiply(array) {
  "use strict";
    var length = array.length;
    var total= 1;

    for (var i = 0; i < length;  i++) {
      total *= array[i];
    }
    return total;
  }

console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));

// ---------------------
// 6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
  "use strict";
  return (string === '') ? '' : reverse(string.substr(1)) + string.charAt(0);
}

console.log(reverse('Kazak the space hound'));
// ---------------------
// 7. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var wordArray = ['gringo', 'tangerines', 'patagonia', 'blue'];

var findLongestWord = function(array) {
  var elements = array.length;
  var longest = 0;
  for (i = 0; i < elements; i++) {
    if (array[i].length > longest)
      longest = array[i].length;
    }
    return longest;
  }
  console.log(findLongestWord(wordArray));
// ---------------------
// 8. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, int){
    "use strict";
    var int = 6;
    var length = wordArray.length;
    var longerWords = [];
    for (var i = 0; i < length; i++) {
      if (wordArray[i].length > int) {
        longerWords[longerWords.length] = wordArray[i];
      }
    }
      return longerWords;

}
console.log(filterLongWords(wordArray));
// ---------------------
// 9. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var list = {};
    var length = string.length;
    for (var i = 0; i < length; i++) {
      if (string.charAt(i) in list)
        list[string.charAt(i)] += +1;
        else
          list[string.charAt(i)] = 1;
        }
        return list;
      }
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
