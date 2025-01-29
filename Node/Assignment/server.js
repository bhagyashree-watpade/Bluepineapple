//Assignment 1

//Import the http module using require.
let http = require('http');

//Import helper.js 
let helper =  require('./helper.js');

//server that listens on port 3000 and responds with "Welcome to Node.js!" for any request.
http.createServer(function(req,res){
    res.write("Welcome to Node Js!!");
    console.log("Connected");
    res.end();
}).listen(3000)

// calling getMessage() from helper.js
let result = helper.getMessage();
console.log(result);