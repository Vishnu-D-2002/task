<<<<<<< HEAD
//  JSON iterate over loops (for ,for in ,for of , for each)


// for loop
let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = function () {
    let res = JSON.parse(a.responseText);
    for (let i = 0; i < res.length; i++){
        console.log(res[i].flag);
    }
}
a.send();


//  for of loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = ()=> {
    let res = JSON.parse(a.responseText);
    for (let result of res) {
        console.log(result.flag);
    }
}
a.send();


//  for in loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = () => {
    let res = JSON.parse(a.responseText);
    for (let result in res) {
        console.log(res[result].flag);
    }
}
a.send();



//   for each loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = () => {
    let res = JSON.parse(a.responseText);
    res.forEach(result => {
         console.log(result.flag);
    }); 
}
a.send();



//   output  :

// [Running] node "c:\tasks\task-5\JSON iterate(loops).js"
// 🇿🇦
// 🇸🇯
// 🇼🇸
// 🇬🇲
// 🇰🇳
// 🇲🇨
// 🇦🇼
// 🇬🇼
// 🇰🇵
// 🇵🇾
// 🇧🇲
// 🇨🇬
// 🇻🇮
// 🇦🇬
// 🇬🇧
// 🇲🇿
// 🇲🇶
// 🇻🇬
// 🇸🇴
// 🇲🇸
// 🇲🇵
// 🇸🇬
// 🇹🇨
// 🇳🇮
// 🇳🇫
// 🇻🇨
// 🇵🇪
// 🇲🇽
// 🇬🇶
// 🇧🇦
// 🇧🇭
// 🇲🇴
// 🇧🇧
// 🇺🇿
// 🇷🇪
// 🇨🇳
// 🇲🇼
// 🇿🇼
// 🇪🇸
// 🇰🇪
// 🇵🇰
// 🇨🇽
// 🇫🇯
// 🇸🇿
// 🇯🇪
// 🇹🇼
// 🇱🇰
// 🇧🇾
// 🇦🇪
// 🇨🇼
// 🇨🇷
// 🇦🇴
// 🇺🇾
// 🇨🇩
// 🇰🇼
// 🇹🇷
// 🇲🇷
// 🇹🇻
// 🇵🇦
// 🇪🇬
// 🇱🇨
// 🇦🇿
// 🇷🇼
// 🇸🇳
// 🇮🇳
// 🇮🇸
// 🇸🇷
// 🇧🇬
// 🇫🇲
// 🇽🇰
// 🇸🇱
// 🇹🇳
// 🇨🇺
// 🇹🇹
// 🇰🇲
// 🇳🇷
// 🇸🇭
// 🇷🇴
// 🇲🇭
// 🇳🇵
// 🇪🇨
// 🇬🇦
// 🇸🇦
// 🇩🇴
// 🇵🇲
// 🇫🇴
// 🇰🇮
// 🇻🇺
// 🇭🇺
// 🇬🇸
// 🇾🇪
// 🇬🇫
// 🇸🇨
// 🇦🇸
// 🇨🇾
// 🇱🇾
// 🇮🇱
// 🇻🇳
// 🇸🇮
// 🇮🇷
// 🇳🇦
// 🇬🇷
// 🇱🇧
// 🇲🇾
// 🇲🇳
// 🇦🇽
// 🇬🇪
// 🇹🇯
// 🇦🇱
// 🇩🇲
// 🇹🇲
// 🇨🇴
// 🇭🇲
// 🇻🇪
// 🇬🇳
// 🇸🇸
// 🇺🇦
// 🇸🇰
// 🇮🇹
// 🇫🇰
// 🇬🇵
// 🇭🇳
// 🇲🇪
// 🇪🇪
// 🇧🇷
// 🇲🇺
// 🇹🇭
// 🇧🇴
// 🇸🇪
// 🇬🇬
// 🇿🇲
// 🇪🇷
// 🇰🇿
// 🇲🇦
// 🇯🇴
// 🇲🇲
// 🇸🇲
// 🇵🇼
// 🇾🇹
// 🇺🇲
// 🇨🇿
// 🇯🇲
// 🇰🇬
// 🇸🇩
// 🇸🇹
// 🇬🇮
// 🇳🇪
// 🇧🇶
// 🇦🇺
// 🇱🇺
// 🇸🇽
// 🇱🇸
// 🇵🇱
// 🇬🇺
// 🇯🇵
// 🇱🇷
// 🇨🇻
// 🇮🇲
// 🇧🇮
// 🇵🇬
// 🇺🇬
// 🇦🇫
// 🇼🇫
// 🇨🇫
// 🇻🇦
// 🇫🇷
// 🇺🇸
// 🇹🇱
// 🇧🇼
// 🇦🇹
// 🇧🇪
// 🇬🇱
// 🇵🇹
// 🇱🇦
// 🇬🇹
// 🇱🇮
// 🇸🇧
// 🇨🇭
// 🇵🇸
// 🇮🇪
// 🇲🇫
// 🇸🇾
// 🇧🇩
// 🇩🇯
// 🇬🇭
// 🇩🇰
// 🇴🇲
// 🇧🇻
// 🇧🇸
// 🇩🇿
// 🇭🇹
// 🇨🇮
// 🇸🇻
// 🇳🇱
// 🇵🇭
// 🇬🇩
// 🇳🇴
// 🇨🇰
// 🇦🇩
// 🇨🇨
// 🇲🇱
// 🇹🇰
// 🇹🇴
// 🇧🇯
// 🇹🇬
// 🇲🇬
// 🇦🇮
// 🇨🇦
// 🇦🇲
// 🇮🇴
// 🇳🇬
// 🇧🇿
// 🇧🇱
// 🇱🇹
// 🇳🇨
// 🇷🇺
// 🇰🇾
// 🇲🇩
// 🇭🇷
// 🇷🇸
// 🇲🇹
// 🇵🇫
// 🇱🇻
// 🇨🇱
// 🇫🇮
// 🇩🇪
// 🇳🇿
// 🇦🇶
// 🇮🇩
// 🇲🇻
// 🇵🇳
// 🇨🇲
// 🇪🇭
// 🇧🇳
// 🇬🇾
// 🇹🇿
// 🇹🇩
// 🇹🇫
// 🇰🇭
// 🇶🇦
// 🇦🇷
// 🇮🇶
// 🇧🇹
// 🇳🇺
// 🇰🇷
// 🇭🇰
// 🇲🇰
// 🇧🇫
// 🇵🇷
// 🇪🇹

