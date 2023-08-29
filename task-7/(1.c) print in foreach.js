// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Print the following details name, capital, flag using forEach function


let country = require("xhr2");
let countries = new country();

countries.open("GET", "https://restcountries.com/v3.1/all");

countries.onload = () => {
     //parse will convert the JSONstring to object
    let result = JSON.parse(countries.responseText);
    //foreach will will travel each of the elements and print the result
    console.log(result.forEach(a => {
        console.log(a.name.common);
        console.log(a.capital);
        console.log(a.flag+"\n");
    }));
}
countries.send();



//  output :

// [Running] node "c:\tasks\task-7\(1.c) print in foreach.js"
// South Africa
// [ 'Pretoria', 'Bloemfontein', 'Cape Town' ]
// 🇿🇦

// Svalbard and Jan Mayen
// [ 'Longyearbyen' ]
// 🇸🇯

// Samoa
// [ 'Apia' ]
// 🇼🇸

// Gambia
// [ 'Banjul' ]
// 🇬🇲

// Saint Kitts and Nevis
// [ 'Basseterre' ]
// 🇰🇳

// Monaco
// [ 'Monaco' ]
// 🇲🇨

// Aruba
// [ 'Oranjestad' ]
// 🇦🇼

// Guinea-Bissau
// [ 'Bissau' ]
// 🇬🇼

// North Korea
// [ 'Pyongyang' ]
// 🇰🇵

// Paraguay
// [ 'Asunción' ]
// 🇵🇾

// Bermuda
// [ 'Hamilton' ]
// 🇧🇲

// Republic of the Congo
// [ 'Brazzaville' ]
// 🇨🇬

// United States Virgin Islands
// [ 'Charlotte Amalie' ]
// 🇻🇮

// Antigua and Barbuda
// [ "Saint John's" ]
// 🇦🇬

// United Kingdom
// [ 'London' ]
// 🇬🇧

// Mozambique
// [ 'Maputo' ]
// 🇲🇿

// Martinique
// [ 'Fort-de-France' ]
// 🇲🇶

// British Virgin Islands
// [ 'Road Town' ]
// 🇻🇬

// Somalia
// [ 'Mogadishu' ]
// 🇸🇴

// Montserrat
// [ 'Plymouth' ]
// 🇲🇸

// Northern Mariana Islands
// [ 'Saipan' ]
// 🇲🇵

// Singapore
// [ 'Singapore' ]
// 🇸🇬

// Turks and Caicos Islands
// [ 'Cockburn Town' ]
// 🇹🇨

// Nicaragua
// [ 'Managua' ]
// 🇳🇮

// Norfolk Island
// [ 'Kingston' ]
// 🇳🇫

// Saint Vincent and the Grenadines
// [ 'Kingstown' ]
// 🇻🇨

// Peru
// [ 'Lima' ]
// 🇵🇪

// Mexico
// [ 'Mexico City' ]
// 🇲🇽

// Equatorial Guinea
// [ 'Malabo' ]
// 🇬🇶

// Bosnia and Herzegovina
// [ 'Sarajevo' ]
// 🇧🇦

// Bahrain
// [ 'Manama' ]
// 🇧🇭

// Macau
// undefined
// 🇲🇴

// Barbados
// [ 'Bridgetown' ]
// 🇧🇧

// Uzbekistan
// [ 'Tashkent' ]
// 🇺🇿

// Réunion
// [ 'Saint-Denis' ]
// 🇷🇪

// China
// [ 'Beijing' ]
// 🇨🇳

// Malawi
// [ 'Lilongwe' ]
// 🇲🇼

// Zimbabwe
// [ 'Harare' ]
// 🇿🇼

// Spain
// [ 'Madrid' ]
// 🇪🇸

// Kenya
// [ 'Nairobi' ]
// 🇰🇪

// Pakistan
// [ 'Islamabad' ]
// 🇵🇰

// Christmas Island
// [ 'Flying Fish Cove' ]
// 🇨🇽

