//   class circle

class circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    setColor(newcolor) {
        this.color = newcolor;
    }
    getColor() {
        return this.color;
    }
    setRadius(newradius) {
        this.radius = newradius;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        console.log(`"Circle [radius = ${this.radius} , color = ${this.color}]"`)
    }
}

let a = new circle(20, 'red');

a.setColor('greeen');
a.setRadius(25);
console.log(a.getArea());
console.log(a.getColor());
console.log(a.getRadius());
console.log(a.getCircumference());
a.toString();






// output :

// [Running] node "c:\tasks\task-6\(q2) class circle.js"
// 1963.4954084936207
// greeen
// 25
// 157.07963267948966
// "Circle [radius = 25 , color = greeen]"

// [Done] exited with code=0 in 0.207 seconds

