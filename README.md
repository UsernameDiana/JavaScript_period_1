# JavaScript_period_1
Excercises JavaScript, ES 6, Node.js, Babel and Webpack

#### Explain differences between Java and JavaScript. Fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
JavaScript, the programming language for behavior and interactivity, only works inside another application, usually the web browser, they all have a JavaScript engine inside them. 
JavaScript is limited, it doesn't have access to the file system of the computer that it's running on. There are no words in JavaScript to open or save local files because that would be a security risk. 
Compiling means computing from human readable code to computure readable code.  
Key differences:
* Java is OO programming language while JavaScript is OO scripting language.
* Java creates applications that run on a virtual machine or browser, while JS runs on browser only.
* Java needs to be compiled, JS is all in texts
* Both requiere different plugins for each.
* with scripting we can execute small part of the code, but compiler has to compile all.

#### Explain the two strategies for improving JavaScript: ES6 (es2005) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers
TypeScript is a superset of JavaScript. ES2015 is the evolution of ES5. This relationship makes it easier to learn them progressively.  
So what does TypeScript offer over ES2015?
* Types
* Interfaces
* Future ES2016+ features

#### Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
Node.js is an open source project designed to help you write JavaScript programs that talk to networks, file systems or other I/O (input/output, reading/writing) sources. That's it! It is just a simple and stable I/O platform that you are encouraged to build modules on top of.  
Node's Package Manager (npm) - online repository (the worlds largest ;-) for publishing open-source Node.js projects.

#### Explain about the Event Loop in Node.js
An event loop, is a loop that waits for and dispatches events in a program.
The operating system owns the event queue. The event loop pumps events from the event queue into the program for processing. So the event loop is the link between your program and the operating system.

#### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises


#### Explain the purpose of “use strict” and also Linters, exemplified with ESLint.
It is a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.
Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).

#### Variable/function-Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top.
In JavaScript, a variable can be declared after it has been used.
JavaScript only hoists declarations, not initializations.

#### this in JavaScript and how it differs from what we know from Java/.net.
In JavaScript this always refers to the “owner” of the function we're executing, or to the object that a function is a method of.
In Java, this refers to the current instance object on which the method is executed.

#### Function Closures and the JavaScript Module Pattern
A closure is a special kind of object that combines two things:
A function
The environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created
Global variables can be made local (private) with closures. A closure is a function having access to the parent scope, even after the parent function has closed.

#### Immediately-Invoked Function Expressions (IIFE)
IIFE executes immediately after it’s created.
The first pair of parentheses (function(){...}) turns the code within (in this case, a function) into an expression, and the second pair of parentheses (function(){...})() calls the function that results from that evaluated expression.
This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.

#### JavaScripts Prototype
Every JavaScript object has a prototype. The prototype is also an object.
Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.
With a constructor function, you can use the new keyword to create new objects from the same prototype:
var newPerson = new Person("John", "Doe", 16);
The constructor function is the prototype for Person objects.

#### User defined Callback Functions
In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. Because functions are first-class objects, we can pass a function as an argument in another function and later execute that passed-in function or even return it to be executed later. This is the essence of using callback functions in JavaScript. 

#### Provide examples and explain the es2005 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

#### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

#### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

#### Provide examples with es6, running in a browser, using Babel and Webpack
