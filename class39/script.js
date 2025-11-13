// // 1. Array and its methods ? 

// Array methods 
// 🧩 1. forEach()

// 👉 Loops through each element in the array and runs a function on it.



/*  1. Add i eat infront of each fruit of an array

let fruits = ['mango', 'orange','banana','pear'];



fruits.forEach((fruit)=>(
        console.log(` i eat ${fruit}`)
 ))
        */


/*  2. Sum of all the numbers in an array 

let nums = [10,20 , 30  , 40 , 50 ,60]
let sum = 0 

nums.forEach((num)=>{
    sum = sum + num; 
    
})

console.log(sum)

*/



// 3. A function to sum all the given numbers given by user 

/* ... Method 1 

let sum = 0 ; 

let sumCalculator = function(...nums){

    
    nums.forEach((num)=>{
        sum = num + sum;
    })

    

}

while(true){
    let num = prompt("Enter number")

    if(num === "stop"){
            break;

    }
    else{
       sumCalculator(Number(num))
    } 
    
}

console.log(sum)

*/


/* ###########3#3 Method 2 ###############

let userNums = []


while(true){
    let num = prompt("Enter number to add or stop to end ")

    if ( num === "stop"){
        break;
    }else{
        userNums.push(Number(num))
    }
}

let sum = function(nums = []){
    let total = 0
    nums.forEach((num)=>{

        total = total +  num;

    })
    return total
}


let ans = sum(userNums)
console.log(ans)
*/


/* 4. count how many even numbers are there in an array 

let nums = []

while(true){
    let numbers = prompt("Enter numbers to check either it is odd or even or type stop to end")

    if(numbers.trim() ==="stop"){
            break;
    }else{
            nums.push(Number(numbers))
    }
}

let numberCheck = function(nums = []){
        nums.forEach((num)=>{
            if(num%2 === 0 ){
                console.log(`The number ${num} is even`)
            }else{
                console.log(`The number ${num} is odd`)
            }
        })
}

numberCheck(nums)

*/


/* 5. Task: Use forEach to calculate the total price of all products.





const products = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 60 },
  { name: "Mango", price: 120 }
];

let totalPrice = 0 ;

products.forEach((product)=>{
  totalPrice = product.price + totalPrice
})

console.log(totalPrice)
*/



/* 6. Convert all names to uppercase of same array  (without map) 

let userNames = ["ram " , "hari", "shyam" , 'gobinda'];

userNames.forEach((name)=>{
     userNames.push(name.toUpperCase().trim()) 
})

userNames.splice(0,  4)


console.log(userNames)

*/


/* 7.Count how many words have more than 5 letters

let count = 0 ; 
let higherWords = [];
let words = []

while(true){
    let word = prompt("enter words")
    if(word.trim() === "stop"){
        break
    }else{
        words.push(word)
    }
}

words.forEach((word)=>{
    if(word.length > 5 ){
        higherWords.push(word)
        count++
    }
})


higherWords.forEach((higherWord)=>{
    console.log(higherWord)
})

console.log(`There are ${count} words that have length more than 5 `)

*/


/* 8.  Given: const names = ["Rita", "Jonathan", "Lee", "Alexander"];
 Task: Use forEach to find and print the longest name.

 const names = ["Rita", "Jonathan", "Lee", "Alexander"];


 let longest;
 let length;


 names.forEach((name)=>{
     longest =  name; 
     length = name.length

     if(name.length > length){
        longest = name;
     }
 })


 console.log(longest)
 console.log(length)

 */


// Used for performing actions (like printing or modifying something).

// 🧩 2. map()

// 👉 Creates a new array by applying a function to every element.

// Used for transforming data.

// 🧩 3. filter()

// 👉 Creates a new array with elements that pass a condition.

// Used for filtering out unwanted items.

// 🧩 4. find()

// 👉 Returns the first element that matches a condition.

// Used for finding one item.

// 🧩 5. findIndex()

// 👉 Returns the index of the first element that matches a condition.

// Used to find positions instead of values.

// 🧩 6. some()

// 👉 Returns true if any element passes the test.

// Used for checking if at least one element meets a condition.

// 🧩 7. every()

// 👉 Returns true if all elements pass the test.

// Used for checking all elements together.

// 🧩 8. reduce()

// 👉 Combines all elements into a single value (like sum, product, etc.).

// Used for totals or accumulations.

// 🧩 9. push()

// 👉 Adds an element to the end of the array.

// Used for adding items.

// 🧩 10. pop()

// 👉 Removes the last element from the array.

// Used for removing items from the end.

// 🧩 11. shift()

// 👉 Removes the first element from the array.

// Used for removing from the start.

// 🧩 12. unshift()

// 👉 Adds elements to the start of the array.

// Used for inserting at the beginning.

// 🧩 13. concat()

// 👉 Joins two or more arrays together.

// Used for merging arrays.

// 🧩 14. slice()

// 👉 Returns a copy of part of an array (without changing the original).

