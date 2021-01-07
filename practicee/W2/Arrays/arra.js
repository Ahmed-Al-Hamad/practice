/* Check out the following examples and solve the question

// split: is used to convert a string into an array and the values will be separated depending on the
// argument passed into the split method
const word = "Hello";
// if an empty string is passed as an argument then the string will be split on every letter
word.split(""); // => ["H", "e", "l", "l", "o"]
// if a string contains empty space then the string will be split on every empty space
const words = "This is a string that contains words";
words.split(" "); // => ["This", "is", "a", "string", "that", "contains", "words"]

// join: is used to converting an array into a string and the values will be separated depending on the
// argument passed into the join method
const names = ["John", "Doe"];
const fullName = names.join("-");
fullName; // => "John-Doe"

// reverse: is used to reverse the order of the array
const numbers = [1, 2, 3, 4];
numbers.reverse(); // => [4, 3, 2, 1]

// 1.write a function `reverseWords` that accepts a string argument and returns the same string if only
// one word was passed in, and if more than one is passed it will return a string of the words in a reverse order

const reverseWords = function(string){
    // TODO: Your code here
}

reverseWords("Hello"); // => "Hello"
reverseWords("Hello World"); // => "World Hello" */

//solv
const reverseWords = function(string){
    let arr=string.split(" ")
    let result=" "
    for(let i=0;i<arr.length;i++)
    {
        result+=" "+ arr[i].split("").reverse().join("");
    }
    return result;
}

/* 2.Write a function addToLast that accepts two arguments an array, 
value and returns an array with the value added to the end of the array while using unshift instead of push

// do not use `push` or array assignments, only `unshift`
const addToLast = function (array, value) {
  // TODO: Your code here
};

addToLast([1, 2, 3], 4); // => [1, 2, 3, 4]
addToLast([10, 6], 1); // => [10, 6, 1] */

const addToLast = function (array, value) {
    // TODO: Your code here
    return array.reverse().unshift(value).reverse();
  };


  /* Solve the following

// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
  // do not use array.length
  // TODO: Your code here
};

getLength([1, 2, 3, 4]); // => 4

// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value
const getFirstVal = function (array) {
  // do not use array[0]
  // TODO: Your code here
};

getFirstVal([1, 2, 3, 4]); // => 1 */

const getFirstVal = function (array) {
    // do not use array[0]
    // TODO: Your code here
    let nwArr= array.reverse();
    let val=nwArr[0]
    let originalArr=nwArr.reverse()
    return originalArr.indexOf(val)+1
  };


  /* Write a function updateOrCreate that accepts three arguments an array,
   value, index and returns an updated array, check the output for more information on the updated array

// the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, value, index) {
  // TODO: Your code here
};

updateOrCreate([10, 20, 30], 50, 1); // => [10, 50, 30]
updateOrCreate([10, 20, 30], 40, 3); // => [10, 20, 30, 40]
updateOrCreate([10, 20, 30], 100, 10); // => [10, 20, 30, empty * 7, 100] */

const updateOrCreate = function (array, value, index) {
    // TODO: Your code here
    for(let i=0;i<array.length;i++){
        if(array[i]==value){
           return array
        }
    }
    array[index]=value;
  };

/* Read about slice and indexOf and answer the following

//  Write a function `sliceArray` that accepts three arguments an ordered numeric `array` (unique numbers), `startVal`, `endVal`
// and returns an array starting at the `startVal` and ending at `endVal`

const sliceArray = function (array, startVal, endVal) {
  // TODO: Your code here
};
sliceArray([10, 20, 30, 40, 50, 60], 10, 60); // => [10, 20, 30, 40, 50, 60]
sliceArray([10, 20, 30, 40, 50, 60], 20, 40); // => [20, 30, 40]
sliceArray([10, 20, 30, 40, 50, 60], 20, 20); // => []
sliceArray([10, 20, 30, 40, 50, 60], 50, 20); // => [] */


const sliceArray = function (array, startVal, endVal) {
    // TODO: Your code here
    return array.slice(startVal,array.indexOf(endVal)+1)
  };