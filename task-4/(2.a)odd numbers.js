// Do the below programs in arrow functions.

//  2)  a . Print odd numbers in an array

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let b = [];
let oddNumbers = (a) => {
    for (let num of a) {
        if (num % 2 == 1)
            b.push(num);
    }
    console.log(b);
}
oddNumbers(a);

// output :

// [Running] node "c:\tasks\task-4\(2.a)odd numbers.js"
// [ 1, 3, 5, 7, 9, 11 ]

// [Done] exited with code=0 in 0.291 seconds





//another method

// let oddNumber = (a) => {
//     if (a % 2 ==1)
//         return true;
// }
// let a = [1, 2, 3, 4, 5, 6, 7, 11, 13, 15, 17, 20, 2, 22, 43, 65];
// console.log(a.filter(oddNumber));

// output :

// [Running] node "c:\tasks\task-4\(2.a)odd numbers.js"
// [
//    1,  3,  5,  7, 11,
//   13, 15, 17, 43, 65
// ]

// [Done] exited with code=0 in 0.201 seconds