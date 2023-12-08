/**
* * How JavaScript Works 🔥& Execution Context:
- everything in javascript happen inside an Execution Context🍀(assume it a big box / container in which the whole javascript  code gets executed)
- Execution context : two component => memory component / variable environment : code component / thread of execution(it is like a thread where code executed one line at a time)
- memory => store variable/functions => key value pair
- code => code is executed one line at  a time
- javascript is a  synchronous  single threaded language 🍀
* * How JavaScript Code is executed? ❤️& Call Stack:
- ones code get executed => global execution context created => further sub execution context for different program
- execution context : two component / two phase
- memory creation / memory component / phase 1: in case of variable special memory (undefined) get allocated / in case  of functions whole code get copied
- phase 2 : memory allotment  / creation of execution context / repetition / replacement of special  memory (undefined) with original data


*/

var n = 2
function square(num) {
  var ans = num * num
  return ans
}

var square2 = square(n)
var square4 = square(4)
