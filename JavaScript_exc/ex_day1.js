'use strict'
// 1
//Use the filter method to create a new array with only names of length <=3.

let names = ['diana', 'justin', 'diana', 'justin'];

let namesFilter = names.filter(function (name) {
  return name.length <= 3
});


//Using the map method:
//create a new array with all names uppercased.

let namesMap = names.map(function (name) {
  return name.toUpperCase;
});



// 2
//Implement a function: myFilter(array, callback)

function myFilter(array, callback) {
  let newFilteredArray = [];
  array.forEach(function (name) {
    let include = callback(name);
    if (include) {
      newFilteredArray.push(name);
    }
  });
  return newFilteredArray;
}

let namesTest = myFilter(names, function (name) {
  return name.length >= 3
});


//Implement a function: myMap(array, callback)that, provided an array and a callback

function myMap(array, callback) {
  let newMapArray = [];
  each(array, function (name, index) {
    newMapArray.push(callback(name, index))
  });
  return newMapArray;
}

let namesTest2 = myMap(names, function (name) {
  return name.toUpperCase;
});


// 3
//All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype
//Create a new version of the two functions (without the array argument) 
//which you should add to the Array prototype property so they can be called on any array

let pets = ['cat', 'dog', 'bird', 'hamster'];

Array.prototype.myFilter = myFilter;
let newArrayFilter = pets.myFilter(function (pet) {
  return pet.length <= 3;
});

Array.prototype.myMap = myMap;
let newArrayMap = pets.myMap(function (pet) {
  return pet.toUpperCase;
});


// 4
// A
//Use map() to create the <li>’s for an unordered list and eventually a string 
//(use join() to get the string of <li>’s):

let list = pets.map(function (pet) {
  return "<li>" + pet + "</li>"
});

let listStr = list.join(" ");
let list2 = `<ul><li> ${listStr} </li></ul>`

console.log(list2);


// B
//Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
var persons = [{ name: "diana", phone: "1234567" },
{ name: "justin", phone: "675843" },
{ name: "erika", phone: "98547" },
{ name: "jakob", phone: "79345" }];

let listPersons = persons.map(function (person){
return '<li>' + person + '</li>'
});

let personsStr = listPersons.join('');
let listPersons2 = `<ul><li> ${personsStr} </li></ul>`

console.log(listPersons2);

// C
//Create a single html-file and test the two examples given above.
//Hint: add a single div with an id=names, and use DOM-manipulation 
//(document.getElementById.innerHTML = theString) to add the ul or table.

console.log(document.getElementById(elementId, day1).innerHTML = listPersons2);

// D 
//Add a button with a click-handler and use the filter method to find only names with a length >3
//Update the ul and/or the table to represent the filtered data.
