//   1 . Do the below programs in anonymous function & IIFE
//    f . Return median of two sorted arrays of the same size.


// anonymous function

let median = function (a, b) {
    let sortedArray = a.concat(b).sort((a,b)=>a-b);
    let length = sortedArray.length / 2;
    return(sortedArray[length]+sortedArray[length-1]);
}

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 22];
console.log(median(a, b));


//  IIFE Function

let c = [1, 2, 3, 4, 5];
let d = [6, 7, 8, 9, 10];
(() => {
    let sortedArray = c.concat(d).sort((a,b)=>a-b);
    let length = sortedArray.length / 2;
    console.log(sortedArray[length]+sortedArray[length-1]);
})(c,d);


//  output:

// [Running] node "c:\tasks\task-4\1f.js"
// 11
// 11

// [Done] exited with code=0 in 0.19 seconds