/* Figure out the syntax errors in the following, and fix them.

// 1
const person = (name: john, age:20)

// 2
const car = {brand "Toyota", model: 2020}

// 3
const employee ={name: "Jane", position: developer} */

// seolv
const person = {name: "john", age:20}
const car = {brand: "Toyota", model: 2020}
const employee ={name: "Jane", position: "developer"}

/* Check the following objects and solve the requirements.

// - access the age property
// - modify the person's age to be 23 years old
// - add a property called `work` with the value of an object with two keys position and salary
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};

// - access the first name property of both employees
// - add an employee object with your name and the position of full-stack developer
const employees = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    position: "Designer",
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Doe",
    },
    position: "Engineer",
  },
];

// - access the model value of both cars
// - change the prius model from 2019 to 2020
// - add a new car of your choice
// - add a property `isAutomatic` for all three cars
const cars = {
  toyota: {
    name: "prius",
    model: 2019,
  },
  nissan: {
    name: "leaf",
    model: 2020,
  },
};
 */

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
  };
person[age]
person[age]=23
work={
     position:"",
     salary:""
}
person[work]
//===============================
const employees = [
    {
      id: 1,
      name: {
        first: "John",
        last: "Doe",
      },
      position: "Designer",
    },
    {
      id: 2,
      name: {
        first: "Jane",
        last: "Doe",
      },
      position: "Engineer",
    },
  ];

  employees[0].name.first
  employees[1].name.first
  employees[2]={id:3,name:{frist:'ahmad',last:'alhamad'},position:'full-sack'}
  //======================================

const cars = {
  toyota: {
    name: "prius",
    model: 2019,
  },
  nissan: {
    name: "leaf",
    model: 2020,
  },
};
 
cars.toyota.model
cars.nissan.model
cars.toyota.model=2019;
cars[mar]={name:"jj",model:2020}
cars.toyota.isAutomatic
cars.nissan.isAutomatic
cars.mar.isAutomatic

/* Write a factory function createCar that accepts three string arguments brand, name, 
color and returns an object representing the car.

const createCar = function (brand, name, color) {
  // TODO: Your code here
};

createCar("Toyota", "Prius", "Black"); // => {brand: "Toyota", name: "Prius", color: "Black"} */

const createCar = function (brand, name, color) {
    const car={}
    car[brand]=brand
    car[name]=name
    car[color]=color
  }

  /* Write a function getFullName that accepts an object representing a person and returns that person's 
  full name in a string.

const getFullName = function (person) {
  // TODO: Your code here
};

getFullName({ first: "Elon", middle: "Reeve ", last: "Musk" }); // => "Elon Reeve Musk"
getFullName({ first: "John", middle: "Mark ", last: "Doe" }); // => "John Mark Doe" */

const getFullName = function (person) {
    return person.first+" "+person.middle+" "+person.last
  };

  /* Write a function olderThan that accepts two objects personOne, personTwo and returns 
  a string that represent who is older than the other.

const olderThan = function (personOne, personTwo) {
  // TODO: Your code here
};

olderThan({ name: "John", age: 23 }, { name: "Jane", age: 26 }); // => "Jane is older than John"
olderThan({ name: "Mark", age: 30 }, { name: "Smith", age: 25 }); // => "Mark is older than Smith"
olderThan({ name: "Marry", age: 20 }, { name: "Sarah", age: 20 }); // => "Marry is as old as Sarah" */

const olderThan = function (personOne, personTwo) {
    // TODO: Your code here
    if(personOne.age>personTwo.age){
        return personOne
    }else return personTwo
  };