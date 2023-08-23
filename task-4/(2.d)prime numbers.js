// Do the below programs in arrow functions.

// 2 . d .Return all the prime numbers in an array

let primeNumber = (n) => {
    for (let i = 2; i < n; i++){
        if (n % i == 0)
            return false;
    }
    return n>1;
}

let a = [-1, -2, -3, 0, 1, 2, 3, 89, 4, 5, 6, 7, 8, 9, 10, 13, 17, 23, 29];
console.log(a.filter(primeNumber));


// output:

// [Running] node "c:\tasks\task-4\(2.d)prime numbers.js"
// [
//    2,  3, 89,  5, 7,
//   13, 17, 23, 29
// ]

// [Done] exited with code=0 in 0.193 seconds



