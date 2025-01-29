/*
Assignment-2
1.Use the fs module to: 
-Create a new file named log.txt with content: "This is a log file." 
-Append new logs to the file every time the script runs. 
*/
const fs = require('fs');

//if file does not exist then only create file,otherwise append the logs to the file,when script runs
if(!fs.existsSync('log.txt')){
    fs.writeFile('log.txt','This is a log file\n',function(err){
        console.log(err);
    });
}
fs.appendFile('log.txt','This is a new log added to the file\n',function(err){
    console.log('New log is added to the file');
})

//console.log(fs.existsSync('adw.txt'));

