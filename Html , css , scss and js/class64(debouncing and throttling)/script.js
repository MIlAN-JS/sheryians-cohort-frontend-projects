// 1. DEbouncing 

// problem
// const search = document.querySelector(".search");

// search.addEventListener("keyup",function(){
//     console.log("Api called");
// })




// debouncing function 

// function debounce(fn,delay){

//     let timer; 

//     return ()=>{
//             clearTimeout(timer);

//             timer = setTimeout(() => {
//                 fn();
//             }, delay);
//     }

// }


// function search(){
//     console.log("api called")
// }

// const debouncedFunc = debounce(search , 500)


// const searchy = document.querySelector(".search");

// searchy.addEventListener("keyup", debouncedFunc);






// let id ;

// function hello(){

//     clearInterval(id);
//     id =  setTimeout(() => {
//         console.log("hello world")
//     }, 600);

    
// }

// btn.addEventListener("click", hello)


// let id;
// function debounce(){
//      return ()=>{
//         clearInterval(id)
//        id =  setTimeout(()=>{
//             console.log("hello")
//         }, 600)
//      }
    
// }


// const returnedFunc = debounce();

// console.log(returnedFunc)

// btn.addEventListener("click", returnedFunc)
// const btn = document.querySelector("button")



// function debounce(fn , delay){
    
//     let id;

//     return ()=> {
//         clearInterval(id)
//        id =  setTimeout(()=>{
//             fn()
//         }, delay)
//     }
// }


// btn.addEventListener("click", debounce(()=>{
//     console.log("k xa bro sanchai ho khana khayau ta ani ");
// } , 600))


