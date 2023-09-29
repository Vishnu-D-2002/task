            let body = document.getElementById('body');

            async function explain(num) {
                const explainDiv = document.querySelectorAll(".explainDiv")[num - 1];
                explainDiv.innerHTML = ""; // Clear previous explanations

                fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
                    .then(res => res.json())
                        .then(data => {
                            let explain = document.createElement('div');
                            explain.innerHTML = `<hr>
                        <h3 class="red">${data.sect_tam}</h3>
                        <h3>${data.chap_tam}</h3>
                        <p>${data.tam_exp}</p>
                        <h3 class="red">${data.sect_eng}</h3>
                        <h3>${data.chap_eng}</h3>
                        <p>${data.eng}</p>
                        <p>${data.eng_exp}</p><hr>`;
                            explainDiv.appendChild(explain);
                        });

                explainDiv.style.display = "block"; // Show the explanation div
            }

            async function displayKural() {
                try {
                    for (let num = 1; num <= 1330; num++) {
                        let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`);
                            res = await res.json();

                        let full = document.querySelector(".full")
                        let para = document.createElement('p')
                        para.innerHTML = `
                    <div>
                        <h3>${res.number} : ${res.line1}</h3>
                        <h3>${res.line2}</h3>
                        <button class="expBtn btn btn-info" onclick="explain(${res.number})">Explanation</button><br>
                        <div class="explainDiv"></div><br><br>
                    </div>`;
                        full.appendChild(para)
                    }
                } catch (error) {
                    console.log('error in fetching', error);
                }
            }

            displayKural();