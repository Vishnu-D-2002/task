//to require http request
let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();
a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = function () {
    let results = JSON.parse(a.responseText);
    for (let result of results) {
        console.log(result.flag);
    }
}
a.send();