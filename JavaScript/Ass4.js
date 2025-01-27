/*
1.	Create an array of 10 random integers between 1 and 100.
2.	Write a function that:
- Finds and logs the largest number in the array.
- Finds and logs the smallest number in the array.
- Calculates and logs the average of the numbers in the array.

*/

//creating array of 10 integers

let int_array = [2,4,6,7,10,50,75,89,43,61];

//function to find and log the largest number in the array

function max_element(int_array){
    let max_num = int_array[0];
    let i;
    for(i=0;i<int_array.length;i++) {
        if (int_array[i] > max_num){
            max_num = int_array[i];
        }
    }
    console.log("Largest element in the given array is : ", max_num);
}

//function to find and log the smallest number in the array
function min_element(int_array){
    let min_num = int_array[0];
    let i;
    for(i=0;i<int_array.length;i++) {
        if (int_array[i] < min_num){
            min_num = int_array[i];
        }
    }
    console.log("Smallest element in the given array is : ", min_num);
}

//function to find and log the average of number in the array

function average(int_array){
    let total_sum = 0;
    for(i=0;i<int_array.length;i++) {
        total_sum += int_array[i];
    }
    let avg = total_sum/int_array.length;
    console.log("Average : " + avg);
}

console.log("Array : " + int_array);
//calling a function to find the max,min element and calculating the average of the numbers in the array
max_element(int_array);
min_element(int_array);
average(int_array);
