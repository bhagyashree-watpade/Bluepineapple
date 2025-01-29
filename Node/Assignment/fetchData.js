//Assignment 3 -> que 2

/*
2) Implement a function fetchData() that: 
Returns a promise simulating an API call with setTimeout. 
Resolves with "Data fetched successfully" after 2 seconds or rejects with an error message if something goes wrong. 
Use .then() and .catch() to handle the promise. 
*/

function fetchData() {
    const promise = new Promise((resolve,reject)=>{
        setTimeout((api)=>{
            //console.log("API : ", api);
            const isConnected = false;
            if(isConnected){
                resolve("Data fetched successfully");
            } else{
                reject("Something goes wrong...");
            }
        },2000,'API');
    }
);

/*promise.then((msg)=>{//execute if promise is resolve
    console.log(msg);
},(msg)=>{//execute when promise if rejected
    console.log(msg);
});
*/

//then ,catch

promise.then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
})
}

fetchData()