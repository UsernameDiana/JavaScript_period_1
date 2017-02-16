// 6
let fName = "Kurt", lName = "Wonnegut", age = 98;
//In ES2015 
let obj = { fName, lName, age };
// console.log(obj.fName + " "+ obj.lName + "-" + age)


// 7
//A one-liner array to swap two values
let fName1 = "Kurt", lName1 = "Wonnegut";
[fName1, lName1] = [lName1, fName1];
console.log("First: " + fName1 + "Last: " + lName1);

//B Object Matching Shorthand notation
function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}
//created an object from some of the properties of getPerson()
var {lastName, phone} = getPerson();
console.log(lastName, phone);


// 8
//reusable es2015 module
const f = require('./ex_ES6_1-5.js');
console.log(f.myFunction(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));


// 9
//A - Creating a class with constructor, getter/setter and toString functions
class Shape {
    constructor(color) {
        this.color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        return `The shape's color is ${this.color} `;
    }
}
let myShape = new Shape('Purple');
console.log(myShape.toString());
myShape.setColor('Blue');
console.log("Get Color: " + myShape.color);

//B Inheritance
class Circle extends Shape {
    constructor(color, radius) { // takes color and radius
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI; //A = PI(r^2)
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius; // P = 2*PI*r OVERWRITTES
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
}
let circle = new Circle('Blue', 6);

//C
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius)
        this.height = height;
    }
    getArea() {
        this.area = 1;
        return this.area;
    }
    getPerimeter() {
        return undefined; // OVERWRITTES
    }
    getRadius() {
        return this.radius;
    }
    getVolume() {
        this.volume = this.height * (Math.pow(this.radius, 2) * Math.PI);
        return this.volume; //V = A*h
    }
    getHeight() {
        return this.radius;
    }
    setHeight(height) {
        this.height = height;
    }
}
let cyl = new Cylinder("Black", 8, 9);

// D
console.log("Height:" + cyl.height)
console.log("Area:" + cyl.area)

// 10-11
//Generator function
function* makeNames() {
    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];

    //an infinite iterator
    while (true) {
        let rnd1 = Math.floor((Math.random() * 4) + 1);
        let rnd2 = Math.floor((Math.random() * 4) + 1);
        let person = yield { fName: firstNames[rnd1], lName: lastNames[rnd2] }; //gets a random firstNames and lastNames
    }
}

let index = 0;
for (let name of makeNames()) {
    console.log(name);
    if (index++ === 5) {
        break;
    }
}