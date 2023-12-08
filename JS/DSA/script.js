/*
* * Big O' => how well the problem is solved
* * what is good code ? readable , scalable (Big O)
1	    Constant	statement, one line of code
log(n)	Logarithmic	Divide and conquer (binary search)
n	    Linear	Loop
n*log(n)	Linearithmic	Effective sorting algorithms
n^2	    Quadratic	Double loop
n^3	    Cubic	Triple loop
2^n	    Exponential	Complex full search */

const nemo = ['nemo']
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemfo') {
      console.log('nemo found')
    } else {
      console.log('nemo not found')
    }
  }
}

findNemo(nemo)
