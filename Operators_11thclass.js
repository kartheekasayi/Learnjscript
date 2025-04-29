console.log(4+5)

a=20
b=30
c=a+b
console.log(c)
console.log(45-20)
console.log(4*5)
console.log(8/4)
console.log(9%3)

x=20
x++ //x=x+1 increment operator
console.log(x)

y=23
y-- //y=y-1 decrement operator
console.log(y)

console.log(2==2) //true
console.log(2=="2") //true
console.log(2==4) //false

//double equal will compare only values but not the data types
console.log(2===2) //true

console.log(2==="2") //false
//=== will compare values but also datatypes of operands or values

console.log(4>3) //true

console.log(4>7) //false
console.log(4>4) //false
console.log(4>=4) //true

console.log("4"!=3) //true

console.log((2==2) && (4>3)) //true

console.log((2==="2") || (4>3)) //true

console.log(!(2==2)) //false

x=6
x+=3 //x=x+3
x-=4 //x=x-4
x*=5 //x=x*5

console.log(x)

//conditional operator (or) ternary operator

x="raju"
y="arjun"
z= 2==="2" ? x:y
console.log(z)

workers=4>6 ? 2:1
console.log(workers)

price1=120
price2=60
total=180
console.log(price1+price2==total)

//vehicalstatus="sold"
// vehicalstatus="ingrpogress"

payment=false

status_Of_Vehicle = payment ? "sold":"inprogress"
console.log(status_Of_Vehicle)

//await expect("sold").tobe(status_Of_Vehicle) //pass

//+ - addition
k=3+6 //9 
stuname="raju"+"g" //rajug -concatination (joining 2 strings)

//cohersion
sum = 4+5
console.log(sum) //9

sum = 4+"5"
console.log(sum) // "45"

value3="raju"+5
console.log(value3) //raju5

console.log(10+20+30+"45"+10+20)
