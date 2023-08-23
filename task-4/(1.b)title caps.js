//  1.   Do the below programs in anonymous function & IIFE
//    b.  Convert all the strings to title caps in a string array

//  anonymous function

let titlecap = function (a) {
    for (let i = 0; i < a.length;i++) {
        // a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1).toLowerCase();
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase();
    }
    console.log(a);
}
let a = ['vishnu', 'is', 'god'];
titlecap(a);



//IIFE Function

let b = ['vishnu', 'is', 'god'];
(()=> {
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1).toLowerCase();
    }
    console.log(a);
})(b);

// output:

// [Running] node "c:\tasks\task-4\1b.js"
// [ 'Vishnu', 'Is', 'God' ]
// [ 'Vishnu', 'Is', 'God' ]

// [Done] exited with code=0 in 0.176 seconds