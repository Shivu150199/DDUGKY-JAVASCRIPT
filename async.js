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

const promise = new Promise((res, rej) => {
// setTimeout(() => {
//   res('i am resolved now you can use my data')
// },500)

  setTimeout(() => {
    rej('you are not authorised')
    // console.log('done')
  }, 2000)

})
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
promise
  .then((item) => {
    console.log(item)
  })
  .finally(() => {
    console.log('finally')
  })
  .catch((err) => {
    console.log(err)
  })
