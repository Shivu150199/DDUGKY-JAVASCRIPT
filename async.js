// console.log('a')
// console.log('b')
// // alert("c")
// // function sayHello(){
// //     console.log('hello')
// // }
// setTimeout(() => {
//     console.log('i am asynchrounus')
// }, 0);

// console.log('d')
// // sayHello()
// console.log('e')

// // console.log(window)

// console.log('first line')//

// setTimeout(() => {
//     console.log('print after 2 seconds')
// }, 0);
// alert('i am a alert')
// console.log('b')///
// setTimeout(() => {
//     console.log('print after 1 seconds')
// }, 0);
// console.log('c')
// setTimeout(() => {
//     console.log('print after 3 seconds')
// }, 0);

// function callback(){
//     console.log('callback function executed')
// }

// console.log(1)//2ms

// setTimeout(callback,3000)//3ms

// console.log(2)//2ms

// function callback() {
//   console.log('1.1')
// }

// function sayHello(name){
//     console.log(`hello`)
// }

// console.log(1)

// setTimeout(callback,5000)
// console.log(2)

// setTimeout(sayHello,10000)
// alert('do not excecute async code')

// console.log('yogesh reached a restaurant')

// function callWaiter(order){
//     console.log('how can i help you sir')
// order(billing)
// }

// function order(billing){
//     console.log('can i have a one plate paneer paratha')
//     billing(bye)
// }

// function billing(callback){
//     console.log('here is your biil sir,')
//     callback()

// }

// function bye(){
//     console.log('bye sir and thank you for this delecious food')
// }

// setTimeout(order,10000)
// setTimeout(callWaiter,5000)

// bye()
// order()
// callWaiter(order)
// // billing()

// console.log('yogesh reached a restaurant')

// function callWaiter() {
//   console.log('how can i help you sir')
//   function order() {
//     console.log('can i have a one plate paneer paratha')
//     function billing() {
//       console.log('here is your biil sir,')
//       function bye() {
//         console.log('bye sir and thank you for this delecious food')
//       }
//       bye()
//     }
//     billing()
//   }
//   order()
// }
// callWaiter()

// function step1(callback){
//   setTimeout(()=>{
//     console.log('step1')
//     callback()
//   },300)
// }
// function step2(callback){
//   setTimeout(()=>{
//     console.log('step2')
//     callback()
//   },200)
// }
// function step3(callback){
//   setTimeout(()=>{
//     console.log('step3')
//     callback()
//   },1000)
// }
// function step4(callback){
//   setTimeout(()=>{
//     console.log('step4')
//     callback()
//   },500)
// }

// step1(()=>{
//   step2(()=>{
//     step3(()=>{
//       step4(()=>{
//         console.log('execution finished successfully')
//       })
//     })
//   })
// })
// step2()
// step3()
// step4()
// step1() then step2() then step3() thent step4()

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("i am resolved")
//     // console.log('done')
//   }, 1000)
// })
// console.log(promise)
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('I am rejected')
//     // console.log('done')
//   }, 500)
// })
// console.log(promise2)
// promise.then(()=>{

// })

// const promise = new Promise((res, rej) => {
// setTimeout(() => {
//   res('i am resolved now you can use my data')
// },500)

//   setTimeout(() => {
//     rej('you are not authorised')
//     // console.log('done')
//   }, 2000)

// })
// // pending: initial state, neither fulfilled nor rejected.
// // fulfilled: meaning that the operation was completed successfully.
// // rejected: meaning that the operation failed.
// promise
//   .then((item) => {
//     console.log(item)
//   })
//   .finally(() => {
//     console.log('finally')
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// function a() {
//   return 'b'
// }

// let c = a()
// console.log(typeof c)

// function step1() {
//   return new Promise((res, rej) => {
//     rej('i am resolved')
//   })
// }

// step1().then((item) => console.log(item)).catch((error)=>console.log(error))

// function step1() {
//   return new Promise((res, rej) => {
//     // console.log('started boiling water')
//     setTimeout(() => {
//       let data = { step1: 'boiling water' }
//       res(data)
//     }, 2000)
//   })
// }

// function step2(data) {
//   return new Promise((res, rej) => {
//     // console.log('finished boiling water')
//     setTimeout(() => {
//       data = { ...data, step2: 'finished boiling water' }
//       res(data)
//     }, 2000)
//   })
// }

// function step3(data) {
//   return new Promise((res, rej) => {
//     // console.log('maggie masala and maggie')
//     setTimeout(() => {
//       data = { ...data, step3: 'maggie masala and maggie' }
//       res(data)
//     }, 2000)
//   })
// }

