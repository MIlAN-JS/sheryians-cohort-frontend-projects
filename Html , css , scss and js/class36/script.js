// - `do...while` in JavaScript
// - `forEach` in JavaScript
// - `for in` Loop in JavaScript
// - `for of` Loop in JavaScript




// arrow function 

// function 
// 1. function banaune 
// 2.function bolaune


// a function which takes name and age and returns it 



// function userData(name , age){
//       return (
//         `Name of user is ${name} `
        
//       )
// }


// let roshanData = userData("roshan" , 22)
// const milandata = userData("milan", 12)
// console.log(roshanData , milandata)




// 2. A fuction which takes name age and bodyCount from user and print it 

// let userName  = prompt("Enter name");
// let userAge = +prompt("Enter age")
// let userBodyCount = +prompt("Enter bodyCount");


// function userData(name, age , bodyCount){
//     return 
//         `Name is ${name}
//          Age is ${age}
//         Bodycount is ${bodyCount}`
    
// }

// const  user1 = userData(userName , userAge , userBodyCount)
// console.log(user1)



// 3. storing user data in array 





// const obj1 = {
//     name : "milan",
//     age : 12,
//     class : 13
// }


// for(let key in obj1){
//     console.log(obj1[key])
// }

// console.log(obj1[name])



const nums = [1,2,4, 5, 6, 7,8]


 let ans = nums.reduce((accumulator , current)=>{
    
    return accumulator + current
       
}, 0)

console.log(ans)
