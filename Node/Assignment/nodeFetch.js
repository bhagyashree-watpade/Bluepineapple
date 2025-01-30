//Assignment 4 : que 2

import fetch from 'node-fetch';
async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = await fetch(url).then(res=>res.json()); 
    //fetching data in json formate
   
    console.log("\n-------Top 5 Posts ----- ");
    for(let i = 0; i < 5; i++) {
        console.log("\nPost : ",i+1);
        console.log("\n",data[i]);
        console.log("\n--------------------------\n");
    }
 
}

getData();
