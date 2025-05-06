// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(4,5) //4+5=9
// add() //if we don't pass anything it will give NaN -not a number
// //undefined+undefined =NaN

// //I want group of functions which give task for me and i want to club it as 1 entity here that is the purpose we have a class
// // {


// // }

class calculator{ //here class is a keyword
    add(num1,num2){
        console.log(num1+num2)
    }

    substract(num1,num2){
        console.log(num1-num2)
    }

    multiply(num1,num2){
        console.log(num1*num2)
    }

    devision(num1,num2){
        console.log(num1/num2)
    }
    
}

// const cal1 = new calculator() //object creation of the class / instance of the class

// cal1.multiply(4,6)
// cal1.add(4,8)
// cal1.devision(10,5)

// console.log(cal1.a)
//classs can have variables and methods
//we need to create object, through that object we can access methods and variables

//console.log(cal1.c) //undefined
const raju=new calculator()
console.log(raju.a)
raju.substract(3,6)
//--------------------------------------
class Arjun{
    //inside class we can create variables
    x=10
    //create methods
    displaymessage(){
        console.log("this is a simple method")
    }
    add(num1,num2){
        return num1+num2
    }
}

const obj1=new Arjun()
result=obj1.add(2,7)
console.log(result)

//=--------------------------

obj1.displaymessage()
// i have a method inside a class
// i don't want to call that method
// it should be automatically invoked
//when we use this type of requirement we use constructor

//constructor - constructor is a method but we no need to call that method it will be automatically invoked
// class Arun{
//     //inside class we can create variables
//     x=10
//     //create methods
//     constructor(){
//         console.log("this is a simple method")
//     }
//     add(num1,num2){
//         return num1+num2
//     }
// }

// const obj2=new Arun()

//======================================
//another example

class Arun{
    //inside class we can create variables
    x=10
    //create methods
    constructor(value1,value2){
        console.log(value1)
        console.log(value2)
    }
    add(num1,num2){
        return num1+num2
    }
}

const obj3=new Arun("kiran","sai")
