//setImmediate 

function printText(text) {
    console.log("Text : " + text);
}

//setTimeout(printText,0,'setTimeout');
setImmediate(printText,'setImmediate'); //4th
printText("hii");   //1st
process.nextTick(printText,"in process");   //3rd
console.log("After process");   //2nd