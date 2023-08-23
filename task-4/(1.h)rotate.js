// Do the below programs in anonymous function & IIFE

// 1 .h . Rotate an array by k times

//  anonymous function

let rotate = function (a, k) {
    for (let i = 0; i < k; i++){
         let b = a.pop();
         a.unshift(b);
    }
    return(a);
}

let a = [1, 2, 3, 4, 5];
let k = 4;
console.log(rotate(a, k));


//  IIFE function

let b = [1, 2, 3, 4, 5];
let x = 4;
(() => {
    for (let i = 0; i < x; i++){
        let c = b.pop();
        b.unshift(c);
    }
    console.log(b);
})(b);


// output  :

// [Running] node "c:\tasks\task-4\(1.h)rotate.js"
// [ 2, 3, 4, 5, 1 ]
// [ 2, 3, 4, 5, 1 ]

// [Done] exited with code=0 in 0.193 seconds
