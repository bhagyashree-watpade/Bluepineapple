/*
Task:
1.	Create two variables: `number1` and `number2` with numeric values.
2.	Perform the following operations:
- Addition
- Subtraction
- Multiplication
- Division
3.	Write a conditional statement that checks if the result of the division is greater than 10 
    or less than 10. Print an appropriate message for both conditions.
*/

//declaring to numeric variables
let number1 = 20;
let number2 = 6;

//performing arithmetic operations

let addition = number1 + number2;
let subtraction = number1 - number2;
let Multiplication = number1 * number2;
let division = number1 / number2;

//printing the result of arithmetic operations on console
console.log("Arithmetic Operations performed on given two numbers :");
console.log("Number1 : " + number1 + "\nNumber2 : " + number2); 
console.log("Addition : " + addition + "\nSubtraction : " + subtraction + "\nMultiplication : " + Multiplication + "\nDivision : " + division);

//checking the result of division

if(division >= 10){
    console.log("Result of division is greater than 10");
} else{
    console.log("Result of the division is less than 10")
}