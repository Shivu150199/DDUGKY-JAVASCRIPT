let start = document.querySelector('.start')
let end = document.querySelector('.end')
let reset=document.querySelector('.reset')
// let setTimeId
// start.addEventListener('click', () => {
//   setTimeId = setTimeout(() => {
//     console.log('hello Vishal')
//   }, 5000)
// })

// end.addEventListener('click', () => {
//   clearTimeout(setTimeId)
// })

// setTimeout(callbackfunction,delay)
//id
//clearTimeout
// let setTimeid=setTimeout(()=>{
//     console.log('hello vishal')
// },3000)

// setTimeout(() => {
//   alert('tell me you name')
// }, 5000)

// let clearId;
// start.addEventListener('click',()=>{
// let count = 0
// clearId = setInterval(() => {
//   count++
//   console.log(count)
// }, 1000)
// })

// end.addEventListener('click',()=>{
//     clearInterval(clearId)
// })

// // clearInterval(clearId)
// let setCount=function(){
// console.log('hello')
// }

// console.log(setCount)

// let id=setInterval(()=>{
//     console.log('hello')
// },1000)

// clearInterval(id)
let secStick=document.querySelector('.stick')
let second = 0
let minute = 0
let hour = 0
// let deg=second*6
// let day=0;
let timerId;
start.addEventListener('click',()=>{
   timerId=setInterval(() => {
     second++
     secStick.style.transform = `rotate(${second*6}deg)`
     if (second >= 60) {
       minute++
       second = 0
     }
     if (minute >= 60) {
       hour++
       minute = 0
     }
     // if(hour>=24){
     //     day++
     //     hour=0
     // }

     // console.log("second",second)
     // console.log("minute",minute)
     // console.log('hour',hour)
     if (second < 10) {
       seconds.innerText = `0${second}`
     } else {
       seconds.innerText = second
     }
     if (minute < 10) {
       minutes.innerText = `0${minute}`
     } else {
       minutes.innerText = minute
     }
     if (hour < 10) {
       hours.innerText = `0${hour}`
     } else {
       hours.innerText = hour
     }
   }, 1000)

})

end.addEventListener('click',()=>{



  clearInterval(timerId)
})




reset.addEventListener('click',()=>{
  second=0;
  minute=0;
  hours=0;
  seconds.innerText=`00`
  minutes.innerText=`00`
  hours.innerText=`00`

  clearInterval(timerId)
})