// Fiji
// [ 'Suva' ]
// 🇫🇯

// Eswatini
// [ 'Mbabane' ]
// 🇸🇿

// Jersey
// [ 'Saint Helier' ]
// 🇯🇪

// Taiwan
// [ 'Taipei' ]
// 🇹🇼

// Sri Lanka
// [ 'Sri Jayawardenepura Kotte' ]
// 🇱🇰

// Belarus
// [ 'Minsk' ]
// 🇧🇾

// United Arab Emirates
// [ 'Abu Dhabi' ]
// 🇦🇪

// Curaçao
// [ 'Willemstad' ]
// 🇨🇼

// Costa Rica
// [ 'San José' ]
// 🇨🇷

// Angola
// [ 'Luanda' ]
// 🇦🇴

// Uruguay
// [ 'Montevideo' ]
// 🇺🇾

// DR Congo
// [ 'Kinshasa' ]
// 🇨🇩

// Kuwait
// [ 'Kuwait City' ]
// 🇰🇼

// Turkey
// [ 'Ankara' ]
// 🇹🇷

// Mauritania
// [ 'Nouakchott' ]
// 🇲🇷

// Tuvalu
// [ 'Funafuti' ]
// 🇹🇻

// Panama
// [ 'Panama City' ]
// 🇵🇦

// Egypt
// [ 'Cairo' ]
// 🇪🇬

// Saint Lucia
// [ 'Castries' ]
// 🇱🇨

// Azerbaijan
// [ 'Baku' ]
// 🇦🇿

// Rwanda
// [ 'Kigali' ]
// 🇷🇼

// Senegal
// [ 'Dakar' ]
// 🇸🇳

// India
// [ 'New Delhi' ]
// 🇮🇳

// Iceland
// [ 'Reykjavik' ]
// 🇮🇸

// Suriname
// [ 'Paramaribo' ]
// 🇸🇷

// Bulgaria
// [ 'Sofia' ]
// 🇧🇬

// Micronesia
// [ 'Palikir' ]
// 🇫🇲

// Kosovo
// [ 'Pristina' ]
// 🇽🇰

// Sierra Leone
// [ 'Freetown' ]
// 🇸🇱

// Tunisia
// [ 'Tunis' ]
// 🇹🇳

// Cuba
// [ 'Havana' ]
// 🇨🇺

// Trinidad and Tobago
// [ 'Port of Spain' ]
// 🇹🇹

// Comoros
// [ 'Moroni' ]
// 🇰🇲

// Nauru
// [ 'Yaren' ]
// 🇳🇷

// Saint Helena, Ascension and Tristan da Cunha
// [ 'Jamestown' ]
// 🇸🇭

// Romania
// [ 'Bucharest' ]
// 🇷🇴

// Marshall Islands
// [ 'Majuro' ]
// 🇲🇭

// Nepal
// [ 'Kathmandu' ]
// 🇳🇵

// Ecuador
// [ 'Quito' ]
// 🇪🇨

// Gabon
// [ 'Libreville' ]
// 🇬🇦

// Saudi Arabia
// [ 'Riyadh' ]
// 🇸🇦

// Dominican Republic
// [ 'Santo Domingo' ]
// 🇩🇴

// Saint Pierre and Miquelon
// [ 'Saint-Pierre' ]
// 🇵🇲

// Faroe Islands
// [ 'Tórshavn' ]
// 🇫🇴

// Kiribati
// [ 'South Tarawa' ]
// 🇰🇮

// Vanuatu
// [ 'Port Vila' ]
// 🇻🇺

// Hungary
// [ 'Budapest' ]
// 🇭🇺

// South Georgia
// [ 'King Edward Point' ]
// 🇬🇸

// Yemen
// [ "Sana'a" ]
// 🇾🇪

// French Guiana
// [ 'Cayenne' ]
// 🇬🇫

// Seychelles
// [ 'Victoria' ]
// 🇸🇨

