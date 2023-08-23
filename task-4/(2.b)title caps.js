// Do the below programs in arrow functions.

//  2 . b .Convert all the strings to title caps in a string array

let titlecap =  (a) => {
    for (let i = 0; i < a.length;i++) {
        // a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1).toLowerCase();
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase();
    }
    console.log(a);
}
let a = ['vishnu', 'is', 'god'];
titlecap(a);

// // output :

// [Running] node "c:\tasks\task-4\(2.b)title caps.js"
// [ 'Vishnu', 'Is', 'God' ]

// [Done] exited with code=0 in 0.196 seconds









//another method
// let titlecaps = (n) => {
//      n.charAt(0).toUpperCase() + n.slice(1);
//     return n;
// }

// let b = ['vishnu', 'is', 'god'];
// titlecap(b.filter(titlecaps));

//output:

// [Running] node "c:\tasks\task-4\(2.b)title caps.js"
// [ 'Vishnu', 'Is', 'God' ]
// [ 'Vishnu', 'Is', 'God' ]

// [Done] exited with code=0 in 0.193 seconds
