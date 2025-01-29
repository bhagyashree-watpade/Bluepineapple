/*
Task:
1.	Write a function called `calculateArea` that takes two parameters: `length` and `width`.
2.	The function should return the area of a rectangle (i.e., `length * width`).
3.	Call the function with different values for `length` and `width`, and log the results.
*/

//function to calculate the area of a rectangle
function calculateArea(length, width){
    return length * width;
}

//calling a function to calculate area of rectangle

let area1 = calculateArea(20,8);
let area2 = calculateArea(10,5);
let area3 = calculateArea(4,2);

//displaying area of the different rectangles 
console.log("Area for 1st rectangle : " + area1 + " cm^2");
console.log("Area for 2nd rectangle : " + area2 + " cm^2");
console.log("Area for 3rd rectangle : " + area3 + " cm^2");