// American Samoa
// [ 'Pago Pago' ]
// 🇦🇸

// Cyprus
// [ 'Nicosia' ]
// 🇨🇾

// Libya
// [ 'Tripoli' ]
// 🇱🇾

// Israel
// [ 'Jerusalem' ]
// 🇮🇱

// Vietnam
// [ 'Hanoi' ]
// 🇻🇳

// Slovenia
// [ 'Ljubljana' ]
// 🇸🇮

// Iran
// [ 'Tehran' ]
// 🇮🇷

// Namibia
// [ 'Windhoek' ]
// 🇳🇦

// Greece
// [ 'Athens' ]
// 🇬🇷

// Lebanon
// [ 'Beirut' ]
// 🇱🇧

// Malaysia
// [ 'Kuala Lumpur' ]
// 🇲🇾

// Mongolia
// [ 'Ulan Bator' ]
// 🇲🇳

// Åland Islands
// [ 'Mariehamn' ]
// 🇦🇽

// Georgia
// [ 'Tbilisi' ]
// 🇬🇪

// Tajikistan
// [ 'Dushanbe' ]
// 🇹🇯

// Albania
// [ 'Tirana' ]
// 🇦🇱

// Dominica
// [ 'Roseau' ]
// 🇩🇲

// Turkmenistan
// [ 'Ashgabat' ]
// 🇹🇲

// Colombia
// [ 'Bogotá' ]
// 🇨🇴

// Heard Island and McDonald Islands
// undefined
// 🇭🇲

// Venezuela
// [ 'Caracas' ]
// 🇻🇪

// Guinea
// [ 'Conakry' ]
// 🇬🇳

// South Sudan
// [ 'Juba' ]
// 🇸🇸

// Ukraine
// [ 'Kyiv' ]
// 🇺🇦

// Slovakia
// [ 'Bratislava' ]
// 🇸🇰

// Italy
// [ 'Rome' ]
// 🇮🇹

// Falkland Islands
// [ 'Stanley' ]
// 🇫🇰

// Guadeloupe
// [ 'Basse-Terre' ]
// 🇬🇵

// Honduras
// [ 'Tegucigalpa' ]
// 🇭🇳

// Montenegro
// [ 'Podgorica' ]
// 🇲🇪

// Estonia
// [ 'Tallinn' ]
// 🇪🇪

// Brazil
// [ 'Brasília' ]
// 🇧🇷

// Mauritius
// [ 'Port Louis' ]
// 🇲🇺

// Thailand
// [ 'Bangkok' ]
// 🇹🇭

// Bolivia
// [ 'Sucre' ]
// 🇧🇴

// Sweden
// [ 'Stockholm' ]
// 🇸🇪

// Guernsey
// [ 'St. Peter Port' ]
// 🇬🇬

// Zambia
// [ 'Lusaka' ]
// 🇿🇲

// Eritrea
// [ 'Asmara' ]
// 🇪🇷

// Kazakhstan
// [ 'Nur-Sultan' ]
// 🇰🇿

// Morocco
// [ 'Rabat' ]
// 🇲🇦

// Jordan
// [ 'Amman' ]
// 🇯🇴

// Myanmar
// [ 'Naypyidaw' ]
// 🇲🇲

// San Marino
// [ 'City of San Marino' ]
// 🇸🇲

// Palau
// [ 'Ngerulmud' ]
// 🇵🇼

// Mayotte
// [ 'Mamoudzou' ]
// 🇾🇹

// United States Minor Outlying Islands
// [ 'Washington DC' ]
// 🇺🇲

// Czechia
// [ 'Prague' ]
// 🇨🇿

// Jamaica
// [ 'Kingston' ]
// 🇯🇲

// Kyrgyzstan
// [ 'Bishkek' ]
// 🇰🇬

// Sudan
// [ 'Khartoum' ]
// 🇸🇩

// São Tomé and Príncipe
// [ 'São Tomé' ]
// 🇸🇹

