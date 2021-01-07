/* Write a function factorial that accepts a number and returns the factorial of that number.

const factorial = function (number) {
  // TODO: Your code here
};

factorial(5); // 1 * 2 * 3 * 4 * 5 => 120
factorial(3); // 1 * 2 * 3 => 6
factorial(1); // => 1
factorial(0); // => 1 */


function factorial(x) {
    if (x === 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
const num = 3;
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}


/* Write a function getLength that accepts a string, and returns the length of the string.

const getLength = function (string) {
  // TODO: Your code here
};

getLength("hello"); // => 5
getLength("John"); // => 4
getLength(""); // => 0 */

  const getLength = function (string) {
    // TODO: Your code here
    let count=0
    if(TimeRanges.length===0){
        return 0
    }
    else getLength(string.pop(),count++)
    return count
  };

/* Write a function countCharacter that accepts a string, and a character and returns the number of times the character was repeated, using recursion.

const countCharacter = function (string, character) {
  // TODO: Your code here
};

countCharacter("hello", "l"); // => 2
countCharacter("hello", "e"); // => 1
countCharacter("hello", "z"); // => 0 */

  function repeater(char) {

    let newStr = ''; 
  
    if (newStr.length === 5){
      return newStr; 
    }
  
    else {
      newStr += char; 
    }
  
    return repeater(char); 
  }

  