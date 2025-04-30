

//condition - pass 

//in the block some code is there
{
    console.log("Raju")

    console.log("Arun")

    console.log("siva")

} // this block is executed


//if the condition is pass we use this block
//if the condition is fail don't want to run

//if(true) //syntax

if (2 == 2) {

    console.log("Ravi")

    console.log("Kiran")

    console.log("Deekshit")

}

if (2 ==="2") {

    console.log("sai")

    console.log("Vijay")

    console.log("ramu")


} // not be displayed because it is false

//====================
// 2 blocks of code 

// if the condition is Pass run block 1 

// if the condition is failed run block 2 

if (true){
    console.log("Block 1")
}
else {
    console.log("Block 2")
}
//-----------------------------------
if (false){
    console.log("Block 1")
}
else {
    console.log("Block 2")
}


//multiple condtions
if (true) { //this is condition

    console.log(" 1st block ")
}
else if (false) {

    console.log(" 2nd block ")
}

else if (true) {

    console.log(" 3rd block ")
}
//----------------------------------
//multiple conditions
//  if(here we need to pass the condition it give true or false){
//if it is true this block of code should be executed
//  }

//  else if (){


//  }

//  else if (){


//  }
//  else{


//  }

//----------------------------

var x = "Monday"

switch (x) {

    case "Sunday":
        console.log("X value is sunday")
        break;

    case "Monday":
        console.log("X value is Monday")
        break;

    case "Tuesday":
        console.log("X value is Tuesday")
        break;

    case "Wednesday":
        console.log("X value is Wednesday")
        break;

    default:
        console.log("X value is not  a day")
        break;
}


switch (2) {
    case 1:
        {

            console.log("Block 1")
        }
        break;

    case 2:
        {

            console.log("Block 2")
        }
        break;

    case 3:
        {

            console.log("Block 3")
        }
        break;

    case 4:
        {

            console.log("Block 4")
        }
       break;

    case 5:
        {

            console.log("Block 5")
        }
        break;


    default:

    {

        console.log("Defaulat 5")
    }
        break;
}

// if (){ if we give condition this block 

//this block of code will be executed based on this code

// }

// or 

// if(){

//give the correct code if it is false go for else block that is default one
// }
// else{
//default code
// }

// or 

// if(){
//if it is pass execute this other wise for for second condition that is else if

// }

// else if (){


// }

// else{


// }

// or 

// switch (key) { //key should matched to the value that the block of code will be executed
//     case value:
        
//         break;

//     default:
//         break;
// }