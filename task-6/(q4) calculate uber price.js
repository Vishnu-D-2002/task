//  calculate the uber prize

class uber {
    constructor(km) {
        this.km = km;
    }
    uberPrice() {
        let basePrice = 200;
        if (this.km <= 5) {
            console.log("Rs: 200");
        }
        else if (this.km > 5) {
            this.km = this.km - 5;
            let res = this.km * 60 + basePrice;
            console.log(res);
        }
    }
    availability() {
        console.log("I'm avilble within 15minutes of time")
    }
}

let vishnu = new uber(10);

// for calculating the price of uber
vishnu.uberPrice();

// for accessing the other facilities of uber
vishnu.availability();






// output :

// [Running] node "c:\tasks\task-7\(q4) calculate uber price.js"
// 500
// I'm avilble within 15minutes of time

// [Done] exited with code=0 in 0.231 seconds