/* 1.Figure out the syntax errors in the following variable declarations, and fix them.

let @name = 'John';
let 'age' = '10';
let const = "Constant";
let variable 1 = true;
let true = true */

//solve
let name = 'John';
let age = '10';
let Const = "Constant";
let variable_1 = true;
let True = true

/* 2.Explain how the following variable declarations work.

let a;
let b;
let c;
a = b = c = 20; // => a? b? c? expression value?
a = b = c = 20 + 10; // => a? b? c? expression value?
(a = b = c = 20) + 10; // => a? b? c? expression value?

const var3 = 10;
const ourFunction = function () {
  let var1 = 10;
  var2 = 10;
};

ourFunction();
var3; // => var3?
var2; // => var2?
var1; // => var1? */

//solve
a = b = c = 20; // a and b and c sam value 20
a = b = c = 20 + 10; // reassignment all to new value 30
(a = b = c = 20) + 10; // reassignment all to new value 20 then blus to 10
var3; // => constant value 10
var2; // => notFound
var1; // => assign 10

/* 3.Predict the value of the following variables and explain why

const d = 10;
d = 20;
d; // => d?// Not found

let e = 5;
let f = e;
e = 10;
f; // => f?//5

let h = 1;
let i = 10;
h = i + 4;//14
h + 20;//34
i = h + 10;44
h; // => h?//34
i; // => i? *///44

/* 4.Write a function addToList that accepts a string argument toDo and returns the current list as a
 string, every time we invoke the function it should return the old toDo item + the new one

const addToList = function (toDo) {
  // TODO: Your code here
};

addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat' */

//solve
const addToList = function (toDo) {
    // TODO: Your code here
    let str=" "
    str=str+" "+toDo
  };

  /* 5.Write two functions deposit and withdraw that accepts a number argument amount and returns the current
   account balance

const deposit = function (amount) {
  // TODO: Your code here
};

const withdraw = function (amount) {
  // TODO: Your code here
};

deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30 */


//solv
let currenAmount=0
const deposit = function (amount) {
    // TODO: Your code here
     currenAmount+=amount
     return currenAmount
  };
  
  const withdraw = function (amount) {
    // TODO: Your code here
    currenAmount-=amount
    return currenAmount

  };
