// console.log('hello rajesh')
//=> +
// => -
// => *

//=> /, % ,**

// let a=10
// let b=2;
// let c=3;
// alert(a+b)
// console.log(a+b)

// alert(a-b)

// alert(a*c)

// alert(a/b)

// alert(a%b)

// alert(c**b)

// let firstValue=Number(prompt('give me a num'))
// let secondValue=Number(prompt('give me another num'))
// // let fNum=Number(firstValue)
// // let sNum=Number(secondValue)

// alert(firstValue+secondValue)


function randomValueGenerator(min, max) {
  let random = Math.floor(Math.random() * (max - min) + min) + 1
  console.log(random)
}

let min = +prompt('enter a minimum value')
let max = +prompt('ender a maximum value ')

randomValueGenerator(min, max)
