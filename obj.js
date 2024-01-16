// let obj={}

// obj.name='sachin'
// obj.age=20
// obj.lastName='dwiwedi'
// console.log(obj)

// delete obj.age
// console.log(obj)
// delete obj.name
// console.log(obj)

// let books={
//     name:'Ramcharit Manas',
//     author:"Tulsidas"
// }
// console.log(books)
// books.author='valmiki'
// console.log(books)

// let books={
//     name:'Ramcharit Manas',
//     author:"Tulsidas"
// }
// console.log(books)
// //bracket notation
// books["name"]='Ramayan'
// books['author']='Valmiki'

// console.log(books)

// muti word property access

// let student={
//     "first name":'sachin'
    
// }
// console.log(student["first name"])



// property value short hand

// function student(name,age,village){
    
//     let obj={
//         name:age,
//         age:name
//     }
//     return obj
// }
// let a=student('sachin',20)
// console.log(a)
// function students(age,name){
    
//     let obj={
//         name,
//         age
//     }
//     return obj
// }
// let b=students('vishal',21)
// console.log(b)

// const for=24
// console.log(for)

//   let obj={
//         for:'shivam',
//       let:'24'
//     }
//     console.log(obj["for"])


// key in Object

// let menu={
//     veg:'potato',
//     breakfast:'fried rice',
//     lunch:"potato",
//     dinner:'rajma'
//     }

// console.log("dinn" in menu)


// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.




// let user={};
// user.name='john'
// user.surname='Smith'
// console.log(user)
// user.name='pete'
// console.log(user)
// delete user.name
// delete user.surname
// console.log(user)


// for in loop


// let menu={
//     veg:'potato',
//     breakfast:'fried rice',
//     lunch:"potato",
//     dinner:'rajma'
//     }
//     // menu['veg']
//     for(let i in menu ){
//         // console.log(i)
//         console.log(menu[i])
        
        
// //     }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }


// before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Mymenu "
// };

// for(let i in menu){
//  if(menu[i]>200 && typeof menu[i]=='number'){
//   menu[i]=menu[i]*2
//  } 
// }

// for(let i in menu){
//   if(typeof menu[i]=='number'){
//     menu[i]=menu[i]*2
//   }
// }
// console.log(menu)







// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


// true && false
// false && false
// false && true
// true && true


// true || false //true
// true || true // true
// false || false // false
// false  || true // true





// let a=10
// let b=a
// console.log(a)//10
// console.log(b)//10
// a=20
// b=a
// console.log(a)//20
// console.log(b)//10





// let a=10
// let b=20
// 0
// a=a+b//10+20=30
// b=a-b//30-20=10
// a=a-b//30-10=20









// let a='shivam'
// a='vishal'


// let employee={
// name:'sachin',
// role:'developer',
// }
// console.log(employee.name)
// let emp=employee
// console.log(emp.name)
// employee.name='vishal'
// console.log(employee.name)
// console.log(emp.name)
// // console.log(employee==emp)

// console.log(employee)
// console.log(emp)


// let employee = {
//   name: 'sachin',
//   role: 'developer',
// }
// let emp2={}
// // emp2[name]='vishal'
// // emp2.name='vishal'
// // emp2='vishal'
// for(let i in employee){
// emp2[i]=employee[i]
// }
// console.log(emp2)

// emp2.name='anand'
// console.log(emp2)
// console.log(employee)


// let employee = {
//   name: 'sachin',
//   role: 'developer',
// }
// console.log(employee)
// let obj=Object.assign({},employee)
// console.log(obj)

// obj.name='anand'
// console.log(employee)
// console.log(obj)

// let employee = {
//   name: 'sachin',
//   role: 'developer',
// }

// let obj={...employee}
// console.log(obj)







// let obj={};

// obj.name='yogesh'
// obj.prof='developer'


// obj.prof='student'

// delete obj.name

// console.log(obj)


// let car={
//   name:'BMW',
//   model:'seven series',
//   cost:'1.7cr'
// }

// for(let i in car){
//   // console.log(i)
//   console.log(car[i])
// }

