//   1 .Do the below programs in anonymous function & IIFE
//  c . Sum of all numbers in an array

//  anonymous function

let sumOfNum = function (a) {
    let sum = 0;
    for (let i = 0; i < a.length;i++) {
       sum = sum +a[i];
    }
    console.log(sum);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
sumOfNum(a);


//IIFE Function

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(() => {
    let sum = 0;
    for (let add of a) {
        sum = sum + add;
    }
    console.log(sum);
})(b);


//    output:

// [Running] node "c:\tasks\task-4\1c.js"
// 55
// 55

// [Done] exited with code=0 in 0.188 seconds