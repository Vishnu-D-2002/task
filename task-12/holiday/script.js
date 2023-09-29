            // Fetch the list of countries and populate the dropdown
            fetch("https://holidayapi.com/v1/countries?pretty&key=2ab7fc88-c0d4-49c3-a86c-6e4e4642d84a")
                .then(res => res.json())
                .then(ans => {
                    let selectDrop = document.getElementById('countries');
                    let res = ans.countries;
                    res.forEach(country => {
                        let option = document.createElement('option');
                        option.innerHTML =country.name;
                        option.value = `${country.code}`;
                        selectDrop.appendChild(option);
                        // console.log(option)
                    });
                });

            // Add event listener to the SUBMIT button
            let submitBtn = document.getElementById('submitBtn');
            submitBtn.addEventListener('click', () => {
                // Get the selected country code
                let selectedCountryCode = document.getElementById('countries').value;

                // Fetch and display holidays for the selected country
                fetch(`https://holidayapi.com/v1/holidays?country=${selectedCountryCode}&year=2022&pretty&key=2ab7fc88-c0d4-49c3-a86c-6e4e4642d84a`)
                    .then(res => res.json())
                    .then(ans => {
                        let dispDiv = document.getElementById('dispDiv');
                        dispDiv.innerHTML = ''; // Clear previous content
                        console.log(ans)
                        let Holidays = ans.holidays;

                        Holidays.forEach(holiday => {
                            // console.log(holiday.name)
                            let para=document.createElement('p');
                            para.innerHTML=`<b>Holiday Name :<i> ${holiday.name}</i></b><br>
                                            <b>Holiday Date :<i> ${holiday.date}</i></b><br>
                                            <b>Holiday Day :<i> ${holiday.weekday.date.name}</i></b>`
                            dispDiv.appendChild(para);

                        })
                    });
            });