// let car={
//   name:'BMW',
//   model:'seven series',
//   cost:'1.7cr'
// }
// let car2=car
// car2.name='audi'
// console.log(car)
// console.log(car2)
// let car2={}
// car2.name='Audi'


// for(let i in car){
// car2[i]=car[i]

// }
// console.log(car)
// console.log(car2)
// let car2={...car}
// let car2=Object.assign({},car)


// let car = {
//   name: 'BMW',
//   model: 'seven series',
//   cost: '1.7cr',
// }
// car.start = function() {
//   console.log('car started ...')
// }
// car.stop=function(){
//   console.log('car stopped')
// }

// console.log(car)
// car.start()
// car.stop()


// let arr=[2,4,5]

// arr.forEach((i)=>{

// })

// for(let i of arr){
//   if(i==2){
//     i=i+2
//   }
//   console.log(i)
// }





// let student={
//   name:'sachin',
//   prof:'developer',
//   sayHi:function(){
// console.log(`hello ${this.name} and his prof is ${this.prof}`)
//   }
// }
// student.sayHi()


// let racing={
//   numbersOFCars:100,
//   country:'India',
//   city:'Bangalore',
//   startRace:function(){
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     console.log('go......')
  
//   },
//   details:function(){
//     console.log(`there are ${this.numbersOFCars} cars and this car race is organised in ${this.country} and city ${this.city} `)
//   }
// }

// racing.startRace()
// racing.details()


// let numberCounting={
//   count:0,//1
//   increaseCount:function(){
//     // this.count=this.count+1
//     this.count++
//   },
//   decreaseCount:function(){
//     this.count--
//   }
// }
// console.log(numberCounting.count)
// numberCounting.increaseCount()
// numberCounting.increaseCount()
// numberCounting.increaseCount()
// numberCounting.increaseCount()
// numberCounting.increaseCount()
// numberCounting.increaseCount()
// console.log(numberCounting.count)
// numberCounting.decreaseCount()
// console.log(numberCounting.count)



// let calculator={

// a:10,
// b:20,
// add:function(){
//   console.log(this.a+this.b)
// },
// substract:function(){
//   console.log(this.a-this.b);
// },
// mult:function(){
//   console.log(this.a*this.b)
// },
// dev:function(){
//   console.log(this.a/this.b)
// },
// }


// console.log(calculator)
// calculator.add()//
// calculator.mult()

// we have to create a racing car 
// initial speed =10

// we have to create a gearUp method = this increase the speed +10
// and create gearDown method this decrease the speed -10


// let racing={}

// racing.initialSpeed=10

// racing.gearUp=function(){
// this.initialSpeed=this.initialSpeed+10
// console.log(this.initialSpeed)
// }

// racing.gearDown=function(){
// this.initialSpeed=this.initialSpeed-10
// console.log(this.initialSpeed)
// }

// console.log(racing.initialSpeed)
// racing.gearUp()
// racing.gearUp()
// racing.gearUp()
// racing.gearDown()
// racing.gearUp()
// racing.gearUp()
// racing.gearDown()
// racing.gearUp()
// racing.gearDown()
// console.log(racing.initialSpeed)




//constructor//

// function Car(name,color,engine,owner){
//   this.name=name,
//   this.color=color,
//   this.engine=engine,
//   this.owner=owner,
//   this.wheels=4,
//   this.steering=1

// }

// let bmw=new Car(' ','black','v8','Mayank')
// console.log(bmw)
// let audi=new Car('Audi','Blue','g11','Satish')
// console.log(audi)



function Bia(name,studentId,mobile,email,domain){
this.name=name,
this.studentId=studentId,
this.mobile=mobile,
this.email=email,
this.domain=domain,
this.address='Hostel',
this.section='Bia3',
this.gender='male'}



let satish=new Bia('satish',1,'45723845','satish@gmail.com','developer')
let yogesh=new Bia('Yogesh','2','34523845,'yogesh@gmail.com','developer')
console.log(satish)
console.log(yogesh)