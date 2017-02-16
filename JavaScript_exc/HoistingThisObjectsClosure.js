'use strict'
//HOISTING
// Hoisting is JavaScript's default behavior of moving all declarations to the top
// of the current scope (to the top of the current script or the current function).
var x; // Declare x
x = 5; // Assign 5 to x

function hoistingDemo1() {
  console.log("Value of myCoolObject: " + myCoolObject);

  if (!myCoolObject) {
    var myCoolObject = {value: "Wau, I'm cool"};
    console.log(myCoolObject.value);
  }
}

// this is how it is read in JS, the myCoolObject is moved to top when read
function hoistingDemo1() {
  var myCoolObject;
  alert("Value of myCoolObject: " + myCoolObject);

  if (!myCoolObject) {
    myCoolObject= {value: "Wau, I'm cool"};//the declaration is hoisted
    alert(myCoolObject.value);
  }
}

// EXAMPLE 2
function hoistingDemo2(){
  f1(); // will print out
  f2(); // undefiend
  function f1(){
    console.log("I'm f1");
  }
  var f2 = function(){
    console.log("Yes, but I'm f2");
  }
}


// this in JS
// setting this using either call(), apply() or bind().
var comic = {
    firstName:"Donald",
    lastName: "Duck",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
comic.fullName();         // Will return "Donald Duck"

// this in Java 
//public person(String name, int age) {
//        this.name = name;
//        this.age = age;
//    }

// call() and this
//call attaches this into function and executes the function immediately:
var greetings = {  
  name: "Donald Duck",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}
comic.hello.call(greetings, "world"); // output: "Donald Duck says hello world"

// bind() and this
//bind attaches this into function and it needs to be invoked separately like this:
var greetings2 = {  
  name: "Donald Duck",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}
var helloFunc = greetings2.hello.bind(greetings2);
helloFunc("world");  // output: "Donald Duck says hello world"

// apply() and this
function personContainer() {
  var person22 = {  
     name: "Donald Duck",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  },
  person22.hello.apply(person22, arguments);
}personContainer("world", "mars"); 
// output: "Donald Duck says hello mars", note: arguments[0] = "world" , arguments[1] = "mars”  


//OBJECTS
// 1
me = {} // Declare
me.hobby = 'swimming';
me.age = 11;
me.hometown = 'Riga';
me.gender = 'girl';
me.nickname = 'kid';

delete me.age;
for (var init in me) { // itterates over an object
  console.log(init);
}
// Using hasOwnProperty to test for a property's existence
o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // returns true
o.hasOwnProperty('toString');         // returns false
o.hasOwnProperty('hasOwnProperty');   // returns false

//2
//Constructor function always start with a capital letter
//Construction function is a function that uses THIS
function Diana(fname, lname, age){
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}
var di = new Diana('diana', 'strele', 31); // making an instance of Diana
// adds property to Diana constructor, that can be called on a new Diana object instance
Diana.prototype.showDiana = function(){
  console.log("Diana object has " + this.fname +" " + this.lname+ " " +this.age)
}
di.showDiana();

// 3
function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}



// CLOSURE
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}
var myFunc = makeFunc();
//myFunc(); // this has become a CLOSURE

// Implement closeure counter, reusable function using the Module pattern
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  } // returns an object with 3 statements due to {} brakets
};
var counter1 = makeCounter();
var counter2 = makeCounter();
//gets to the local variable privateCounter
//counter1.increment();
//counter1.increment();
//lert(counter1.value()); /* Alerts 2 */