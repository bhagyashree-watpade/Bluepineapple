//setInterval() -> same as setTimeout() , but it will continuously execute after specified time 

function interval() {
let call = setInterval(function(a,b){
    console.log("Multiplication " + ": "+ a*b);
    //i++;
    if(i==8){
        clearInterval(call);
    }
},1000,2,3);
}

interval();