
//setTimeout()->minimum 2 arguments are required,can take any number of arguments 
function callFunction(){
    const call = setTimeout(function(){
        console.log("from function-1 : " ,2*3);
    },1001);
    for(let i=0;i<1000;i++){
        //if i==999 then it wont print anything on console
        if(i===9999){
            clearTimeout(call);
        }
    }
}

//function taking more than 2 arguments

function callFunction1(){
    const call = setTimeout(function(a,b){
        console.log("from function-2 : ", a*b);
    },1000,2,3);
    for(let i=0;i<1000;i++){
        //if i==999 then it wont print anything on console
        if(i===9999){
            clearTimeout(call);
        }
    }
}
callFunction();
callFunction1();



//zero delay -> setTimeout(fun(),0)

function callme(){
    setTimeout(() => {
    console.log('after ');
  }, 0);
}

function callFunction3(){
    const call = setTimeout(function(a,b){
        console.log("from function-2 : ", a*b);
    },0,2,3);
}

callme();   //3rd
console.log(' before ');    //1st(execution order)
callFunction3();    //4th
console.log("before callme execution");     //2nd