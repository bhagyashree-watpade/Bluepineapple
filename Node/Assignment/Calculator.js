//Assignment 3: Function Chaining

/*
Create a Calculator class: 
Add methods add(num), subtract(num), multiply(num), and divide(num). 
Each method should update the internal value and return this to allow chaining. 
Include a getResult() method to retrieve the final result.
*/
class Calculator{
    constructor() {
        this.n = 0;
        
    }
   add(num){
        this.n += num;
        return this;
   }
   sub(num) {
    this.n -= num
    return this;
   }
   multi(num){
    this.n *= num;
    return this;
   }

   div(num) {
    this.n /= num;
    return this ;
   }

   getResult() {
    return this;
   }
}

let calc = new Calculator();
//let result = calc.add(2).sub(3).multi(4).div(2).getResult();
//console.log("result : ",result);
console.log(calc.add(2).sub(3).multi(4).div(2).getResult());