// [Done] exited with code=0 in 3.237 seconds

=======
//  JSON iterate over loops (for ,for in ,for of , for each)


// for loop
let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = function () {
    let res = JSON.parse(a.responseText);
    for (let i = 0; i < res.length; i++){
        console.log(res[i].flag);
    }
}
a.send();


//  for of loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = ()=> {
    let res = JSON.parse(a.responseText);
    for (let result of res) {
        console.log(result.flag);
    }
}
a.send();


//  for in loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = () => {
    let res = JSON.parse(a.responseText);
    for (let result in res) {
        console.log(res[result].flag);
    }
}
a.send();



//   for each loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();

a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = () => {
    let res = JSON.parse(a.responseText);
    res.forEach(result => {
         console.log(result.flag);
    }); 
}
a.send();



//   output  :

// [Running] node "c:\tasks\task-5\JSON iterate(loops).js"
// 🇿🇦
// 🇸🇯
// 🇼🇸
// 🇬🇲
// 🇰🇳
// 🇲🇨
// 🇦🇼
// 🇬🇼
// 🇰🇵
// 🇵🇾
// 🇧🇲
// 🇨🇬
// 🇻🇮
// 🇦🇬
// 🇬🇧
// 🇲🇿
// 🇲🇶
// 🇻🇬
// 🇸🇴
// 🇲🇸
// 🇲🇵
// 🇸🇬
// 🇹🇨
// 🇳🇮
// 🇳🇫
// 🇻🇨
// 🇵🇪
// 🇲🇽
// 🇬🇶
// 🇧🇦
// 🇧🇭
// 🇲🇴
// 🇧🇧
// 🇺🇿
// 🇷🇪
// 🇨🇳
// 🇲🇼
// 🇿🇼
// 🇪🇸
// 🇰🇪
// 🇵🇰
// 🇨🇽
// 🇫🇯
// 🇸🇿
// 🇯🇪
// 🇹🇼
// 🇱🇰
// 🇧🇾
// 🇦🇪
// 🇨🇼
// 🇨🇷
// 🇦🇴
// 🇺🇾
// 🇨🇩
// 🇰🇼
// 🇹🇷
// 🇲🇷
// 🇹🇻
// 🇵🇦
// 🇪🇬
// 🇱🇨
// 🇦🇿
// 🇷🇼
// 🇸🇳
// 🇮🇳
// 🇮🇸
// 🇸🇷
// 🇧🇬
// 🇫🇲
// 🇽🇰
// 🇸🇱
// 🇹🇳
// 🇨🇺
// 🇹🇹
// 🇰🇲
// 🇳🇷
// 🇸🇭
// 🇷🇴
// 🇲🇭
// 🇳🇵
// 🇪🇨
// 🇬🇦
// 🇸🇦
// 🇩🇴
// 🇵🇲
// 🇫🇴
// 🇰🇮
// 🇻🇺
// 🇭🇺
// 🇬🇸
// 🇾🇪
// 🇬🇫
// 🇸🇨
// 🇦🇸
// 🇨🇾
// 🇱🇾
// 🇮🇱
// 🇻🇳
// 🇸🇮
// 🇮🇷
// 🇳🇦
// 🇬🇷
// 🇱🇧
// 🇲🇾
// 🇲🇳
// 🇦🇽
// 🇬🇪
// 🇹🇯
// 🇦🇱
// 🇩🇲
// 🇹🇲
// 🇨🇴
// 🇭🇲
// 🇻🇪
// 🇬🇳
// 🇸🇸
// 🇺🇦
// 🇸🇰
// 🇮🇹
// 🇫🇰
// 🇬🇵
// 🇭🇳
// 🇲🇪
// 🇪🇪
// 🇧🇷
// 🇲🇺
// 🇹🇭
// 🇧🇴
// 🇸🇪
// 🇬🇬
// 🇿🇲
// 🇪🇷
// 🇰🇿
// 🇲🇦
// 🇯🇴
// 🇲🇲
// 🇸🇲
// 🇵🇼
// 🇾🇹
// 🇺🇲
// 🇨🇿
// 🇯🇲
// 🇰🇬
// 🇸🇩
// 🇸🇹
// 🇬🇮
// 🇳🇪
// 🇧🇶
// 🇦🇺
// 🇱🇺
// 🇸🇽
// 🇱🇸
// 🇵🇱
// 🇬🇺
// 🇯🇵
// 🇱🇷
// 🇨🇻
// 🇮🇲
// 🇧🇮
// 🇵🇬
// 🇺🇬
// 🇦🇫
// 🇼🇫
// 🇨🇫
// 🇻🇦
// 🇫🇷
// 🇺🇸
// 🇹🇱
// 🇧🇼
// 🇦🇹
// 🇧🇪
// 🇬🇱
// 🇵🇹
// 🇱🇦
// 🇬🇹
// 🇱🇮
// 🇸🇧
// 🇨🇭
// 🇵🇸
// 🇮🇪
// 🇲🇫
// 🇸🇾
// 🇧🇩
// 🇩🇯
// 🇬🇭
// 🇩🇰
// 🇴🇲
// 🇧🇻
// 🇧🇸
// 🇩🇿
// 🇭🇹
// 🇨🇮
// 🇸🇻
// 🇳🇱
// 🇵🇭
// 🇬🇩
// 🇳🇴
// 🇨🇰
// 🇦🇩
// 🇨🇨
// 🇲🇱
// 🇹🇰
// 🇹🇴
// 🇧🇯
// 🇹🇬
// 🇲🇬
// 🇦🇮
// 🇨🇦
// 🇦🇲
// 🇮🇴
// 🇳🇬
// 🇧🇿
// 🇧🇱
// 🇱🇹
// 🇳🇨
// 🇷🇺
// 🇰🇾
// 🇲🇩
// 🇭🇷
// 🇷🇸
// 🇲🇹
// 🇵🇫
// 🇱🇻
// 🇨🇱
// 🇫🇮
// 🇩🇪
// 🇳🇿
// 🇦🇶
// 🇮🇩
// 🇲🇻
// 🇵🇳
// 🇨🇲
// 🇪🇭
// 🇧🇳
// 🇬🇾
// 🇹🇿
// 🇹🇩
// 🇹🇫
// 🇰🇭
// 🇶🇦
// 🇦🇷
// 🇮🇶
// 🇧🇹
// 🇳🇺
// 🇰🇷
// 🇭🇰
// 🇲🇰
// 🇧🇫
// 🇵🇷
// 🇪🇹

// [Done] exited with code=0 in 3.237 seconds

>>>>>>> 4d14421e50aa65ff93f5ac7492411bb0a2ffa272
