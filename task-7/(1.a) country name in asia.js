// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Get all the countries from Asia continent /region using Filter function

let country = require("xhr2");
let countries = new country();

countries.open("GET", "https://restcountries.com/v3.1/all");

countries.onload = () => {
    //parse will convert the JSONstring to object
    let result = JSON.parse(countries.responseText);
    // console.log(result);
    //by using console.log (result) we can print all details of link

    let continent = result.filter((val) => {
        if (val.region === 'Asia') {
            //if condition checks the region and asia are same or not
            console.log(val.name.common);
        }
    });
    console.log(continent);
    
}
countries.send();





//  output :


// [Running] node "c:\tasks\task-7\(1.a) .js"
// North Korea
// Singapore
// Bahrain
// Macau
// Uzbekistan
// China
// Pakistan
// Taiwan
// Sri Lanka
// United Arab Emirates
// Kuwait
// Turkey
// Azerbaijan
// India
// Nepal
// Saudi Arabia
// Yemen
// Israel
// Vietnam
// Iran
// Lebanon
// Malaysia
// Mongolia
// Georgia
// Tajikistan
// Turkmenistan
// Thailand
// Kazakhstan
// Jordan
// Myanmar
// Kyrgyzstan
// Japan
// Afghanistan
// Timor-Leste
// Laos
// Palestine
// Syria
// Bangladesh
// Oman
// Philippines
// Armenia
// Indonesia
// Maldives
// Brunei
// Cambodia
// Qatar
// Iraq
// Bhutan
// South Korea
// Hong Kong

// [Done] exited with code=0 in 3.936 seconds

