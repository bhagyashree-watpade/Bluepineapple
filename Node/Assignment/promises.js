//promising
/*
const promise = new Promise((resolve,reject) =>{
    console.log("Promising");
    if(true){
        resolve();
    }else{
        reject();
    }
});

promise.then(()=>{
    console.log("Success");
},()=>{
    console.log("Failure");
});
*/

/*
Implement a function fetchData() that: 
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

promise.then(()=>{
    console.log("Data fetched successfully");
},()=>{
    console.log("Something goes wrong...")
});

}

fetchData()
