let obj={}

obj.name='sachin'
obj.age=20
obj.lastName='dwiwedi'
console.log(obj)

delete obj.age
console.log(obj)
delete obj.name
console.log(obj)

let books={
    name:'Ramcharit Manas',
    author:"Tulsidas"
}
console.log(books)
books.author='valmiki'
console.log(books)

let books={
    name:'Ramcharit Manas',
    author:"Tulsidas"
}
console.log(books)
//bracket notation
books["name"]='Ramayan'
books['author']='Valmiki'

console.log(books)

muti word property access

let student={
    "first name":'sachin'
    
}
console.log(student["first name"])



property value short hand

function student(name,age,village){
    
    let obj={
        name:age,
        age:name
    }
    return obj
}
let a=student('sachin',20)
console.log(a)
function students(age,name){
    
    let obj={
        name,
        age
    }
    return obj
}
let b=students('vishal',21)
console.log(b)

const for=24
console.log(for)

  let obj={
        for:'shivam',
      let:'24'
    }
    console.log(obj["for"])


key in Object

let menu={
    veg:'potato',
    breakfast:'fried rice',
    lunch:"potato",
    dinner:'rajma'
    }

console.log("dinn" in menu)


Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.




let user={};
user.name='john'
user.surname='Smith'
console.log(user)
user.name='pete'
console.log(user)
delete user.name
delete user.surname
console.log(user)


for in loop


let menu={
    veg:'potato',
    breakfast:'fried rice',
    lunch:"potato",
    dinner:'rajma'
    }
    // menu['veg']
    for(let i in menu ){
        // console.log(i)
        console.log(menu[i])
        
        
//     }

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}


before the call
let menu = {
  width: 200,
  height: 300,
  title: "Mymenu "
};

for(let i in menu){
 if(menu[i]>200 && typeof menu[i]=='number'){
  menu[i]=menu[i]*2
 } 
}

for(let i in menu){
  if(typeof menu[i]=='number'){
    menu[i]=menu[i]*2
  }
}
console.log(menu)







multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};


true && false
false && false
false && true
true && true


true || false //true
true || true // true
false || false // false
false  || true // true





let a=10
let b=a
console.log(a)//10
console.log(b)//10
a=20
b=a
console.log(a)//20
console.log(b)//10





let a=10
let b=20
0
a=a+b//10+20=30
b=a-b//30-20=10
a=a-b//30-10=20









let a='shivam'
a='vishal'


let employee={
name:'sachin',
role:'developer',
}
console.log(employee.name)
let emp=employee
console.log(emp.name)
employee.name='vishal'
console.log(employee.name)
console.log(emp.name)
// console.log(employee==emp)

console.log(employee)
console.log(emp)


let employee = {
  name: 'sachin',
  role: 'developer',
}
let emp2={}
// emp2[name]='vishal'
// emp2.name='vishal'
// emp2='vishal'
for(let i in employee){
emp2[i]=employee[i]
}
console.log(emp2)

emp2.name='anand'
console.log(emp2)
console.log(employee)


let employee = {
  name: 'sachin',
  role: 'developer',
}
console.log(employee)
let obj=Object.assign({},employee)
console.log(obj)

obj.name='anand'
console.log(employee)
console.log(obj)

let employee = {
  name: 'sachin',
  role: 'developer',
}

let obj={...employee}
console.log(obj)