// Gibraltar
// [ 'Gibraltar' ]
// 🇬🇮

// Niger
// [ 'Niamey' ]
// 🇳🇪

// Caribbean Netherlands
// [ 'Kralendijk' ]
// 🇧🇶

// Australia
// [ 'Canberra' ]
// 🇦🇺

// Luxembourg
// [ 'Luxembourg' ]
// 🇱🇺

// Sint Maarten
// [ 'Philipsburg' ]
// 🇸🇽

// Lesotho
// [ 'Maseru' ]
// 🇱🇸

// Poland
// [ 'Warsaw' ]
// 🇵🇱

// Guam
// [ 'Hagåtña' ]
// 🇬🇺

// Japan
// [ 'Tokyo' ]
// 🇯🇵

// Liberia
// [ 'Monrovia' ]
// 🇱🇷

// Cape Verde
// [ 'Praia' ]
// 🇨🇻

// Isle of Man
// [ 'Douglas' ]
// 🇮🇲

// Burundi
// [ 'Gitega' ]
// 🇧🇮

// Papua New Guinea
// [ 'Port Moresby' ]
// 🇵🇬

// Uganda
// [ 'Kampala' ]
// 🇺🇬

// Afghanistan
// [ 'Kabul' ]
// 🇦🇫

// Wallis and Futuna
// [ 'Mata-Utu' ]
// 🇼🇫

// Central African Republic
// [ 'Bangui' ]
// 🇨🇫

// Vatican City
// [ 'Vatican City' ]
// 🇻🇦

// France
// [ 'Paris' ]
// 🇫🇷

// United States
// [ 'Washington, D.C.' ]
// 🇺🇸

// Timor-Leste
// [ 'Dili' ]
// 🇹🇱

// Botswana
// [ 'Gaborone' ]
// 🇧🇼

// Austria
// [ 'Vienna' ]
// 🇦🇹

// Belgium
// [ 'Brussels' ]
// 🇧🇪

// Greenland
// [ 'Nuuk' ]
// 🇬🇱

// Portugal
// [ 'Lisbon' ]
// 🇵🇹

// Laos
// [ 'Vientiane' ]
// 🇱🇦

// Guatemala
// [ 'Guatemala City' ]
// 🇬🇹

// Liechtenstein
// [ 'Vaduz' ]
// 🇱🇮

// Solomon Islands
// [ 'Honiara' ]
// 🇸🇧

// Switzerland
// [ 'Bern' ]
// 🇨🇭

// Palestine
// [ 'Ramallah', 'Jerusalem' ]
// 🇵🇸

// Ireland
// [ 'Dublin' ]
// 🇮🇪

// Saint Martin
// [ 'Marigot' ]
// 🇲🇫

// Syria
// [ 'Damascus' ]
// 🇸🇾

// Bangladesh
// [ 'Dhaka' ]
// 🇧🇩

// Djibouti
// [ 'Djibouti' ]
// 🇩🇯

// Ghana
// [ 'Accra' ]
// 🇬🇭

// Denmark
// [ 'Copenhagen' ]
// 🇩🇰

// Oman
// [ 'Muscat' ]
// 🇴🇲

// Bouvet Island
// undefined
// 🇧🇻

// Bahamas
// [ 'Nassau' ]
// 🇧🇸

// Algeria
// [ 'Algiers' ]
// 🇩🇿

// Haiti
// [ 'Port-au-Prince' ]
// 🇭🇹

// Ivory Coast
// [ 'Yamoussoukro' ]
// 🇨🇮

// El Salvador
// [ 'San Salvador' ]
// 🇸🇻

// Netherlands
// [ 'Amsterdam' ]
// 🇳🇱

// Philippines
// [ 'Manila' ]
// 🇵🇭

// Grenada
// [ "St. George's" ]
// 🇬🇩

// Norway
// [ 'Oslo' ]
// 🇳🇴

// Cook Islands
// [ 'Avarua' ]
// 🇨🇰

