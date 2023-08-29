// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Print the country which uses US Dollars as currency.


let country = require("xhr2");
let countries = new country();

countries.open("GET", "https://restcountries.com/v3.1/all");

countries.onload = () => {
     //parse will convert the JSONstring to object
    let res = JSON.parse(countries.responseText);
    for (let result of res) {
        if (result.currencies && result.currencies.USD)
            // this condition check both currencies and USD are are equal
        console.log(result.name.common);
    }
    // console.log(res.currencies);
}
countries.send();





//  output :

// [Running] node "c:\tasks\task-7\(1.e) country uses US dollar.js"
// United States Virgin Islands
// British Virgin Islands
// Northern Mariana Islands
// Turks and Caicos Islands
// Panama
// Micronesia
// Marshall Islands
// Ecuador
// American Samoa
// Palau
// United States Minor Outlying Islands
// Caribbean Netherlands
// Guam
// United States
// Timor-Leste
// Bahamas
// El Salvador
// British Indian Ocean Territory
// Cambodia
// Puerto Rico

// [Done] exited with code=0 in 7.33 seconds

