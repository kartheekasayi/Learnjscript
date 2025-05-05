//coersion
num=2+2
console.log(num)//4

num1="2"+2
console.log(num1)//22

num2=3+"sai"
console.log(num2) //3sai

num0="25"-2
console.log(num0)//24 here string is converted to a number

num3="raju"-2
console.log(num3) //not a number

num4=6+undefined
console.log(num4) //NaN

//totalcareprice=selling price + delivery
totalcarprice=22000+800
console.log(totalcarprice) //22800

//.length
str="raju is staying in blr"
console.log(str.length)//22

str="  raju   " //trim is the method
console.log(str.trim().length) 

str="this is a javascript class"
str2=str.toUpperCase()
console.log(str2) //THIS IS A JAVASCRIPT CLASS

//string convert to Array
console.log(str.split(" ")) //[ 'this', 'is', 'a', 'javascript', 'class' ]

//array to string
arr=["javascript","is", "a","high","level","language"]
str3=arr.join(" ")
console.log(str3) //javascript is a high level language

str="BJKAHKDFHKALakjdfkalkKJADFKslkdf"
st2=str.toLowerCase()
console.log(st2) //bjkahkdfhkalakjdfkalkkjadfkslkdf

//partial string
str="javascript"
//st3=str.substr(0,4) //substr is the method
st3=str.substr(4,str.length) //script
console.log(st3) //java

//charAt()
str.charAt(4)
console.log(str.charAt(4)) //s

//string to number
str="40"
num=Number(str)
console.log(typeof(num)) //typeof is the method




//includes
str="raju arun manoj"
console.log(str.includes("manoj")) //true

//strings are immutable - immutable means cannot be replaced
arr=[3,4,5,6,7]

arr[3]= "9"
console.log(arr) //3,4,5,9,7

str="javassript" //here spelling mistake is there
str[5]="c" //this won't work for you and this will not give you error
console.log(str)

//strings are immutable
//replace()
str1="$196"
str2="$345"
total=Number(str1.replace("$",""))+Number(str2.replace("$",""))
console.log(total) //541

str="raju" //less
str=new String("raju")//this will ocupy lot of memory string is a object

//multiline string
str="raju\narjun"
console.log(str)

str1="raju"
str2="arjun" //if we join 2 arrays we use concat
str3=str1.concat(str2)//in a string + will work as a concation operator also
console.log(str3)

str4="sai\t"+"K"
console.log(str4)