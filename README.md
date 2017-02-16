# JavaScript_period_1
Excercises JavaScript, ES 6, Node.js, Babel and Webpack

#### Explain differences between Java and JavaScript. Fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
JavaScript, the programming language for behavior and interactivity, only works inside another application, usually the web browser, they all have a JavaScript engine inside them. 
JavaScript is limited, it doesn't have access to the file system of the computer that it's running on. There are no words in JavaScript to open or save local files because that would be a security risk. 
JavaScript contains a much smaller and simpler set of commands than does Java.

#### Explain the two strategies for improving JavaScript: ES6 (es2005) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers

#### Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
Node.js is an open source project designed to help you write JavaScript programs that talk to networks, file systems or other I/O (input/output, reading/writing) sources. That's it! It is just a simple and stable I/O platform that you are encouraged to build modules on top of.

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

