// Oops questions



// 1. Create a user object that stores name and email and has a login method which prints "user logged in "

// const user = {
//     name : 'milan',
//     email : 'milan@gmail.com',
//     isLoggedIn : function(){
//        console.log( `${this.name} is logged in`)
//     }
// }


// user.isLoggedIn()



// 2. Imagine you now have 5 users 
//    First think how you would manage them without using class
//    Then convert the same logic using a class and see how code becomes crystal clearInterval. Write code for both approaches

// const user1 = {
//     name : "user1",
//     email : "user@gmail.com"
// }
// const user2 = {
//     name : "user1",
//     email : "user@gmail.com"
// }
// const user3 = {
//     name : "user1",
//     email : "user@gmail.com"
// }
// const user4 = {
//     name : "user1",
//     email : "user@gmail.com"
// }
// const user5 = {
//     name : "user1",
//     email : "user@gmail.com"
// }



// class User {
//     constructor(name , email){
//         this.name = name
//         this.email = email
//     }


//      isLoggedIn(){
//         console.log(`${this.name} is logged in `)
//     }
// }

// const user1 = new User('milan', 'milan@gmail.com')

// console.log(user1)



 /* 3. Create a product object that stores name and price and has a method whch returns the total price after discount 

 let discountAmount = 2000
 const product1 = {
    name : 'laptop',
    price : 90000,
    totalPrice : function(){

       return this.price - discountAmount


    }
 }


 console.log(product1.totalPrice())
 */



/*  4. Create a car class with the following: 
//  brand 
//  speed
//  a drive method that prints the car brand and speed 


// Create two different car objects from the same class  and verify that their data is different 

class Car {
    constructor(brand , speed){
        this.brand = brand
        this.speed = speed
    }

    drive(){
        console.log(`${this.brand} car is running at ${this.speed}km/hr `)
    }
}


const rollsRoyce = new Car('rollsRoyce' , 300);
rollsRoyce.drive()

const mercedes = new Car('mercedes', 290)
mercedes.drive()
*/


// 5. Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?


// SECTION 3: Constructor and this keyword

/*	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

class Student{
    constructor(name , rollNo){
        this.name  = name
        this.rollNo = rollNo
    }

    intro(){
        console.log(` hello i am ${this.name} and my roll no is ${this.rollNo}`)
    }
}

const hari = new Student('hari' , 21)
hari.intro() */


/* 9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

//The goal is to clearly understand how this works and when it changes.


const obj = {
    name : "milan",
    print: function(){
        console.log(this.name)
    },
    printArrow : ()=>{
        console.log(this)
    }
}*/

// secTION 4: Constructor Functions and Prototypes

/*	10.	Create a User constructor function (do not use class syntax).




function User (name , age ){

      this.name = name 
      this.age = age


}

const obj1 = new createObject('milan', 12)
User.prototype.hello = function(){
    console.log(`hello ${this.name}`)
}
console.log(obj1)

obj1.hello() */


// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype







// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.




// The purpose here is to understand how prototypes help share behavior efficiently.

// ⸻

// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.

// function sayName(){

//         console.log(this.name)
// }

// let obj = {
//     name : 'milan'
// }

// sayName.call(obj)

// call method is used to set the value of this like this = userObj

// apply method = we can call and send arguments in form of array [1,2 ,3 , 4, 'milan'

//bind method creates and returns a new function..........









// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.




    // #################333333 QUESTION SET 2 #######################


    
// SECTION 1: OOPS Thinking with Objects
/* 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.


const laptop = {
    brand : 'lenovo',
    price : '65000',
    powerOn : function(){
            console.log(` ${this.brand} Laptop started`)
    }
}


laptop.powerOn()*/


/*	2.	Add one more method to the same object that increases the price by 10 percent.


const laptop = {
    brand : 'lenovo',
    price : 65000,
    powerOn : function(){
            console.log(` ${this.brand} Laptop started`)
    },
    increasePrice : function(){
             this.price = this.price + (10/100)*this.price
             console.log(this.price)
    }
}

laptop.increasePrice()
*/



/* 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.

// Ans : If i am writing  seperate code to create 10 laptop objects then it will 
//       1. Take a lot of time
//       2. Takes extra memory for every methods
//       3. non readable, non maintainable and non managable

*/




