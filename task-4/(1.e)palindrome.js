//  1. Do the below programs in c& IIFE
//    e.Return all the palindromes in an array

// anonymous function

let palindromes = function (a) {
    let c = [];
    let d = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i].split('').reverse().join(''));
    }
    // console.log(c);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < c.length; j++) {
            if (a[i] == c[j]) 
                 d.push(a[i]);
        }
    } return d;
}
let a = ['101', '234', 'mom', 'vishnu', 'madam'];
console.log(palindromes(a));


//IIFE Function

let x = ['mother', 'father', '121', '232', 'madam'];
(() => {
    let c = [];
    let z = [];
    for (let i = 0; i < a.length; i++) {
        c.push(x[i].split('').reverse().join(''));
    }
    for (let i = 0; i < x.length; i++){
        for (let j = 0; j < c.length; j++){
            if (x[i] == c[j])
                z.push(x[i]);
        }
    }
     console.log(z);
})(x);


//   output  :


// [Running] node "c:\tasks\task-4\1e.js"
// [ '101', 'mom', 'madam' ]
// [ '121', '232', 'madam' ]

// [Done] exited with code=0 in 0.16 seconds
