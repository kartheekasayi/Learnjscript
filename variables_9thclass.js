var x=10
var y=20
z=x+y
console.log(z)

//=================

console.log("raju")

//3 key words are available to define scope
//var, let and const
//var stuname ="raju"
//let stuname ="raju"
// const stuname ="raju"

{
    
if(5>3){
    var greet="hi"

    console.log(greet)

}
}

{
    if (5>3){
        const greet="hi"
        console.log(greet)

    }

}




var stuname="arjun"
stuname="darshan"
console.log(stuname) //darshan
//reassign the different value is possible

if(true){
    let trainer ="raju"
    trainer ="murali"
    console.log(trainer)
    
}
//reassign the different value is possible with var and let

if(True){
    const trainer ="raju"
    trainer ="murali"
    console.log(trainer)
    
}
//reassign the different value is possible with const

// const ordernumber="5685466584"
// const ordernumber="87464121456"
// console.log(ordernumber)

// var - variable is a global scope
// let and const - blocked scope variable

//re declaration same variable is possible with var
//re declaration same variable is not possible with let and const

//var available from initial varsion of js
//let and const- from es6 version onwords