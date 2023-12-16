/*rajiv', 'gopi', 'kamla'];
 accessing the  value
console.log(friends[0]);

const years = new Array('2000', '2001');
console.log(years[0]);

 mutating the value

friends[0] = 'chanda';
console.log(friends);

console.log(friends[friends.length - 2]);*/

/*const calAge = function (birthyear) {
  return 2024 - birthyear;
};

const years = [2000, 2001, 1995, 1994];
console.log(calAge(years[0]));
const age1 = calAge(years[1]);
const age2 = calAge(years[2]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[2]),
  calAge(years[3]),
];
console.log(ages);*/

/* function methods*/

/*const friends = ['mohit', 'gopi', 'jyoti', 'sarvana'];
friends.push('raj');
friends.unshift('kabita');
friends.pop();
friends.shift();

console.log(friends.indexOf('gopi'));
console.log(friends.includes('rajvir'));*/

/*50-300 => 15%
different => 20%

const callTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [callTip(bills[0]), callTip(bills[1]), callTip(bills[2])];
console.log(bills, tips);*/

// console.log('welcome')

/**
 * * Arrays:
 * lookup => 0(1)
 *  push => 0(1)
 * insert => 0(n)
 *  delete => 0(n)
  const strings = ['a', 'b', 'c', 'd', 'e', 'f']
strings.pop()
strings.push('g')
strings.splice(0, 1, 'aa')
strings.unshift('kk')
strings.shift()
console.log(strings)

 * */

/*
referance type:
var obj1= {value:10}
var obj2 = obj1
var obj3 = {value:10}
 console.log(obj1 === obj3)


const obj4 = {
  a:function(){
    console.log(this)
  }
}

obj4.a()

class Players {
  constructor(name, type){
    this.name = name;
    this.type = type
  }
  introduce(){
    console.log(`i am ${this.name}, i am ${this.type}`)
  }
}
class Wizard extends Players {
  constructor(name,type){
    super(name,type)
  }
  play(){
    console.log(`weeee  i,am ${this.name}`)
  }
 }

 const wizard1 = new Wizard('ripan','coder');

 console.log(wizard1.introduce())
 console.log(wizard1.play())

 class MyArray {

constructor(){
  this.length =0;
  this.data = {}
}
get(index){          

}
push(item){
  this.data[this.length] = item;
  this.length++
  return this.length
}
pop(){
  const lastItem = this.data[this.length -1];
  delete this.data[this.length -1]
  this.length--;
  return lastItem;
}
delete(index){
  const lastItem = this.data[index];
  this.shiftItem(index);
  return  lastItem;
}
shiftItem(index){
  for(let i=index;i<this.length -1;i++)
  {
    this.data[i] = this.data[i+1]
  }
  delete this.data [this.length -1]
this.length --
}

}

const newArray  = new MyArray()
newArray.push('i');
newArray.push('am')
newArray.push('!');
newArray.push('!')
newArray.pop()
newArray.pop()
newArray.delete(1)
console.log(newArray)

function reverse(str){
  if(!str ||  str.length <2  || typeof str !== 'string'){
    return 'hmm that is not good'
  }
  const backwards = [];
  const totalItems = str.length -1;
  for(let i = totalItems;i>=0;i--){
    backwards.push(str[i])
  }
  console.log(backwards)
  return backwards.join('')
}
function reverse2(str){
  return str.split('').reverse().join('')

}

const reverse3 = (str) => [...str].reverse().join('')

console.log(reverse3('i am  ripan'))

function mergedSortedArray(array1,array2){
  const mergedArray = [];
  let array1Item = array1[0]
let array2Item = array2[0]
let i =1;
let j=1;

if(array1.length === 0){
  return array2

}
if(array2.length  === 0){
  return array1

}
while(array1Item  || array2Item){
  if(!array2Item  || array1Item < array2Item){
    mergedArray.push(array1Item)
    array1Item = array1[i]
    i++

  }else{
    mergedArray.push(array2Item)
    array2Item = array2[j]
    j++
  }
}

return mergedArray
}

const  merged =  mergedSortedArray([0,3,4],[5,6,5]);
console.log(merged)



*/ 











