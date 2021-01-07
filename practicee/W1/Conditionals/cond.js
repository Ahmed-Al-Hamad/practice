/* 1.Figure out the syntax errors in following, and fix them.

// 1
if (10 =< 10){
}

// 2
if 5 > 3 {
  return "Five bigger than three"
}

// 3
if (false){
}
else(true){
}

// 4
if (2 < 3 && 7 > 10)
}

// 5
if ("hello" = "hello"){
} */

//solve

// 1
if (10 <= 10){
}

// 2
if (5 > 3) {
    return "Five bigger than three"
  }

  // 3
if (false){
}
else(true)

// 4
if (2 < 3 && 7 < 10){

}

// 5
if ("hello" == "hello"){
} 

/* 2.Predict the value of the expression and explain why

true && true && false;//false is strong in case && logic

true || (true && false);// true is strong in case || logic

5 === 2 || 1 < 10;// true is strong in case || logic 

(!false && true) || (!true && true);//true is strong in case || logic

1 < 2 < 3;//true 

1 < 3 > 2;//true */

//==================================================================

/* 3.Check out the following examples and solve the question.

// you could use the `toLowerCase` or `toUpperCase `string methods to check if a string matches without it being case sensitive
"HeLlO wOrlD".toLowerCase() === "hello world"; // => true
"HeLlO wOrlD".toUpperCase() === "hello world".toUpperCase(); // => true

// one handy string property `length` is used to return the length of a string, could be useful
//  if you are expecting the input to be in a certain length for example
"myPassword".length <= 15; // => true
"Hello World".length === 11; // => true, notice how even the empty space " " was counted as a character

// Write a function `login` that accepts two string arguments `username` and `password` and
// returns a string "login successful" if both are valid or return "Invalid login information" with the appropriate reason,
// the function will check the following:
// 1- if the length of the username is greater than 4
// 2- if the username is of the specified usernames below
// 3- if the password length is greater or equal to 8
// 4- if the password is equal to the corresponding password

// (username => "MrPotato", password =>"LonelyPotato"),  (username => "theWiseMan", password => "12345678")
const login = function (username, password) {
  // keep in mind that usernames don't need to be case sensitive but passwords do
  // TODO: Your code here
};

login("MrPotato", "LonelyPotato"); // => login successful
login("mrpotato", "LonelyPotato"); // => login successful

login("MrPotato", "lonelypotato"); // => Invalid login information, wrong password or username
login("MrPotato", "12345678"); // => Invalid login information, wrong password or username

login("MrPotato", "123456"); // => Invalid login information, the password length must be greater or equal to 8
login("mike", "12345678"); // => Invalid login information, the username length must be greater than 4 */

// solve

const login=function(username,password){
     if(username==='MrPotato'&& password==='LonelyPotato'){
         if(username==='mrpotato'&&password==='LonelyPotato'){
             return 'login successful'
         }
     }else if(username==='MrPotato'&&password==='lonelypotato'||password==='12345678'){
         return 'Invalid login information, wrong password or username'
     }else if(password.length<8){
         return 'Invalid login information, the password length must be greater or equal to 8'
     }else if(username.length<4){
         return 'Invalid login information, the username length must be greater than 4'
     }
}

/* 4.Write a function isLeapYear that accepts a number argument year and returns true if the year is
 a leap year, leap years are divisible by 4 but non leap years are divisible by 100 for the exception 
 of 400 (leap years are also divisible by 400)

const isLeapYear = function (year) {
  // TODO: Your code here
}; */

// solve

const isLeapYear = function (year) {
    // TODO: Your code here
    if(year%4===0&&year%400===0){
        return true
    }
  };

  /* 5.Write a function deposit that accepts an argument amount and returns the deposited amount,
   the function should only accept positive number arguments otherwise return "Please enter a valid number"

const deposit = function (amount) {
  // TODO: Your code here
};

deposit(100); // => 100
deposit("100"); // => Please enter a valid number */
const deposit = function (amount) {
    if(amount>0){
        return amount
    }else return 'Please enter a valid number'
  };