// ⸻

// SECTION 2: Classes and Objects (Reinforcement)

/* 	4.	Create a class named Employee that stores:
// name
// salary
// Add a method showDetails that prints name and salary.


class Employee{
    constructor(name , salary){
        this.name = name 
        this.salary = salary
    }

    showDetails(){
        console.log(`${this.name } has ${this.salary}`)
    }
}
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
 
const employee1 = new Employee('roshan' , 30000)
const employee2 = new Employee('milan' , 18000)
const employee3 = new Employee('kiran' , 12000)
const employee4 = new Employee('hari' , 10000)

employee1.location = 'kadaghari'
console.log(employee1.location)
console.log(employee1)
console.log(employee2)



// console.log(employee1.showDetails());

// console.log(employee1.showDetails === employee2.showDetails) --> true

*/

/* 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?
 Ans : class considered a better option than writing similar objects again and again because class provides features to  write maintainable and scalable code which takes less time to create object and takes less memory ( cause it uses prototype to store methods ) 
*/


// SECTION 3: Constructor and Initialization
/* 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.

class BankAccount{
    constructor(accHolderName , balance){
        this.accHolderName = accHolderName 
        this.balance = balance
    }
    depositAmount(dpAmount){
        this.balance =  this.balance + dpAmount 
        console.log( `New balance is  ${this.balance}`)
    }
}
// 	8.	Inside the constructor, store both values using this.

// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.

     const roshan = new BankAccount('roshan' , 10);
     console.log(roshan.balance)
     roshan.depositAmount(35000)
     const milan = new BankAccount('milan', 5)

// Observe and explain why the second account is not affected.
    
    //   ans : Second account isnt affected because  i hvent called depositAmount() method in second object  so it isnt affected 
*/



// SECTION 4: Understanding this (Very Important)
/* 	11.	Create an object named profile with a property username and a method printName that logs this.username.

const profile = {
    userName : 'roshan',
    printName : function(){
        console.log(this.userName  + 'is gandu')
    }
}

const sayName = profile.printName
sayName.call(profile)

// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it. -- using call , apply or bind ( bind returns a new function)
// Observe what happens to this and explain why.
//    Ans : when i store the method printName() in new varable the new variable is treated like a new function where no 
// 	14.	Modify the code so that this works correctly again.

*/


/* SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

//    function Vechile(type , wheels){
//      this.type = type
//      this.wheels = wheels
//      this.describe = function(){
//           console.log(this.type + this.wheels )
//      }

//    }  


//  const maruti = new Vechile('maruti', 4)
//     maruti.describe()
// ---> normal way no prototype


// &&&&&&&&&&&&&&&&&&&&&& with prototype  &&&&&&&&&&&&&

   function Vechile(type , wheels){
     this.type = type
     this.wheels = wheels
    
   } 
   
   Vechile.prototype.describe = function(){
    console.log(this.type + this.wheels)

   }

   const suzuki =  new Vechile('suzuki', 6)
//    console.log(suzuki);
suzuki.describe()
   
*/
// ⸻
  

/* SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

     function ShowBrand(brand, brandValue){

        this.brand = brand
        this.brandValue = brandValue

        console.log(`Brand Name : ${this.brand} Brand valuation : ${this.brandValue}`)
         
     }

     const gucci = new ShowBrand('gucci', 10000000)
     const universal = new ShowBrand('universal', 100000 )

     ShowBrand.call(gucci)
     ShowBrand.call(universal)



     22 Ans : While calling ShowBrand without using call the value of this is undefined but when we use call method it allows us to pass the object which will be the value of this
*/
// ⸻


/* SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.

function Introduce(city , role){
      this.name = "milan"
      this.city = city
      this.role = role
      console.log(this.name + this.city + this.role )
}

const obj1 = new Introduce()

Introduce.apply(obj1 , ['china',"student"] )

IN call method we cannot pass  arguments but in apply we can pass arguments in the form of array
 */
// ⸻




/* SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.


function greet(){
    
    console.log(`Hello ${this.name}`)
}

const person1  = {
    name : 'milan'
}

const greety = greet.bind(person1)
greety()

30 ans : bind is useful because instead of immediately executiing the function it binds an obj with function and returns a new binded function which can be used later as per need 
*/


