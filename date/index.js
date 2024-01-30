// console.log(btn)

// console.log(date)

btn.addEventListener('click',()=>{
    let currentDate=new Date();
    let currentYear=currentDate.getFullYear()
    let currentMonth=currentDate.getMonth()
    let currentDay=currentDate.getDate()
    // console.log(currentYear)
    // console.log(currentMonth)
    // console.log(currentDay)

    const value=date.value
    // console.log(value)
    let dob=new Date(value)
    // console.log(dob)
    let dobYear=dob.getFullYear()
    let dobMonth=dob.getMonth()
    let dobDay=dob.getDate()
    // console.log(dobYear)
    // console.log(dobMonth)
    // console.log(dobDay)
    // console.log('hello')

    let yearGap=currentYear-dobYear
    console.log(yearGap)
let monthGap;
 let dayGap;
if(currentMonth>=dobMonth){//1//5
    monthGap=currentMonth-dobMonth
}else{
    yearGap--;
    monthGap = 12 + currentMonth - dobMonth
}

if(currentDay>=dobDay){
    dayGap=currentDay-dobDay
}else{
    monthGap--;
dayGap = 31 + currentDay - dobDay
}






    // let monthGap=currentMonth-dobMonth
    // console.log(monthGap)
    // let dayGap=currentDay-dobDay
    // console.log(dayGap)






    

})


// const currentDate=new Date();
// console.log(currentDate)
// let year=currentDate.getFullYear()
// let month=currentDate.getMonth()
// let hours=currentDate.getHours()
// let day=currentDate.getDay()
// console.log(year)
// console.log(month+1)
// console.log(hours)
// console.log(day)


// const currentDate = new Date("2023-03-15")
// console.log(currentDate)
// console.log(currentDate.getFullYear())