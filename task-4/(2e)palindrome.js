// Do the below programs in arrow functions.

// 2 . e . Return all the palindromes in an array

let palindromes = (a) => {
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
let a = ['101', '234', 'mom', 'vishnu', 'madam','racecar'];
console.log(palindromes(a));

// output :

// [Running] node "c:\tasks\task-4\(2e)palindrome.js"
// [ '101', 'mom', 'madam' ]

// [Done] exited with code=0 in 0.168 seconds






//another method
// let palindrome = (n) => {
//    if( n == n.split('').reverse().join(''))
//     return true;
// }

// let b = ['101', '234', 'mom', 'vishnu', 'madam',`madamimadam`,];
// console.log(b.filter(palindrome));

//output:
// [Running] node "c:\tasks\task-4\(2e)palindrome.js"
// [ '101', 'mom', 'madam', 'racecar' ]
// [ '101', 'mom', 'madam', 'madamimadam' ]

// [Done] exited with code=0 in 0.176 seconds