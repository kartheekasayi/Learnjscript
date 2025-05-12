var x = 20   // number 

x = "Raju"  // string 

x = true   // boolean 

console.log(x)


function add(num1, num2){

    console.log(num1)

    console.log(num2)

    console.log(num1+num2)
}

add(5, 7)

add(5, "Raju") 

//difference between Js and Ts 

// 1. javascript is synchronous language or Asynchronous language
// 2. what is call back function
// 3. what is higher order function
// 4. what is closure function
// 5. what is an anonomus function
// 6. what is promises?
// 7. why we need to use .then
// 8. what are the methods for promises


function printmessage(){
    console.log("this is callback function")
}
function displaydata(callback){
    console.log("this is a higher order funtion")
    callback()
}
displaydata(printmessage)

