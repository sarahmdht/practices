/*
* Add two numbers
*/
// function addTwoNumbers(){
// const sum = 0;
// document.getElementById("result").innerHTML = sum;
// }

// //invoke (call - run)
// addTwoNumbers();

/*
* Add two numbers + input (parameters)
*/
// function sumTwoNumbers(firstNumber , secondNumber){
//     let sum = 0;
//     sum = firstNumber + secondNumber
//     document.getElementById("result").innerHTML = sum;
//     }

//     //invoke (call - run)
//     sumTwoNumbers(1 , 3);

/*
* Add two numbers + input (parameters) + return value
*/
// function sum(firstNumber , secondNumber){
//     let sum = firstNumber + secondNumber
// //return statement
//     return sum;
// }

/* to make function block scope put it inside a variable*/
// const sum = function(firstNumber , secondNumber){
// //return statement
//     return  firstNumber + secondNumber; 
// }

// //invoke (call - run)
// let addition1 = sum(1 , 3);            //output is number
// let addition2 = sum(1 , 3).toString(); //output is string


// arrow function (not hoisted, cant use this)
//we can remove return and {} when it is only one line code
// const sum = (firstNumber , secondNumber) => firstNumber + secondNumber;

//     document.getElementById("result").innerHTML = sum(1, 3);

//we can remove () in case of one parameter
const welcomeNote = person => "Hello " + person;


const fullName = (firstName, lastName) => "Full name is " + firstName + " " + lastName;

document.getElementById("result").innerHTML = fullName("Adam", "Smith");
