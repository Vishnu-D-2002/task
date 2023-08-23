//  1 . Do the below programs in anonymous function & IIFE
//  a . Return all the prime numbers in an array


//  anonymous function

let primeNumber = function (n) {
    for (let i = 2; i < n; i++){
        if (n % i == 0)
            return false;
    }
    return n>1;
}

let a = [-1, -2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17, 23, 29];
console.log(a.filter(primeNumber));



// IIFE function

let b = [ -1,-2,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17, 23, 29];
(() => {
    let primeNumber = [];
    for (let i = 0; i < b.length; i++){
        let n = b[i];
        let prime = true;
        for (let j = 2 ; j < n; j++){
           if (n % j === 0) {
               prime = false;
        }
        }
        if (prime==true) {
            primeNumber.push(n);
        }
    } console.log(primeNumber);
})(b);


//  output:

// [Running] node "c:\tasks\task-4\1d.js"
// [
//    2,  3,  5,  7,
//   13, 17, 23, 29
// ]
// [
//   -1, -2, 0,  1,  2,
//    3,  5, 7, 13, 17,
//   23, 29
// ]

// [Done] exited with code=0 in 0.184 seconds
