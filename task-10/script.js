let display = document.getElementById('display');
let ten = (callback) => {
    setTimeout(() => {
        display.innerHTML = '10';
        callback();
    },1000)
}
let nine = (callback) => {
    setTimeout(() => {
        display.innerHTML = '9';
        callback();
    },1000)
}
let eight = (callback) => {
    setTimeout(() => {
        display.innerHTML = '8';
        callback();
    },1000)
}
let seven = (callback) => {
    setTimeout(() => {
        display.innerHTML = '7';
        callback();
    },1000)
}
let six = (callback) => {
    setTimeout(() => {
        display.innerHTML = '6';
        callback();
    },1000)
}
let five = (callback) => {
    setTimeout(() => {
        display.innerHTML = '5';
        callback();
    },1000)
}
let four = (callback) => {
    setTimeout(() => {
        display.innerHTML = '4';
        callback();
    },1000)
}
let three = (callback) => {
    setTimeout(() => {
        display.innerHTML = '3';
        callback();
    },1000)
}
let two = (callback) => {
    setTimeout(() => {
        display.innerHTML = '2';
        callback();
    },1000)
}
let one = (callback) => {
    setTimeout(() => {
        display.innerHTML = '1';
        callback();
    },1000)
}
ten(function () {
    nine(function () {
        eight(function () {
            seven(function () {
                six(function () {
                    five(function () {
                        four(function () {
                            three(function () {
                                two(function () {
                                    one(function () {
                                        setTimeout(() => {     
                                        display.innerHTML =
                                        `<p><span id="happy">HAPPY</span></p>
                                         <p><span id="independence">INDEPEDENCE</span> </p>
                                         <p><span id="day">DAY</span></p>`
                                        },1000)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})






//another method
// let displayScreen = function(num, callback){
//     if (num === -1) {
//         callback();
//     }
//     else {
//         setTimeout(() => {
//             document.getElementById('display').innerText = num;
//             displayScreen((num - 1), callback);
//         },1000)
//     }
// }

// displayScreen(10,() => {
//     document.getElementById('display').innerHTML =
//      `<p><span id="happy">HAPPY</span></p>
//     <p><span id="independence">INDEPEDENCE</span> </p>
//     <p><span id="day">DAY</span></p>`
//     //  `HAPPY
//     //  INDEPENDENCE
//     // DAY`;
// });