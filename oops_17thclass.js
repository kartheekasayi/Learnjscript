class classname{
    m1
    m2
    m3
}
//to work with this methods we create object of this particular class
const object1=new classname() //behaviour of this object is called oops

//1 - Encapsulation
//binding the data between the methods

class student{ //class name
    m1(){ //methods  
        console.log("sample m1")
    }

    m2(){
        console.log("sample m2")
    }

}
//we call object
const stu1=new student()
stu1.m2() //with this stu1 we can call m1 and m2

class Employee{
    //declare 3 variables here which is undefined variable
    empname

    empage

    emporg

    gettheemployeedetails(value1,value2,value3){
        this.empname=value1
        this.empage=value2
        this.emporg=value3
    

    }
    //another method
    displaydetails(){
        console.log(this.empname,this.empage,this.emporg)
    }
}

const emp1=new Employee()
emp1.gettheemployeedetails("vinay",27,"oracle") //this will set the values to the variables

emp1.displaydetails() //undefined
//setter
//geter

//2 - Inheritance 
// class A{
//     m1(){
//         console.log("this is m1 method")
//     }

//     m2(){
//         console.log("this is m2 method")
//     }

//     m3(){
//         console.log("this is m3 method")
//     }

// }

// class B extends A{
//     m4(){
//         console.log("this is m4 method")
//     }

//     m5(){
//         console.log("this is m5 method")
//     }

//     m6(){
//         console.log("this is m6 method")
//     }

// }

// const obj=new B()
// obj.m1() //class A
// obj.m5() //class B

//multi level inheritence
// class A{
//     m1(){
//         console.log("this is m1 method")
//     }

//     m2(){
//         console.log("this is m2 method")
//     }

//     m3(){
//         console.log("this is m3 method")
//     }

// }

// class B extends A{
//     m4(){
//         console.log("this is m4 method")
//     }

//     m5(){
//         console.log("this is m5 method")
//     }

//     m6(){
//         console.log("this is m6 method")
//     }

// }

// class c extends B{
//     m7(){
//         console.log("this is m7 method")
//     }

//     m8(){
//         console.log("this is m8 method")
//     }

//     m9(){
//         console.log("this is m9 method")
//     }

// }
// const obj=new c()
// obj.m1()
// obj.m5()
// obj.m9()

//3 - polymorphism : polymorphism is a sub concept of inheritence
//in polymorphism 2 concepts are available
//method overloading
//method ovrriding

// class A{

//     add(num1,num2){
//         console.log(num1)
//         console.log(num2)
//         console.log("result="+(num1+num2)) //concatination
//     }

//     displayMessage(){
//         console.log("This Method is from parent")
//     }
//     m1(){
//         console.log("this is m1 method")
//     }

//     m2(){
//         console.log("this is m2 method")
//     }

//     m3(){
//         console.log("this is m3 method")
//     }

// }

// class B extends A{

//     add(num1,num2,num3){
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log("result="+(num1+num2+num3))
//     }

//     displayMessage(){
//         console.log("This Method is from child")
//     }
//     m4(){
//         console.log("this is m4 method")
//     }

//     m5(){
//         console.log("this is m5 method")
//     }

//     m6(){
//         console.log("this is m6 method")
//     }

// }

// const obj3 =new B()
// obj3.displayMessage() //method overriding
// // //Instead of executing parent class method instead of executing child class method when the method signature (signature means)
// // //same name
// // //same num of params

//  obj3.add(2,4,7)//parameter 13


// const obj1 =new A()
// obj1.displayMessage() //method overriding
// //Instead of executing parent class method instead of executing child class method when the method signature
// //same name
// //same num of params

// obj1.add(2,4,7)//method over loading

// //4 - prototype
// class student1{
//     x="vinay"
//     m1(){ //method
//         console.log("method m1")
//     }

//     m2(){ //method
//         console.log("method m2")
//     }
// }

// y="murali" //prototyped variable

// function m3(){
//     console.log("function m3")
// }

// const ob1=new student1()
// console.log(ob1.x)
// console.log(ob1.y)//this is not possible to access now

//----------------------------------------------------------------

class student1{
    x="vinay"
    m1(){ //method
        console.log("method m1")
    }

    m2(){ //method
        console.log("method m2")
    }
}

student1.prototype.y="murali" //prototyped variable

student1.prototype.m3=function(){ //method name m3 this is protyped method
    console.log("Method m3")
}

const ob1=new student1()
console.log(ob1.x)
console.log(ob1.y)//possible to access now
ob1.m3()

const ob2=new student1()
console.log(ob2.x)
console.log(ob2.y) //if we give another object it is executed that is prtotype variable
ob2.m3()

//Abstraction - not supported
//Interfaces - not supported

//what is the difference between JS and TS
