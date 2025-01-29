/*
Assignment 2
2.Simulate blocking vs. non-blocking: 
    - Write a blocking function that reads log.txt synchronously and logs its content. 
    - Write a non-blocking function that reads log.txt asynchronously and logs its content. 
*/

const fs =  require('fs');

//blocking function to read the file synchronously
function readFileSynchronously() {
    let data = fs.readFileSync('log.txt','utf8');
    console.log("Reading log.txt synchronously : ");
    console.log(data);
}

//non-blocking function to read file asynchronously
function readFiles() {
    fs.readFile('log.txt','utf8',function(err,data){
        console.log("Reading log.txt asynchronously : ");
        console.log(data);
    });
    console.log("File reading completed..")
}

//calling functions 
readFileSynchronously();
readFiles()