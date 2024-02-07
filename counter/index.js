// after clicking on inc btn - increase the value of count and show it on p tag
// after clicking on dec btn - decrease the value of count and show it on p tag
// reset value=0

let count = 0
let p = document.querySelector('p')

btn.addEventListener('click', () => {
  let value = input.value
  let num = +value
  count = value
  console.log(typeof num)
  p.innerHTML = count
})

inc.addEventListener('click', () => {
  count++
  p.innerHTML = count
})

dec.addEventListener('click', () => {
  count--
  p.innerHTML = count
})

res.addEventListener('click', () => {
  count = 0
  p.innerHTML = count
})

// input.addEventListener('input',()=>{
//     let value=input.value;
// p.innerHTML=value

// })

// let num=0

// function count(){
//     num++;

// }
// console.log(num)
// count()//1
// count()//2
// count()//3
// count()//4
// console.log(num)

// let num = '135jhsjdhfalk34'
// console.log(parseFloat(num))
// 13.342//13
