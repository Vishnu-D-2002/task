// Do the below programs in arrow functions.

// 2 .c . Sum of all numbers in an array

let sumOfNum =  (a) => {
    let sum = 0;
    for (let i = 0; i < a.length;i++) {
       sum = sum +a[i];
    }
    console.log(sum);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
sumOfNum(a);


//output :

// [Running] node "c:\tasks\task-4\(2.c)sum of numbers.js"
// 55

// [Done] exited with code=0 in 0.224 seconds

