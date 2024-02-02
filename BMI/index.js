// const mainContainer=document.querySelector('.bmi')

// // mainContainer.innerHTML = `<div class="card">
// //     <h1>bmi</h1>
// //     <input type="number" placeholder="weigh">
// //     <input type="number" placeholder="height">
// //     <button>submuit</button>
// // </div>`

// console.log(mainContainer)

// // createElement

// let div=document.createElement('div')
// {/* <div className=card></div> */}
// div.className='card';
// // div.id='card'
// // div.textContent='ksdfjghskjdf'
// let h1=document.createElement('h1')
// h1.innerText='BMI'
// console.log(h1)

// let weightInput=document.createElement('input')
// weightInput.placeholder='weight in kg'
// weightInput.type='number'
// weightInput.className='weight'
// let heightInput=document.createElement('input')
// heightInput.placeholder='height in cm'
// heightInput.type='number'
// heightInput.className='height'

// console.log(weightInput)


// let button=document.createElement('button')
// button.innerText='submit'
// button.className='btn'
// button.onclick=function(){

// }
// console.log(button)


// // div.appendChild(h1)
// // div.appendChild(weightInput)
// // div.appendChild(heightInput)
// // div.appendChild(button)

// div.append(h1,weightInput,heightInput,button)



// mainContainer.appendChild(div)




// 


// let obj={}

// obj.sayHello=()=>console.log('hello')

// obj.sayHello()
// obj.sayHello()
// obj.sayHello()

// const input=document.querySelector('#password')

// console.log(input.type)
// input.type='text'
// console.log(input.type)
// ;<i class="fa-solid fa-eye-slash"></i>
// ;<i class="fa-regular fa-eye"></i>

// function showPassword(){
//     const input=document.querySelector('#password')
// let btn=document.querySelector('.btn')

//     console.log(input.type)
//     if(input.type=='password'){
//         input.type='text'
//         btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
//     }else{
//         input.type='password'
//          btn.innerHTML = `<i class="fa-regular fa-eye"></i>`
//     }
    

// }

function changeBackground(){
    let random1=Math.floor(Math.random()*255)
    let random2=Math.floor(Math.random()*255)
    let random3=Math.floor(Math.random()*255)
// console.log(random)
document.body.style.backgroundColor = `rgb(${random1},${random2},${random3})`

}

// let firstName='bhagwan'
// let lastName='idsfa'

// // let str='my name is ' + firstName +" " + lastName
// let str=`my name is ${firstName} ${lastName}`
// console.log(str)