// Used for cutting out sections.

// 🧩 15. splice()

// 👉 Adds, removes, or replaces elements inside the original array.

// Used for editing arrays directly.

// 🧩 16. indexOf()

// 👉 Returns the index of the first match (or -1 if not found).

// Used for searching elements.

// 🧩 17. includes()

// 👉 Checks if an array contains a certain value (returns true/false).

// Used for quick existence checks.

// 🧩 18. join()

// 👉 Converts array elements into a string, separated by commas or custom separator.

// Used to create strings from arrays.

// 🧩 19. reverse()

// 👉 Reverses the order of array elements (changes the original array).

// Used for flipping order.

// 🧩 20. sort()

// 👉 Sorts elements in alphabetical or numerical order.

// Used for sorting lists.

// 🧩 21. flat()

// 👉 Flattens a nested array into a single-level array.

// Used for removing inner array layers.

// 🧩 22. flatMap()

// 👉 Similar to map() but flattens the result by one level.

// Used for transforming and flattening in one step.

// 🧩 23. toString()

// 👉 Converts an array into a comma-separated string.

// Used for simple output.

// 🧩 24. fill()

// 👉 Fills all (or some) elements with a static value.

// Used for creating pre-filled arrays.

// 🧩 25. from()

// 👉 Converts an array-like or iterable (like string or NodeList) into a real array.

// Used for converting to arrays.

// 🧩 26. isArray()

// 👉 Checks whether a given value is actually an array.

// Used for type checking.

// 🧩 27. keys() / values() / entries()

// 👉 Returns iterators for indexes, values, or both.

// Used for looping with more control.





// const names = ['milan', 'roshan','aayush'];


// names.forEach(function(value){

//     console.log(value)

// })













// ################ questions to solve #######################3


/* 1. Write a function `sayHello()` that prints `"Hello JavaScript"`
   
   level 1 
const sayHello = function(){
    console.log("Hello javascript")

}


sayHello()


//   Level 2 

// 1. Asks user the data  and print it in console 

const userData = prompt("Enter data to print")

const printUserData = function(data){

    console.log(data)
}


printUserData(userData);
*/


/* 2. . Create a function `add(a, b)` that returns their sum and log the result.


//  level 1 : 

// const add  = function(a , b){
//     sum = a + b;
//     console.log(sum)
// }

// add(5, 9)


// Level 2 : 

const numbers  = []

while(true){
    let nums = prompt("Enter number to sum and stop to end")
    if(nums === "stop"){
        break;
    }else{
        numbers.push(Number(nums))
    }
}


const add = function(nums = []){
    let sum = 0; 

    nums.forEach((num)=>{
        sum = num + sum ;
    })

    return sum;

}


let ans = add(numbers)

console.log(ans)

*/


/* 3. Write a function with a default parameter name and print helllo name 

 const sayName = function(name = "milan"){
    console.log(`Hello ${name}`)
 }

 sayName()

 */


// ########### Re-code for youtube ###########

 
/* 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.


function sayHello(){
    console.log("Hello Javascript");
}

sayHello()

*/

/* 2. Create a function `add(a, b)` that returns their sum and log the result.


let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter second number");

 function add(num1 , num2){

    let sum  = num1 + num2
    console.log(sum)

 }


 add(firstNumber , secondNumber) */


/* 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.


function sayHello(name = "Guest"){

    console.log(`Hello ${name}`)

}

sayHello()

*/


/*  4. Use rest parameters to make a function that adds unlimited numbers.



function addUnlimitedNums(...nums){

    let total = 0;  

    nums.forEach((num)=>{
            total = num + total;   
    })

    console.log(total)
    
    
}

addUnlimitedNums( 2 , 3 , 5, 4, 6) */


/*  5 . Create an IIFE that prints `"I run instantly!"`.

(
    function(){
        console.log('I run instantly')
    }
)() */

/*  6.  Make a nested function where the inner one prints a variable from the outer one.

    function parent(){

        let myIdentity = "I am batman "

        function child(){

            console.log(myIdentity)

        }

        child()


    }


    parent()  */

/* 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

const fruits = [ "mango ", "orange"  ,"Banana", "papaya" , "kera"];


fruits.shift()
fruits.push("mango")

console.log(fruits) */

/* 8. Use a `for` loop to print all elements of an array.

const fruits = [ "mango ", "orange"  ,"Banana", "papaya" , "kera"];

for ( let i = 0 ; i<fruits.length; i++){
    console.log(fruits[i])
}*/


/* 9. Create an object `person` with keys `name`, `age`,and `city`, and print each key’s value.

const person = {
    name : "milan",
    age: 20,
    city: "china"
}
 

for (const key in person) {
   
    console.log(person[key])
    
} */

/* 10.  Use `setTimeout()` to log `"Time’s up!"` after 2seconds.

  setTimeout(()=>{
    console.log("time sidiyo hai aba 2 s vaisakyo")
  },2000)

  */