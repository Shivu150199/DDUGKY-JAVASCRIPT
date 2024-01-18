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

// function Bia(name,studentId,mobile,email,domain){
// this.name=name,
// this.studentId=studentId,
// this.mobile=mobile,
// this.email=email,
// this.domain=domain,
// this.address='Hostel',
// this.section='Bia3',
// this.gender='male'}

// let satish=new Bia('satish',1,'45723845','satish@gmail.com','developer')
// let yogesh=new Bia('Yogesh','2','34523845,'yogesh@gmail.com','developer')
// console.log(satish)
// console.log(yogesh)

// concat
// forEach
// indexOf
// lastIndex
// includes
// find filter
// sort
// map

// let arr=[
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ]

// if marks>50

// let obj={
//   width:200,
//   height:300,
//   title:'satish'
// }
// console.log(obj)
// for(let i in obj){
// // console.log(obj[i])
// if(typeof obj[i]=='number'){
//   obj[i]=obj[i]*2
// }

// }
// console.log(obj)

// push = add the value at last index
//unshift = add value at 0 index
// pop remove from last indexedDB
// shift remove from zero index

// slice = slice ( 1 ,8)

// splice(startingIndex ,count,more Items)

// let arr=[3,6,8,3,9,4]
// console.log(arr)
// arr.splice(3,0,34,35)

// console.log(arr)

// let a=[34,4,45,7,'satish','yogesh']
// let b=[3,346,65,4,43,74]
// let d=[23,345,7,86]
// // let c=a.concat(b).concat(d)
// // console.log(c)
// let c=[...a,...b,...d]//by spread operator introduced in es6
// console.log(c)

// let student1 = [
//   { name: 'yogesh', section: 'bia3' },
//   { name: 'satish', section: 'bia3' }
 
// ]

// let student2 = [
//   { name: 'jeet', section: 'bia4' },
//   { name: 'mayank', section: 'bia4' }
// ]

// // let allStudents=student1.concat(student2)
// let allStudents=[...student1,...student2]


// console.log(allStudents)

// let student1 = [
//   { name: 'yogesh', section: 'bia3' },
//   { name: 'satish', section: 'bia3' },
//   { name: 'jeet', section: 'bia4' },
//   { name: 'mayank', section: 'bia4' }
// ]

// for(let item of student1){
//   if(item.name=='yogesh'){
//     console.log(student1.indexOf(item))
//   }
// }
// item = { name: 'yogesh', section: 'bia3' }

// let arr=[32,544,42,566,453,42,23,42,42,42]
//indexOf
// let result=arr.indexOf(42)
// console.log(result)

// for(let i of arr){
//   if(i==42){
//     console.log(arr.indexOf(i))
//     break;
//   }
// }



//last index

// let arr=[34,543,74,856,34,345,54,647,456,5678,34,56,7]
// console.log(arr.LastIndexOf(34))


//includes
// console.log(arr.includes(74345))

//foreach method



// let arr=[34,543,74,856]

// // function myFun(){

// // }

// console.log(arr)
// let result=[]
//  arr.forEach((item)=>{
// // console.log(item)
// // console.log(index)
// // console.log(array)
// // console.log(`item ${item} in index ${index} of array ${array}`)
// // item=item+2
// result.push(item+2)

// })
// console.log(result)


// let student = [
//   { name: 'yogesh', section: 'bia3' ,marks:99},
//   { name: 'satish', section: 'bia3' ,marks:32},
//   { name: 'jeet', section: 'bia4' ,marks:99},
//   { name: 'mayank', section: 'bia4',marks:46 }
// ]

// student.forEach((item,index,array)=>{
// console.log(item)
// console.log(index)
// console.log(array)
// })


// let num=[2,4,6,7,3,9]

// num.map((item)=>{

// })

// let student = [
//   { name: 'yogesh', section: 'bia2', marks: 98 },
//   { name: 'satish', section: 'bia3', marks: 99 },
//   { name: 'jeet', section: 'bia4', marks: 20 },
//   { name: 'mayank', section: 'bia2', marks: 99 },
// ]

// let pass=student.filter((item)=>item.section=='bia3')
// console.log(pass)

// let mayank=student.find((item)=>item.marks==99)
// console.log(mayank)


// let name = ['jeet', 'dharma', 'devi']
// let a=[8,5,3,1]
//
// a.sort((a,b)=>b-a)
// console.log(a)


// let b=[99,65,34,675,23]

// b.sort((a,b)=>b-a)
// a=34
// b=675
// console.log(b)


// let student = [
// { name: 'yogesh', section: 'bia2', marks: 98 },
// { name: 'satish', section: 'bia3', marks: 77 },
//   { name: 'jeet', section: 'bia4', marks: 20 },
//   { name: 'mayank', section: 'bia2', marks: 99 },
// ]

// student.sort((a,b)=>b.marks-a.marks)
// console.log(student)

// let employee=[
//   {name:'ranjit',salary:1200000},
//   {name:'mayank',salary:2500000},
//   {name:'yogesh',salary:1500000}
// ]

// employee.sort((a,b)=>a.salary-b.salary)
// console.log(employee)

// let num=[1,2,3,4,7]
// let sum=0;
// for(let i of num){
//   sum=sum+i
// }
// for(let i=0;i<num.length;i++){
//   sum=sum+num[i]
// }

// for(let i in num){
//   sum=sum+num[i]
// }
// console.log(sum)


// let num = [1, 2, 3, 4, 7]
// let a=num.reduce((acc,curr)=>acc*curr
// ,1)
// console.log(a)

// let i=0
// let mul=1
// while(i<num.length){//0<5 1<5 2<5
// mul=mul*num[i]//1=1*2=2
// i++
// }
// console.log(mul)

// reduce(accumulator,current value),initialvalue
// let a=num.reduce((acc,cur)=>acc*cur

// ,0)

// console.log(a)

// let employee = [
//   { name: 'Ranjit', salary: 1200000 },
//   { name: 'mayank', salary: 2500000 },
//   { name: 'yogesh', salary: 1500000 },
// ]
// let salary=[]
// employee.forEach((item)=>
// salary.push(item.salary)
// )
// console.log(salary)

// let totalSalary=salary.reduce((acc,curr)=>acc+curr,0)
// console.log(totalSalary)
// let a=employee.reduce((acc,curr,item)=>
// console.log(item)
// ,0)
// console.log(a)
