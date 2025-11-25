//closure example

// function c(){
//     let a = 0;
//     return function(){
//         a += 1;
//         return a;
//     }
// }

// const counterC = c();
// console.log(counterC());
// console.log(counterC()); 

// const counterD = c();
// console.log(counterD());
// console.log(counterD()); 


//scope example

let a = 10;

function b(){
    let a = 0;
    a += 1;
    console.log("local a:", a);
}
b();


console.log("global a:", a);
