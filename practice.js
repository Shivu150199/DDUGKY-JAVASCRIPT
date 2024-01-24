// Write a JavaScript program to find the maximum number in an array.


// first we have to create a array 

// we have to create a function where we take array as a parameter

// in that function check the maximum value of array and return that value

let array=[2,4,6,83,12,22,5]
let array2=[2,4,22,5]
let array3=[2,4,6,8,12,22,5]

function getMax(arr){

let max=0
 for(let i=0;i<arr.length;i++){
if(arr[i]>max){
    max=arr[i]
}
return max;

    }
let a=getMax(array)
let b=getMax(array2)
let c=getMax(array3)
console.log(a)
console.log(b)
console.log(c)



// 0<2 = 2
// 4>2= 4
// 6>4=6
// 83>6= 83
// 12>83=83
// 22>83=83
// 5>83=83

// max=83
   


}