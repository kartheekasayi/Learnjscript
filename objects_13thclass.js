creds={
    username:"Admin",
    password:"amin123"
}
console.log(creds.username)
console.log(creds['password']) //property name we have to provide and get the particular value


student={
    firstname:"sai",
    lastname:"pankag",
    place:"bangalore",
    age:30
}
console.log(typeof(student.age))

console.log(student.age)

console.log(student['age']) //these 3 can give the same output

student['gender']="male"

console.log(student.gender) //male
//-------------------------------------
console.log(student.fathername)
student['fathername']='Abc' //adding new properties
console.log(student.fathername)

student['place']="chennai" //modified or upadate the properties value
console.log(student.place)

delete student.age
console.log(student.age)

//in orangehrm

menuitems={
    menu1:"Admin",
    menu2:"PIM",
    menu3:"Leave",
    menu4:"Time"
} //now i want to access this value one by one for that we have to loop it

//forin is the advanced loop came from es6 onwords
for(let item in menuitems){
    console.log("loop starts here")
    console.log(item) //this will give the menu1--menu4
    console.log(menuitems[item])//this will give the value
    console.log("loop ends here")
}

studentname1="Arjun"
studentname2="bhanu"
sentence=`${studentname1} and ${studentname2} are friends`
console.log(sentence)