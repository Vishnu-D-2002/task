// Do the below programs in anonymous function & IIFE

//  1 . g . Remove duplicates from an array

//anonymous function

let duplicate = function (a) {
    let dup = [];
    dup.push(...new Set(a));
    return dup;
}
let a = [1, 1, 2, 3, 4, 5, 6, 7, 4, 2, 5, 9, 0, 1, 3];
console.log(duplicate(a));


//  IIFE Function

let b = [1, 1, 2, 3, 4, 5, 6, 7, 4, 2, 5, 9, 0, 1, 3];
(() => {
    let dup = [];
    dup.push(...new Set(a));
    console.log(dup);
})(b);


//   output  :

// [Running] node "c:\tasks\task-4\(1.g)duplicate.js"
// [
//   1, 2, 3, 4, 5,
//   6, 7, 9, 0
// ]
// [
//   1, 2, 3, 4, 5,
//   6, 7, 9, 0
// ]

// [Done] exited with code=0 in 0.229 seconds