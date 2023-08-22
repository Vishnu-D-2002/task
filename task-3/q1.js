// How to campare two json have the same properties without order

let a = {name: "person 1", age: 5};
let b = { age: 5, name: "person 1" };

//key pairs are taken and then sorted
let s1 = Object.keys(a).sort();
let s2 = Object.keys(b).sort();

//sorted keys are converted to string using JSON.stringify
let c =JSON.stringify(s1);
let d = JSON.stringify(s2);

if (c == d)
    console.log("true");
else
    console.log("false");