//they are 2 type of functions normal functions and arrow functions are available

//we have a block of code base on condition i want to run this code
//if(true){ //if true this block of code should be run otherwise it will not run


//}

//i have a block of code i have to loop it for a 10 times
//for loop , while loop , do while also

// for (let i=0;i<=10;i++){

// }

// function add(){ //functions without params
//     console.log(2)
//     console.log(5)
//     console.log(2+5)
// }
// add() //2 + 5 =  7

// function add(num1,num2){ //functions with params
//     console.log(num1)
//     console.log(num2)
//     console.log(num1+num2)
// }
// add(3,7)

//fuunctions with return keyword
// function multiply(){
//     console.log(4)
//     console.log(5)
//     return 4*5
// }
// //multiply() //4 5
// x=multiply()
// console.log(x) //20

// function multiply(num1,num2){
//     return num1*num2
// }
// x=multiply(3,5)
// console.log(x)

//functions without params and with return
//functions with params and with return

//from es6 onwords there is a Arrow functions

add=()=>{
    console.log(2)
    console.log(5)
    console.log(2+5)
}
add()//2 + 5 = 7

add=(num1,num2)=>{

    console.log(num1)
    console.log(num2)
    console.log(num1+num2)

}
add(5,8) //5+8=13


function squarerootofNumber(num){
    console.log(num*num)
}

function squarerootofNumber(num){
    return num*num
}
squarerootofNumber=num=>num*num 
{
//for this when you have a multiple statements in your function that time we have to give the breaks and you have to write inside that when we have only single statement that return key word that breaks also not required

}

squarerootofNumber=num=>{
    console.log(num*num)
}

functionname=()=>{

}//when no params

functioname=(param1,param2,param3)=>{

}//when multiple params


functioname=param1=>{

}//when you have single params





