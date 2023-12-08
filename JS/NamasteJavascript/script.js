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

*/
