//  locking account in 3 attempts 


// method  1


// const myPassword = "hello123"
// let attempts = 0

// let userGivenPass = prompt("Enter your password");
// attempts++

// while(attempts < 3 && userGivenPass!= myPassword){
//     alert("wrong password")
//     userGivenPass = prompt("enter pass")
//     attempts++

//     if(userGivenPass === myPassword){
//         console.log("welcome user");
//     }



// }

// if(attempts === 3){
//     console.error("account locked")
// }


// let attempts = 0;
// let prevPass = "milan123"

// while(true){
//     let newPass = prompt("enter your password")
//     attempts++

//     if(attempts === 3)break;
//     if(newPass === prevPass ){
//         console.log("welcome user")
//         break;
//     }
    
    
    
// }



// 12.stop when stop is typed and count how many times yes is typed

// let stop = "stop";
// let counter = 0;

// while(true){
//     let word  = prompt("enter stop");
//     if (word === "yes") counter++
//     if(word === stop ){
//         console.log("program stopped")
//         break;
//     }


    
    
// }

// console.log(counter)





let word = prompt("enter a word")
let counter = 0;

while (word !="stop"){

    if(word === "yes") counter++
    word = prompt("enter a word")
}