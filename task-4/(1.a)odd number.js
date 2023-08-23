//  1 . Do the below programs in anonymous function & IIFE
//      a.  Print odd numbers in an array


// anonymous function

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let b = [];
let oddNumbers = function (a) {
    for (let num of a) {
        if (num % 2 !== 0)
            b.push(num);
    }
    console.log(b);
}
oddNumbers(a);



//IIFE function

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let d = [];
(() => {
    for (let res of c) {
        if (res % 2 !== 0) 
            d.push(res);
    } console.log(d);
})(c);


// // output:
// [Running] node "c:\tasks\task-4\1a.js"
// [ 1, 3, 5, 7, 9, 11 ]
// [ 1, 3, 5, 7, 9, 11 ]

// [Done] exited with code=0 in 0.173 seconds


//another type using array methods
//console.log(a.filter(n => n % 2==1));