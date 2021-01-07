/* 1.Figure out the syntax errors in the following functions, and fix them

const myFunction = function parameter) {}
const my Second Function = function (parameter) {}
const function = function (parameter) {}
const functionName = function (paramOne paramTwo) {} */
 //solve Q1
const myFunction = function (parameter) {}
const mySecondFunction = function (parameter) {}
const Function = function (parameter) {}
const functionName = function (paramOne , paramTwo) {}

/*2.Write a function fullName that accepts string arguments, 
firstName and lastName then returns a string containing your full name combined

const fullName = function (firstName, lastName) {
  // TODO: Your code here
};

fullName("John", "Doe"); // => "John Doe"
fullName("Mark", "Smith"); // => "Mark Smith" */

//solve Q2

const fullName = function (firstName, lastName) {
    // TODO: Your code here
    return firstName+" "+lastName
  };

  /* 3.Write a function average that accepts two number arguments and returns 
  the average of these numbers

const average = function (a, b) {
  // TODO: Your code here
};

average(20, 25); // => 22.5
average(15, 7); // => 11 */

//solve Q3
const average = function (a, b) {
    // TODO: Your code here
    return (a+b)/2
  };

/* 4.Using the defined functions below and your average function to guess the 
output of the following expressions

const square = function (number) {
  return number * number;
};

const cube = function (number) {
  return number * number * number;
};


//solve Q4
// guess the following
cube(25) + 20; // => 15645
square(5) + cube(2); // => 33
square(10 / 5) + cube(2 + 1); // => 31
average(square(average(6, 2)), cube(4)); // => 36 */


/* 5.Write a function toThePowerOf that accepts two number arguments, 
base, exponent and returns the base to the base power. */

const toThePowerOf=function(base,exponent){
   return Math.pow(base,exponent)
}


