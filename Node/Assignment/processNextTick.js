//process.nextTick() 

function printMsg(text) {
    console.log(text);
}

process.nextTick(printMsg,"This function is executing at the end");
console.log("hello all");
printMsg("executing before process.nextTick()");