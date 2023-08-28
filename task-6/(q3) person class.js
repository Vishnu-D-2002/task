// Write a "person" class to hold all the details


class person{
    constructor(name, age, gender ,qualification) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
    }

    display() {
        console.log(`
 Name   : ${this.name}
 Age    : ${this.age}
 Gender : ${this.gender}`)
    }

    passedOut() {
        console.log(`passed out in 2023 in IIT madras university`);
    }
}
let person1 = new person('vishnu', 21, 'male', 'BE');

// this will return the class name and in the object format
// we can also call person1.age ,person1.name individual for printing
console.log(person1);

// by using methods we can call the persons information
person1.display();
person1.passedOut();









//   output :


// [Running] node "c:\tasks\task-7\(q3) person class.js"
// person { name: 'vishnu', age: 21, gender: 'male', qualification: 'BE' }

//  Name   : vishnu
//  Age    : 21
//  Gender : male
// passed out in 2023 in IIT madras university

// [Done] exited with code=0 in 0.224 seconds