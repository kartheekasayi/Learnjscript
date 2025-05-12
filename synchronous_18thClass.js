// console.log("Raju")
// console.log("Ravi")
// console.log("kishore")
//if i execute this which name is going to print 1st
//javascript is a synchonous language by default exactly meaning is 
//----------------------------------------------------------

//in javascript inbuilt function is there settimeout
//syntax:
//setTimeout(function,8000) //8000 means dealy time we can give any
// console.log("Raju")
// setTimeout(function displaymessage(){
// console.log("Ravi")

// },5000);
// console.log("kishore")

//we have 2 functions
// function displayresult(value){
//     console.log(value)
// }

// function add(num1,num2){
//     sum=num1+num2
//     displayresult(sum)
// }
// add(4,6)

//callback function
// function displayresult(value){
//     console.log(value)
// }

// function displayresultby2(value){
//     console.log(value/2)
// }

// function add(num1,num2,callback){
//     sum=num1+num2
//     callback(sum)
// }
// add(4,6,displayresult) //10
// add(4,6,displayresultby2) //5

//callback function : callback function means a function will be there for that we are sending one more function as a argument for that we call that function as a callback function 

//anonimous funtion
// function(){
//     console.log("this is anonimous funtion")
// }
//we use anonimous function as a callback function

// arr=[3,6,7,8,9]
// oddnumbers=arr.filter(function(ele){
//    if(ele%2==0){ //if we give this even no's will come
//     return ele
//    }
// })
// console.log(oddnumbers)

// arr=[3,6,7,8,9]
// oddnumbers=arr.filter(function(ele){
//    if(ele%2!==0){ //if we give this odd no's will come
//     return ele
//    }
// })
// console.log(oddnumbers)


//function will take an element as an argument so it is repitative filter will iterate all the elements and it will save in to some array so this function is a anonimous funtion
//converting in to arrow funtion
//function without name is a anonimous function that will used as a callback function

arr=[3,6,7,8,9]
oddnumbers=arr.filter(ele=>ele%2!==0)
   console.log(oddnumbers)

//function which will accepts the callback as argument/parameter then that function is a higher order function
//callback function will be called as closure funtion when it is taking data from the higher order funtion
//without callback function is not be a closure funtion when

function printmessage(){
    console.log("this is a callback function")
}

function displaydata(callback){
    console.log("this is a higher order function")
callback()
}

//displaydata(printmessage())//wrong syntax

displaydata(printmessage)//right syntax

function add(callback){
    let sum=10 
    callback(sum)//closure function
}


