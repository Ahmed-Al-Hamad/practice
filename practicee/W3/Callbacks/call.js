/* Write a function countWords that accepts a string and returns an object that 
has all unique words as keys and the number of times the word was found in the string as a value.

// Make sure to use the correct higher order function
const countWords = function (string) {
  // TODO: Your code here
};

countWords("hello hello world"); // => { "hello": 2, "world": 1 }
countWords("hello"); // => { "hello": 1 }
countWords(""); // => {} */


    
    function countWords(str) {

        var myObj = {};
         str.split(" ");
        var x = str.split(" ");
        console.log(x);
        var result = 0;
       for(var i=0; i<x.length-1;i++){
         var value = x.filter(function(value){
          return value == x[i]
          }).length
         var key = x[i];
         
        
         myObj[key] = value;
       }
       
        return myObj;
         
      }


/* Write a function averageGrade that accepts an array of student grades as values and 
returns the average grade and if the array is empty return "Please enter at least one grade".

// Make sure to use the correct higher order function
const averageGrade = function (grades) {
  // TODO: Your code here
};

averageGrade([100, 80, 95, 67, 74]); // => 83.2
averageGrade([100, 90, 80, 70]); // => 85
averageGrade([100, 90, 80, 70]); // => 85
averageGrade([]); // => "Please enter at least one grade" */

const averageGrade = function (grades) {
    // TODO: Your code here
    grades.reduce(function (accumulator, number, index) {
        return( accumulator + number)/grades.length;
      }); 
  };


  /* Write a function evenLengthOddIndex that accepts an array of strings and returns 
  a new array of only the even length words that are in an odd index.

const evenLengthOddIndex = function (strings) {
  // TODO: Your code here
};

evenLengthOddIndex(["word", "care", "car", "food", "cast", "cat"]); // => ["care", "food"]
evenLengthOddIndex(["word", "care", "food", "car", "cast", "cat"]); // => ["care"].
evenLengthOddIndex(["word", "cat", "food"]); // => [] */
 
const evenLengthOddIndex = function (strings) {
    // TODO: Your code here
    strings.filter(function (element, index) {
        
        return element.length %2===0;
      });
      
  };

  /* Write a function incrementByIndex that accepts and array of nested 
  arrays that hold numbers as values and returns an array were each element 
  of the nested arrays is incremented by the index of that nested array.

// Make sure to use the correct higher order functions
const incrementByIndex = function (array) {
  // TODO: Your code here
};

// the first nested array's values were incremented by 0 since it is the first index, second nested array was incremented by 1 and last one by 2
incrementByIndex([
  [1, 2, 3],
  [2, 7, 9],
  [10, 3, 44],
]); // => [[1, 2, 3], [3, 8, 10], [12, 5, 46]] */

const incrementByIndex = function (array) {
    // TODO: Your code here
    
  };


