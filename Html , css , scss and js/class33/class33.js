/*1. print even numbers from 1 to 20 ;


for(let i=0; i<=20 ; i= i+2){  i+=2
    console.log(i)
}

  
    for(let a=1; a<21 ; a++){
        if(a%2===1){
            console.log(a)
        }
    }

*/

/* 2. print numbers from 10 to1


    // for(let x=10; x>0; x--){
    //     console.log(x)
    // }

    //   for(let x= 10; x>0; x--){

    //     let multipleVal = 2 * x;

    //      console.log(`multiple of 2 * ${x} is ${multipleVal} `);
    //     // multipleVal===18 ?  console.log(`multiple of 2 * ${x} is ${multipleVal} `): ""
    //   }


    // 3.print yes 5 times 

    // for(let a = 1 ; a<6 ; a++){
    //     console.log('yes')
    // }


    // my name is roshan

    */

/* 4. print whether numbers from 1 to 10 are even or odd 

// for(let i=1; i<10; i++){
//     i%2===0? console.log(`${i} is even`) : console.log(`${i} is odd`)
// }
 

// ask a number to the user and check if it is even or odd 

// let data = +prompt("Enter a number");


// if(data%2 === 0){
//    alert(`${data} is even`)
// }
// else{
//     alert(`${data} is odd`)
// }

*/

/* 7. check whether user can give vote or not eligible age is 18

// let age = +prompt("enter age")

// if(age>=18){
//     console.log(`your age is ${age} so you can give vote `)

// }else {
//     alert(`your age is ${age} so you cannot vote lol`)
// }

// age>=18? console.log(`your age is ${age} so you can give vote `) :  alert(`your age is ${age} so you cannot vote lol`)



// let data = prompt()

// if(data === null){
//     console.error("Kyu cancel karraha hai chutiye ")
// }
// else{

//     if(data.trim() === ""){
//         console.error("value to dal laudu")
//     }
//     else if (isNaN(data)){
//         console.error("enter a valid number")
//     }
//     else{

//     }
    
// }

*/


/* 9. Count how many numbers between 1 and 15 are greater than 8


 Loop and count conditionally.


for(let a=1; a< 16; a++){
    // console.log(a)

    if(a>8){
        console.log(`${a} is greater than 8`)
    }
    else{
        if(a=8){
            console.log(`${a} is equal to  8`)
        }
        else{
            console.log(`${a} is smaller than 8`)
        }
    }
}
    */


/* 10. Ask user for password and print access status


 Hardcoded correct password. Compare with user input.

 solution

let password = "hello123"
let userInputPass = prompt("Enter your password")


if(userInputPass.trim()=== password){
        console.log("Welcome user")
}else{
    console.error("incorrect password !! please enter a valid password")
}
*/



// #################  Level 2 – Slightly Tougher but Logical #################



/*11. Allow only 3 attempts to enter correct password
If user gets it right early, stop. If not → “Account locked”

let password = "hello123"



let attempts = 1;

/*using for loop

for(let i=1; i<4; i++){

    let userGivenPass = prompt("Enter your pass")
    if(userGivenPass.trim()=== password){
        console.log("Welcome user")
        break;
    }
    else {
        alert('INVALID PASSWORD')
    }
    
    attempts++


}
if(attempts === 3){
    alert("Incorrect password for 3 times please try again after few times")
}
*/


/*using while loop

while(true){

    let userPass = prompt("Enter a pass")
    if(userPass.trim() === password){
        console.log('welcome bro');
        break;
    }
    else{
       alert("you have entered wrong password");
    }

    if(attempts<3){
        attempts++
    }else{
        break;
    }


}

*/


/* 13. Print numbers divisible by 7 from 1 to 50


 Use modulo % and loop.


for (let i=1; i<51; i++){
    if(i%7===0){
        console.log(`${i} is divisible by 7`)
    }
    else{
        console.log(`${i} cannot be divisible by 7 `)
    }
}

*/

/*14. Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum.

let sum = 0;

for(let i = 1; i<31; i++){
    sum = sum + i;
}
console.log(`The sum of number from 1 to 30 is ${sum}`)
*/

/*15. Keep asking number until user enters an even number
Use while loop. Stop only if input is even.

while (true) {
    let Num  = +prompt("Enter a number")

    if(Num%2 === 0 ){
        console.log(`${Num} is even`)
        break;
    }
    else{
        alert(`${Num} is odd!! please enter even number`)
    }
}
*/


/*16. Print numbers between two user inputs
Input start and end using prompt() → print all between.

let firstNum = +prompt("Enter a first number");
let secondNum = +prompt("Enter second Number");

for(let a=firstNum; a<=secondNum; a++){
    console.log(a)
}

console.log(firstNum , secondNum ) */


/* 17. Print only first 3 odd numbers from 1 to 20
 Use loop. Stop with break after 3 odd prints.

let oddCount = 0;

 for(let a=1; a<=20; a++){
     if(a%2===1){
        oddCount++
        console.log(a)
        if(oddCount===3) break;
         
     }
 } */


/* 18. Ask user 5 numbers. Count how many are positive
 Use loop + condition + counter.


let positiveNumCount = 0

for(let i=1; i<=5; i++){
        
    let num = +prompt("Enter a number");

    if(num>=0){
        positiveNumCount++
    }
        
}

console.log(`There are ${positiveNumCount} positive numbers`)

*/

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”


// let bankBalance = 20000

// for( let a = 1; a<=3; a++){

//      let withdrawlAmount = +prompt("Enter withdrawl amount");
   
//      if(bankBalance > withdrawlAmount){
//         bankBalance = bankBalance - withdrawlAmount;
//         console.log(`withdrawl Nrs ${withdrawlAmount} and your New balance is ${bankBalance} `)
//         break;
//      }
//      else{
//         alert("Insufficient balance")
//      }


// }






// ################## functions to solve the above given problems ##########

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let checkPass = function(){

//    let initialPassword = "roshan123"
//    let passwordCount = 0; 

   

//    for(let a=1; a<=3; a++){

//     let userGivenPass = prompt("enter password");
    
//     if(userGivenPass === initialPassword){
//         alert("Welcome user you have successfully entered");
//         break;
//     }
//     else{
//         passwordCount++
//         alert(`Wrong password : Password try count${passwordCount}`)
//     }


    
    

//    }

//      if(passwordCount == 3){
//         alert("User banned 206 : please try again later");
//     }
  

// }

// checkPass()




// let password = "milan"
// let passCount = 0;

// while(true){
 
//     let givPass = prompt("enter pass")

//       if(password === givPass){
//         console.log("yay");
//         break
//       }
//       else{
//         passCount++
//       }

      


// }


// let userPass = prompt("enter your pass word")
// passCount++

// while(userPass != password){
//     passCount++
//     if (passCount === 3) break;
//         alert("wrong password")
//     userPass = ("enter password");

// }