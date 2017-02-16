// 1
//Constant
//Constants are block-scoped
//The value of a constant cannot change and it can't be redeclared. 
const PI = 3.141593
PI > 3.0 


//Scoping
//Declared with let and const, have block scope.
//Variables declared with var do not have block scope.
let a=[1,2,3]
let b=[1,4]
for (let i = 0; i < a.length; i++) {
    let x = a[i]
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
//The x, y is limited in scope to the block in which its defined.
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
    // console.log("INDEX:" + i + "--> " + callbacks[i]())
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;

//Block statement allows to use multiple statements where JavaScript expects only one statement. 
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}



// 2
// A 
// ECMA2015 supports arrow functions instead of writing function(){...}
var evens = [2,4,10,16];
var odds = evens.map(v => v+1)
console.log(odds);
//as a result, all the elements are undefined. 
//The statement block behaves like a normal function body. 
//the expression is always implicitly returned.
var odds = evens.map(v => {
  return v+1 
});
console.log(odds);

// 3
//A. ES6  Use `.bind`: 
// bind the value of "this" on the method, to try and force it to be what you want
// ES5 can create a reference to this as self in Angular 
function Numbers(numbs) {
  this.nums = numbs;
  this.fives = [];
  this.nums.forEach(function (v) {
    if (v % 5 === 0) {
      this.fives.push(v);
    }
  }.bind(this));
}
var numbers = new Numbers([1,3,5,10,14,20]);
console.log(numbers.fives);

// --- OR --- 
    // the scope of the constructor function is bound to this lexical scope.
function Numbers1(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(v => {
        if(v % 5 === 0){
            this.fives.push(v)
        }}
    )};
var numbers1 = new Numbers1([1,3,5,10,14,20]);
console.log(numbers1.fives);


var counter = {
    count : 0 ,
    inc : () =>this.count++
}
var func = counter. inc ; //Store "reference" to inc
func();
console.log ( counter.count ); // zero
counter.inc();
console.log( counter.count ); //Now one
//The ES6 arrow function syntax will always override any previously bound



// 4
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message)



// 5
// A
function f(x,y,bln,z,str,arr,date, obj){
  return `Sum: ${x + y}
rest value 1 is a: ${bln.constructor.name}
rest value 2 is a: ${z.constructor.name}
rest value 3 is a: ${str.constructor.name}
rest value 4 is a: ${arr.constructor.name}
rest value 5 is a: ${date.constructor.name}
rest value 6 is a: ${obj.constructor.name}`
}
console. log ( f( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));

//B testing with code below
var rest = [ true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}];
var restParams = [ ... rest];
console. log ( f( 5 , 2 ,... restParams));

//C produces an array of characters from the returning value of function f
var chars = [... f( 5 , 2 ,... restParams )];
console.log(chars);
