
let displayScreen = function(num, callback){
    if (num === -1) {
        callback();
    }
    else {
        setTimeout(() => {
            document.getElementById('display').innerText = num;
            displayScreen((num - 1), callback);
        },1000)
    }
}

displayScreen(10,() => {
    document.getElementById('display').innerHTML =
     `<p><span id="happy">HAPPY</span></p>
    <p><span id="independence">INDEPEDENCE</span> </p>
    <p><span id="day">DAY</span></p>`
    //  `HAPPY
    //  INDEPENDENCE
    // DAY`;
}); 