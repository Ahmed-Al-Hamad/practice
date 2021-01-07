/* Write a function sum that accepts an array of numbers and returns the sum of the numbers.

const sum = function (numbers) {
  // TODO: Your code here
};
sum([1, 2, 3, 4, 5, 6]); // => 21 */

const sum = function (numbers) {
    // TODO: Your code here
    let sum=0
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
  };

  /* Write a function onlyOddNumbers that accepts an array of numbers and returns 
  a new array with only the odd numbers.

const filter = function (numbers) {
  // TODO: Your code here
};
filter([0, 1, 2, 3, 4, 5, 6]); // => [1, 3, 5] */

const filter = function (numbers) {
    // TODO: Your code here
    let arr=[]
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2!==0){
           arr.push(numbers[i])
        }
    }
    return arr
  };

  /* Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.

const maximumNumber = function (numbers) {
  // TODO: Your code here
};
maximumNumber([0, 5, 2, 10, 8, 6]); // => 10 */

const maximumNumber = function (numbers) {
    // TODO: Your code here
    let max =0
    
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>max){
           max=numbers[i]
        }
    }
            return max
  };

  /* Write a function totalBill that accepts an object representing separate bills and returns the sum of 
  all bills.

// Make sure to loop over the bills object
const bills = {
  waterBill: 25,
  electricityBill: 50,
  hospitalBill: 1000,
};

const totalBill = function (billsObject) {
  // TODO: Your code here
};
totalBill(bills); // => 1075 */


const bills = {
    waterBill: 25,
    electricityBill: 50,
    hospitalBill: 1000,
  };
  
  const totalBill = function (billsObject) {
    // TODO: Your code 
    let sum=0
    for (key in billsObject){
        return sum+=billsObject[key]
    }
  };


  /* Write a function validateMessage that accepts an object representing a message and return 
  the object if it is valid and after removing any extra keys, the message will consist of three 
  keys username, message, date with all of their values as strings return the object only if all 
  three keys are strings, if the number of keys is more than three then delete the extra keys, if 
  the message doesn't have the right data type then return invalid message

const messageOne = {
  username: "John",
  message: "Hello",
  date: "01/01/2020",
  someKey: "someValue",
};

const messageTwo = {
  username: 10,
  message: "Hello",
  date: "01/01/2020",
};

const validateMessage = function (message) {
  // TODO: Your code here
};
validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
validateMessage(messageTwo); // => invalid message */