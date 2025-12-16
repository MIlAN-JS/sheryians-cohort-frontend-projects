/* 1. Write a higher order function runtwice that takes another function and executes it two times\

function runTwice(hello){

hello()
hello()
console.log("i am runtwice")
    
}
runTwice(hello)


function hello(){
    console.log("hello world")
}  

*/

/* 2. Create one pure function that always returns the same output for given input , and one impure function using a global variable 


// pure function 
const pureFunc = function(num){

    const ans = num + num
    console.log(ans)
}

pureFunc(5)



//  impure function 
let name = "milan"
let randomVal =  Math.floor( Math.random()*100)

const impureFunc = function (name){


    console.log( ` Name is ${name} and body count is  ${randomVal} ` )


}

impureFunc(name)
*/


/* 3. Write  a function that uses object destructuring  inside parameters to extract and print name and age. 

const user = {
    name : "Milan",
    age : 20, 
    home : 'china '

}

function userData({name , age}){
    console.log(`Name is ${name} and age is ${age}`);

}

userData(user)
*/

/* 4. Demonstrate the difference between  normal function and arrow function when used as object methods (this issue)


// const user1 = {
//     name: "hari",
//     age:12,
//     data : function(){
//         console.log(`user name is ${this.name} and age is ${this.age}`)
//     }
// }

// user1.data()
const user2 = {
    name: "shyam",
    age:21,
    data : ()=>{
        console.log(`user name is ${this.name} and age is ${this.age}`) // here this.name and this.age is undefined because we cannot use arrow funtion as a method in an object  and this in arrow function refers to window object now our own object
    }
}


user2.data()
[Note : Arrow function takes the value of this from its parent ]

*/


/* 5. Given an array of numbers , use map() to create a new array where each number is squared


const normalNum = [2,3,4,5,6,7,8]

const squaredNum = normalNum.map((num)=>{
    return num * num ;
})

console.log(squaredNum)
*/


/* 6. Use filter to get only even number from an array 

const  allNum = [1,2,3,4,5,6,7,8,9,10]

const evenNum = allNum.filter((num)=>{
    return num % 2 == 0;
})

console.log(evenNum)
*/

/* 7. Use reduce() to find the total salary from an array of numbers [1000, 2000 , 3000]

const numbers = [1000, 2000 , 3000]

const total = numbers.reduce((acc , val)=>{

    return acc + val

},0)

console.log(total)

*/


/* 8. Create an array of names and use some() and every() to test a condition (eg. all names longer than 3 chars )


const users = ["hari", "shyam", "binod", "Milan","roshan "]

const newUsers = users.some((user)=>{
     return users.length < 3; 
})

console.log(newUsers)

const ans = users.every((user)=>{
    return users.length < 3 ; 
})

console.log(ans)

*/


/* 9. Create an object user and test the behaviour of Object.freeze() and Object.seal() by adding/changing keys.

const fruits = {
    name : 'mango',
    price : '200',
    famous : 'nepal'
}

console.log(fruits)

// Object.seal(fruits)

fruits.taste = "sweet"

console.log(fruits)
*/

