num=45
str="45"//convert string to number
str=Number("45")

num=86 //convert number to string "86"
num=String(86)
console.log(typeof(num))

//BigInt any number above 2^53
num=2**53
console.log(num) //9007199254740992
num2=6654689642165498413213n
num3=3n //when we work with big integer we should give at the end n
//total=6654689642165498413216
 console.log(num2+num3)
 num=34
//num=nuew Number(45) //number as object
//NaN- not a Number
isNaN()//true or false
num=45 //number
//num="sai"-2 //nan
console.log(isNaN(num))

//parse int

str="34.8"
num3=parseInt(str)
console.log(num3)//34

//parseFloat 34.8

max=Math.max(3,4,5,6,789,5,14,444)
console.log(max) //789

minNum=Math.min(3,5,1,2,87,655)
console.log(minNum) //1

num=Math.round(3.7)
console.log(num) //4 for round up to 3.5 it will make it as 4 below 3.5 it will make it as 3

num=Math.ceil(3.2)
console.log(num) //4 if we give 3.1 also it will make it as 4

