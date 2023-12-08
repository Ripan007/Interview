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

*/
