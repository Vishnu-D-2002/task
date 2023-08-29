// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Print the total population of countries using reduce function



let country = require("xhr2");
let countries = new country();

countries.open("GET", "https://restcountries.com/v3.1/all");

countries.onload = () => {
     //parse will convert the JSONstring to object
    let res = JSON.parse(countries.responseText);
    
    let Populations = [];
    for (let result of res) {
        Populations.push(result.population);
    }
    // console.log(Populations);
    
    console.log(Populations.reduce((a, b) => a + b ));
}
countries.send();



//  output  :

// [Running] node "c:\tasks\task-7\(1.d) population in reduce function.js"
// 7777721563

// [Done] exited with code=0 in 4.591 seconds

