/*
1. what  is  the difference between java and javascript ?

* Java is an object-based, strongly typed language. It’s used in app development and runs on a virtual machine. It’s also known for block scoping and thread-based concurrency, which consumes more memory

* JavaScript is an object-oriented, dynamically typed language. JavaScript is used for web applications in browsers and Node.js environments. It utilizes function-scoping event-based concurrency and is more memory-efficient. This makes it ideal for web pages

2. What are the seven JavaScript data types?
* string ,number ,bigint , boolean , undefined  , null, symbol, object

3. What is JSON in JavaScript?
* In practice, JSON operates through two key processes: parsing and stringification.
* JavaScript Object Notation (JSON) is a standard text-based format in web applications. Its function is to represent structured data using JavaScript object syntax. It transmits data between a server and a client, enabling seamless data display on web pages.
* This dual functionality makes JSON a versatile tool in web development.

4. Explain how cookies work in JavaScript?
* Cookies in JavaScript function as a way to store user information (like usernames) between web sessions.
* allows the server to retrieve the stored information to enable a seamless user experience.

5. Explain what is “use strict” in JavaScript ?
* This mode applies more rigorous parsing and error handling to your code during runtime. It’s a valuable tool for writing cleaner code and detecting potential errors and bugs that could be easily overlooked in normal mode, ensuring higher code quality and reliability.

6. Explain hoisting in JavaScript ?
* default behavior where the declarations of variables, functions, classes, or imports are conceptually moved to the top of their scope before executing the code
* concept is crucial for understanding how JavaScript interprets and executes code

7. When do we use Weakmap in JavaScript?
* WeakMap in JavaScript is a specialized type of Map used for associating data with objects (map keys) without preventing garbage collection of those objects

8. Explain non-strict mode vs. strict mode in JavaScript ?
* Strict mode in JavaScript enhances error detection and enforces more rigorous coding standards. This results in improved code quality and reduced bugs. It prohibits duplicate arguments and the creation of global variables by mistake
* he non-strict mode might initially appear more lenient but can introduce unpredictable behaviors and potential security risks

*/

function strictMode() {
  'use strict'
  varOne = 100
  console.log(`${varOne}`)
}

strictMode()
