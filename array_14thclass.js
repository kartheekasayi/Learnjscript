//how to declare an array
// arr=[]
// //arr={2,4,5,6,7,8} //wrong syntax

// arr=[2,5,4,6,5,2] //correct

// //How to get the couunt of the elements .length - element count 
// console.log(arr.length)//7

// arr1=["sai","kiran","vinay","sudha"] //all elements are similar data types those are strings

// arr2=["sai", 2,4,5,6,true, undefined,null]
// //arr1[index] 
// //index will always starts from 0
// console.log(arr1[1])
// console.log(typeof(arr1)) //object
// console.log(typeof(arr1[1])) //string
// console.log(typeof(arr2[1])) //number

// //concat //will join 2 arrays
// arr3=arr1.concat(arr2)
// console.log(arr3)

// arr4=["wakeup","read","work","warmup"]

// //how to add element at the end

//  arr4.push("drinking")

//  console.log(arr4)

// //unshift will add element at the begining of the array
// arr4.unshift("breakfast")
// console.log(arr4)

//methods
//.length
//concat
//push
//shift
//unshift
//pop -- will remove the elements at the end
//shift -- will remove elements at the begining of the array
//split()
//join()

// arr4.pop()
// console.log(arr4)//remove the element from the end

//remove all the elements in the array
// let arr5 = ["wakeup", "read", "work", "sleep"];

// for (let i = 1; i < arr5.length - 1; i++) {
//     arr5.pop();
// }

// console.log(arr5);

// str="Javascript"

// //convert string to array - split()
// arr6=str.split("")
// console.log(arr6)

// str="my place is nellore"
// arr7=str.split(" ")
// console.log(arr7)

// arr8=[ 'My','place','is','bangalore' ]
// //join()-convert array to string

// str2=arr8.join("")
// console.log(str2)

// arr=[2,3,4,5] //less
// arr=new Array(2,4,5,1)//more memory than the normal one
// //we will avoid declaring array as object

// //replace one element with another element is possible
arr9=["sai","tharak","kishore"]
arr9[2]="kiran"
console.log(arr9)

 console.log(arr9.indexOf("tharak"))

 arr10 = ["wakeup", "read", "work", "sleep"];//looping an array
arr10.forEach(element=>{
    console.log("loop starts")
    console.log(element)
    console.log("loop ends")
})

//datadriven testing with using objects we done
//datadriven testing with using foreach

arr11 = ["wakeup", "read", "work", "sleep"]
arr11.includes("Meditation")//false
arr11.includes("sleep")//true

if(arr11.includes("sleep")){
    console.log("element is present") //includes will search the entire array if it is present it returns true otherwise it return false
}

//sort
arr12=[2,9,7,6,4,3]
arr13=arr12.sort()
console.log(arr13)

ar1=["raju","lalitha","sudheer","basavaraj","sai"]
ar2=ar1.sort()
console.log(ar2) //if we give capital letter it will take 1st word

let colors=['red','green','blue'];
for(const color of colors){ //for of
    console.log("loop starts")
    console.log(color);
    console.log("loop ends")
}

//in the flip kart we take the mobile i want prices low to high
prices=[9,4,6,7,5,2]
sortedprices=prices.sort() //[2,4,5,7,8,9]
console.log(sortedprices)

//high to low
//reverse the array method
// prices=[2,4,5,7,8,9]
// reversedprices=prices.reverse()
// console.log(reversedprices)

str="my name is sai"//reverse method this string is converted in to array
// arr=str.split("")
// console.log(arr)
// arr2=arr.reverse()
// console.log(arr2)
// str2=arr2.join("")
// console.log(str2)

revstr=str.split("").reverse().join("") //in a single line we can give the reverse string
console.log(revstr)

// for(let item in menuitems){

// }//objects

// for(let item of menuitems){

// }//arrays

//slice
//slice is a part of an array starting from array element 1
//if we give element no from there it should be started 
arr14=[2,9,7,6,4,3]
arr15=arr14.slice(4)
console.log(arr15) //[ 4, 3 ]

//splice
arr16=["jathin","kiran","murali","tharak","kishore"]
arr16.splice(2,3,"sai","indigo") //here  2 represents in the 2nd place new element sould be added
//where as 1 represents how many elements should be removed from the second element
console.log(arr16) //[ 'jathin', 'kiran', 'sai', 'indigo' ]

//map
//array.map(callback(currentValue,index,array))
let numbers = [1, 2, 5, 8];

let doubled = numbers.map(num => num * 2);//It multiplies each number by 2.

console.log(doubled); //[2, 4, 6, 10, 16]

// reduce()
//Executes a reducer function on each element of the array, resulting in a single output value.
const num1 = [1, 2, 3, 4];
const sum = num1.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


//filter
let num = [1, 2, 3, 4, 5];

let result = num.filter(num => num > 3);

console.log(result); // [4, 5]


