/*
* * Big O' => how well the problem is solved
* * what is good code ? readable , scalable (Big O)
- how much time the code take to run
1	    Constant	statement, one line of code
log(n)	Logarithmic	Divide and conquer (binary search)
n	    Linear	Loop
n*log(n)	Linearithmic	Effective sorting algorithms
n^2	    Quadratic	Double loop
n^3	    Cubic	Triple loop
2^n	    Exponential	Complex full search
* * O(n) => linear =>  elements === no of operations
const nemo = ['nemo']
const everyOne = [
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'everyOne',
  'nemo',
]

const large = new Array(100).fill('nemo')
function findNemo(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('nemo found')
    } else {
      console.log('nemo not found')
    }
  }
  let t1 = performance.now()
  console.log(`call to find nemo took ${t1 - t0} milliseconds`)
}

findNemo(large)  O(n)
-------------------------------

* * O(1) => constant time (no of operations remain same)
const boxes = [0, 1, 2, 3, 4]

function getFirstTwoBoxes(box) {
  console.log(box[0]) // O(1)
  console.log(box[1]) // O(1)
}

getFirstTwoBoxes(boxes) // O(2)
------------------------------
function funChallenge(input) {
  let a = 10 // O(1)
  a = 40 + 1 // O(1)

  for (let i = 0; i < input.length; i++) {
     O(N)
    anotherFunction() // O(N)
    let stranger = true // O(N)
    a++ // O(N)
  }
  return stranger // O(1)
}

total = O(3 + 4N)
-------------------------------
function anotherFunChallenge(input) {
  let a = 30 O(1)
  let b = 38 O(1)
  let c = 45 O(1)
  for (let i = 0; i < input.length; i++) {
    let x = i + 1 O(n)
    let y = i + 2 O(n)
    let z = i + 3 O(n)
  }
  for (let j = 0; j < input.length; j++) {
    p = j * 2O(n)
    q = j * 2O(n)
  }

  let  whoIam = 'i am a programmer'

}

O(3+5n)

*/

/**
* * Arrays
- lookup => O(1)
- push => O(1)
- insert => O(n)
- delete => O(n)

const strings = ['a', 'b', 'c']
push => O(1)
pop => O(1)
splice => O(n)
strings.push('d')
strings.pop()
strings.splice(2, 0, 'minSet')
strings.unshift('aa')
strings.shift()
console.log(strings)

;(function () {
    var is  functional scope
   defined but not declared(i)
    hoisting
  console.log(i)
  if ('5' === '5') {
    var i = 100
  }
  console.log(i)
})()
let is blocked scope
;(function () {
  console.log(i)
  if ('5' === '5') {
    let i = 100
  }
  console.log(i)
})()

class Player {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  introduce() {
    console.log(`hi i am ${this.name},i am of type ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`i am of type ${this.type}`)
  }
}

const wizard1 = new Wizard('joti', 'healer')
console.log(wizard1)




*/

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  get(index) {
    return this.data[index]
  }
}

const newArray = new MyArray()
console.log(newArray.get(0))
