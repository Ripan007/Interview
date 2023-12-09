/**
* * How JavaScript Works 🔥& Execution Context:
- everything in javascript happen inside an Execution Context🍀(assume it a big box / container in which the whole javascript  code gets executed)
- Execution context : two component => memory component / variable environment : code component / thread of execution(it is like a thread where code executed one line at a time)
- memory => store variable/functions => key value pair
- code => code is executed one line at  a time
- javascript is a  synchronous  single threaded language 🍀
* * How JavaScript Code is executed? ❤️& Call Stack:
var n = 2
function square(num) {
  var ans = num * num
  return ans
}

var square2 = square(n)
var square4 = square(4)

- ones code get executed => global execution context created => further sub execution context for different program
- execution context : two component / two phase
- memory creation / memory component / phase 1:(code executed line by line) in case of variable special memory (undefined) get allocated / in case  of functions whole code get copied
- phase 2 : memory allotment  / creation of execution context / repetition / replacement of special  memory (undefined) with original data
- callStack : call stack maintains the order of execution of execution contexts 🍀
- 👍summary : as soon as javascript code  get executed , global execution created / pushed into empty callStack , global execution context(two phase : memory / code) created , codes gets scanned / run line by line , encounter => variable(special memory (undefined) get allocated) , in case of functions  whole code gets copied , after completion of scanning the whole code , variable are allocated with the  data they have , in case of function  call/invoke =>  execution gets created , and the whole process of memory allocation / code execution get repeated until the code  gets executed👍
👍 callStack(manage execution context) : initially its empty => codes invoke , global execution get pushed into the callStack , further function gets call and execution created for those functions , gets pushed into the callStack , ones those function gets executed , those execution context  are removed from the  callStack , at last global execution context also removed and call stack get empty👍
* * Hoisting in JavaScript 🔥(variables & functions):
- hoisting is a phenomenon in JavaScript by which we could able to access variables / functions before we initialize it  / put some value in it => without getting  any error
var x = 2
function getName() {
  console.log('welcome to javascript')
}
getName()
console.log(x)
* * How functions work in JS ❤️ & Variable Environment:
var x = 1
a()
b()
console.log(x)

function a() {
  var x = 10
  console.log(x)
}

function b() {
  var x = 20
  console.log(x)
}
* * SHORTEST JS Program 🔥window & this keyword:
- this points to the window object
console.log(window === this)

var x = 10;
function a(){
    var  a = 10
    console.log(a);
}

console.log(this.a);
console.log(window.a);

* * undefined vs not defined in JS 🤔:
console.log(a)
console.log(x)
var a
console.log(a)
a = 10
console.log(a)

* * The Scope Chain, 🔥Scope & Lexical Environment:
- where we can access  specific  variable and functions in a  code => scope
- lexical environment : where the code present physically
function a() {
  c()
  function c() {
    console.log(b)
  }
}
var b = 10
a()
function a() {
  b()
  function b() {
    console.log(c)
  }
}

const c = 10
a()
* * let & const in JS 🔥Temporal Dead Zone:
- temporal dead zone => the time between  ( initial(hoisted) - put some value in it )
- let & const are hoisted => temporal dead zone
console.log(a)
var a = 10
* * BLOCK SCOPE & Shadowing in JS 🔥:
var a = 120
let b = 20
{
  var a = 10
  let b = 19
  const c = 20
  console.log(a)
  console.log(b)
  console.log(c)
}

console.log(a)
console.log(c)
* * Closures in JS 🔥:





*/

function x() {
  var a = 10
  function y() {
    console.log(a)
  }
  y()
}

x()