// function step4(data) {
//   return new Promise((res, rej) => {
//     // console.log('maggie finished')
//     setTimeout(() => {
//       data = { ...data, step4: 'maggie finished,enjoy' }
//       res(data)
//     }, 2000)
//   })
// }

// let obj={a:1}
// obj={...obj,b:2}
// console.log(obj)

// let result = step1()
//   .then((data) => step2(data))
//   .then((data1) => step3(data1))
//   .then((data2) => step4(data2))
//   .then((data3) => data3)
//   .catch((err) => console.log(err))

// result.then((data)=>console.log(data))

// fetch('https://dummyjson.com/products')
//   .then((response) => response.json())
//   .then((data) => {
//     let product = data.products
//     console.log(product)
//     render(product)
// //     let result = product.map((item) => {
// //       return `<div class="card">
// // <img src=${item.images[0]} alt="">
// // <div class="info">
// // <h2 class="title">${item.title}</h2>
// // <p>Price : ${item.price}</p>
// // </div>

// // </div>
// // `
// //     })

// //     main.innerHTML = result.join('')
//   }).catch((err)=>{
//     console.log(err)
//   })

// function errorHandler(status,message){
//   let error=new Error(message)
//   error.status=status
//   throw error
// }

// let x=errorHandler(200,'successfull')
// console.log(x.status,x.message)

// function render(arrayOfObjects) {
//   let result = arrayOfObjects.map((item) => {
//     return `<div class="card">
// <img src=${item.images[0]} alt="">
// <div class="info">
// <h2 class="title">${item.title}</h2>
// <p>Price : ${item.price}</p>
// </div>

// </div>
// `
//   })

//   main.innerHTML = result.join('')
// }

// function fetchData() {
// fetch('https://dummyjson.com/products')
//     .then((response) => response.json())
//     .then((data) => {
//       let product = data.products
//       console.log(product)
//       render(product)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// window.addEventListener('DOMContentLoaded',fetchData)
// let url

// let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=`
// // let search = 'cat'

// input.addEventListener('keyup', (e) => {
//   let searchValue = input.value
//   if (e.key == 'Enter') {
//     fetchData(url, searchValue)
//   }
// })

// function fetchData(url, searchValue) {
//   fetch(`${url}${searchValue}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.query.search)
//     }).catch((err)=>console.log(err.message))
// }

// fetchData(url,'ganesh')
// let result;
// let url = 'https://jsonip.com'
// async function fetchData(url) {
//   try {
//     let response = await fetch(url)
//     console.log(response)
//     let data = await response.json()
//     console.log(data.ip)

//   }
//    catch {
//     (err) => {
//       console.log(err)
//     }
//   }

//   // let data=await response.json()
//   // console.log(data.ip)

//   // fetch(url)
//   //   .then((resp) => resp.json())
//   //   .then((data) => {
//   //     console.log(data.ip)
//   //     document.body.innerHTML = data.ip
//   //   })
//   //   .catch((err) => {
//   //     // console.log(err)
//   //     let error = new Error()
//   //     console.log(error)
//   //     error.message = 'not valid url'
//   //     console.log(error.message)
//   //     document.body.innerHTML=error.message
//   //   })
// }

// fetchData(url)

// console.log(result)

// function fetch(url){

// return new Promise((res,rej)=>{
//   let error=new Error()
//   error.message='you are not allowed to'
// res(error)
// })

// }

// function fetchData() {
//   fetch('https://jsonip.com')
//     .then((a) => a.json())
//     .then((b) => {
//       console.log(b.ip)
//       let ip = document.querySelector('.ip')
//       ip.innerHTML = b.ip
//     }).catch((e)=>{
//       console.log(e.message)
//     })
// }

// fetchData()
// let url = `https://ipapi.co/${ip}/json/`

async function fetchData() {
  let a = await fetch('https://jsonip.com')
  console.log(a)
  let b = await a.json()
  console.log(b)
  return b.ip
}

async function fetchDetails() {
  let ip = await fetchData()

  console.log(ip)
  let url = `https://ipapi.co/${ip}/json/`
let response=await fetch(url)
let data=await response.json()
console.log(data)
let lat=data.latitude
let lon=data.longitude
document.querySelector(
  'iframe'
).src = `https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`

}
fetchDetails()
// fetchData()

// async function fetchData() {
//   let randomJokeurl = 'https://official-joke-api.appspot.com/random_joke'
//   let response = await fetch(randomJokeurl)
//   let data = await response.json()
//   console.log(data)
//   let joke = data.setup
//   console.log(joke)
//   let punch = data.punchline
//   console.log(punch)
// document.querySelector('.joke').innerText=joke
// document.querySelector('.punch').innerText=punch

// }

// // fetchData()

// btn.addEventListener('click',fetchData)





