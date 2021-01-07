/* Write a function makeSafe that accepts one argument safeSize and 
return a closure function that takes two arguments name and size that
 adds items in the safe depending on the size of the item, it might fit 
 or not in the safe, return true if the item fits and return false if it doesn't.

Solve With Closure
const makeSafe = function (safeSize) {
    // TODO: Your code here
  };
  
  const safe = makeSafe(10);
  
  safe("watermelon", 7); // => true
  safe("pillow", 4); // => false
  safe("plate", 2); // => true
   */

  const makeSafe = function (safeSize) {
    // TODO: Your code here
    let saf=" "
    return function(name,size){
        if(size<safeSize){
        saf=name
        return true
    }
        else return false
    }
  };

  /* Modify makeSafe to return an object with two methods, add,
   remove, add will be a method that does the same as the previous 
   add closure function and remove will accept one argument name and 
   returns the removed item from the safe and if it wasn't found return a string Not found

Solve With Closure 
const safe = makeSafe(10);

safe.add("watermelon", 7); // => true
safe.add("plate", 2); // => true

safe.remove("money"); // => "Not Found"
safe.remove("watermelon"); // => {name: "watermelon", "size: 7"}
safe.remove("watermelon"); // => "Not Found" */


const makeSafe = function (safeSize) {
    // TODO: Your code here
     let saf=[]
    return {
        add:function(name,size){
        if(size<safeSize){
         saf.push(name)
        return true
    }
        else return false
    },
    remove:function(name){
        if(saf.includes(name))
        return remove
        else return false
    }
}
  };



  /* Modify makeSafe to have two more methods setPassCode and resetPassCode.

setPassCode will enable the user to input a passcode that must be used to open the safe, return the passcode on success and if a passcode already exist return Reset passcode first.

resetPassCode will take the passcode and if it matches the one saved in the closure variable it will set the pass code to an empty string "" then return PassCode has been reset, if it is used when there is no passcode then return Set a passcode first and finally if the passcode doesn't match return PassCode doesn't match.

Solve With Closure *
const safe = makeSafe(10);

safe.resetPassCode("8642"); // => "Set a passcode first"
safe.setPassCode("8642"); // => "8642"
safe.setPassCode("7531"); // => "Reset passcode first"

safe.resetPassCode("7531"); // => "PassCode doesn't match"
safe.resetPassCode("8642"); // => "PassCode has been reset"
afe.setPassCode("7531"); // => "7531" */



