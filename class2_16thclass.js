class Employee{
    static x="raju"//static variable
    y="arjun" //non static variable

    display(){
        console.log("this is a simple method")
    }

    m1(){
        console.log("this is m1")
    }
    
    //static method remaining are non static methods
    static m2(){
        console.log("this is m2")
    }

    m3(){
        console.log("this is m3")
    }
}

const emp1=new Employee() //we non need to create object of the class to access static variables and methods
console.log(emp1.x)

// classname.variablename
// (or)
// classname.method

//to access the non static variables and methods we should create object
//console.log(Employee.x) //this is static variable we can't access non static methods
//Employee.m2() //without creating an object

//this keyword
class student{
    
    x="vamsi" //variable

    m1(){

        console.log(this.x)//printing the variable
        console.log("this method is m1")
    }
    
    m2(){
        this.m1()
        console.log("this method is m2")
        this.m3()
    }

    m3(){
        console.log("this method is m3")
    }

}

const stu1=new student()
stu1.m2()
//when we use this?
//(Ans) when we are calling a method or variable in another method within the class