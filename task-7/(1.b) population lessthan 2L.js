// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Get all the countries with a population of less than 2 lakhs using Filter function


let country = require("xhr2");
let countries = new country();

countries.open("GET", "https://restcountries.com/v3.1/all");

countries.onload = () => {
    let result = JSON.parse(countries.responseText);
     //parse will convert the JSONstring to object
    let population = result.filter((a) => {
        if (a.population < 200000)
            // it will include only value less than 200000
        console.log(a.name.common);
    })
    console.log(population);
}
countries.send();




//  output :

// [Running] node "c:\tasks\task-7\(1.b) .js"
// Svalbard and Jan Mayen
// Samoa
// Saint Kitts and Nevis
// Monaco
// Aruba
// Bermuda
// United States Virgin Islands
// Antigua and Barbuda
// British Virgin Islands
// Montserrat
// Northern Mariana Islands
// Turks and Caicos Islands
// Norfolk Island
// Saint Vincent and the Grenadines
// Christmas Island
// Jersey
// Curaçao
// Tuvalu
// Saint Lucia
// Micronesia
// Nauru
// Saint Helena, Ascension and Tristan da Cunha
// Marshall Islands
// Saint Pierre and Miquelon
// Faroe Islands
// Kiribati
// South Georgia
// Seychelles
// American Samoa
// Åland Islands
// Dominica
// Heard Island and McDonald Islands
// Falkland Islands
// Guernsey
// San Marino
// Palau
// United States Minor Outlying Islands
// Gibraltar
// Caribbean Netherlands
// Sint Maarten
// Guam
// Isle of Man
// Wallis and Futuna
// Vatican City
// Greenland
// Liechtenstein
// Saint Martin
// Bouvet Island
// Grenada
// Cook Islands
// Andorra
// Cocos (Keeling) Islands
// Tokelau
// Tonga
// Anguilla
// British Indian Ocean Territory
// Saint Barthélemy
// Cayman Islands
// Antarctica
// Pitcairn Islands
// French Southern and Antarctic Lands
// Niue

// [Done] exited with code=0 in 4.207 seconds