// Andorra
// [ 'Andorra la Vella' ]
// 🇦🇩

// Cocos (Keeling) Islands
// [ 'West Island' ]
// 🇨🇨

// Mali
// [ 'Bamako' ]
// 🇲🇱

// Tokelau
// [ 'Fakaofo' ]
// 🇹🇰

// Tonga
// [ "Nuku'alofa" ]
// 🇹🇴

// Benin
// [ 'Porto-Novo' ]
// 🇧🇯

// Togo
// [ 'Lomé' ]
// 🇹🇬

// Madagascar
// [ 'Antananarivo' ]
// 🇲🇬

// Anguilla
// [ 'The Valley' ]
// 🇦🇮

// Canada
// [ 'Ottawa' ]
// 🇨🇦

// Armenia
// [ 'Yerevan' ]
// 🇦🇲

// British Indian Ocean Territory
// [ 'Diego Garcia' ]
// 🇮🇴

// Nigeria
// [ 'Abuja' ]
// 🇳🇬

// Belize
// [ 'Belmopan' ]
// 🇧🇿

// Saint Barthélemy
// [ 'Gustavia' ]
// 🇧🇱

// Lithuania
// [ 'Vilnius' ]
// 🇱🇹

// New Caledonia
// [ 'Nouméa' ]
// 🇳🇨

// Russia
// [ 'Moscow' ]
// 🇷🇺

// Cayman Islands
// [ 'George Town' ]
// 🇰🇾

// Moldova
// [ 'Chișinău' ]
// 🇲🇩

// Croatia
// [ 'Zagreb' ]
// 🇭🇷

// Serbia
// [ 'Belgrade' ]
// 🇷🇸

// Malta
// [ 'Valletta' ]
// 🇲🇹

// French Polynesia
// [ 'Papeetē' ]
// 🇵🇫

// Latvia
// [ 'Riga' ]
// 🇱🇻

// Chile
// [ 'Santiago' ]
// 🇨🇱

// Finland
// [ 'Helsinki' ]
// 🇫🇮

// Germany
// [ 'Berlin' ]
// 🇩🇪

// New Zealand
// [ 'Wellington' ]
// 🇳🇿

// Antarctica
// undefined
// 🇦🇶

// Indonesia
// [ 'Jakarta' ]
// 🇮🇩

// Maldives
// [ 'Malé' ]
// 🇲🇻

// Pitcairn Islands
// [ 'Adamstown' ]
// 🇵🇳

// Cameroon
// [ 'Yaoundé' ]
// 🇨🇲

// Western Sahara
// [ 'El Aaiún' ]
// 🇪🇭

// Brunei
// [ 'Bandar Seri Begawan' ]
// 🇧🇳

// Guyana
// [ 'Georgetown' ]
// 🇬🇾

// Tanzania
// [ 'Dodoma' ]
// 🇹🇿

// Chad
// [ "N'Djamena" ]
// 🇹🇩

// French Southern and Antarctic Lands
// [ 'Port-aux-Français' ]
// 🇹🇫

// Cambodia
// [ 'Phnom Penh' ]
// 🇰🇭

// Qatar
// [ 'Doha' ]
// 🇶🇦

// Argentina
// [ 'Buenos Aires' ]
// 🇦🇷

// Iraq
// [ 'Baghdad' ]
// 🇮🇶

// Bhutan
// [ 'Thimphu' ]
// 🇧🇹

// Niue
// [ 'Alofi' ]
// 🇳🇺

// South Korea
// [ 'Seoul' ]
// 🇰🇷

// Hong Kong
// [ 'City of Victoria' ]
// 🇭🇰

// North Macedonia
// [ 'Skopje' ]
// 🇲🇰

// Burkina Faso
// [ 'Ouagadougou' ]
// 🇧🇫

// Puerto Rico
// [ 'San Juan' ]
// 🇵🇷

// Ethiopia
// [ 'Addis Ababa' ]
// 🇪🇹


// [Done] exited with code=0 in 4.033 seconds

