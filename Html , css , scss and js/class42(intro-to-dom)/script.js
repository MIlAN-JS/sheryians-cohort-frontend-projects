/* DOM HAS 4 MAIN PILLARS 
// 1. selection of an element 
// 2. changing HTML
// 3. changing css
4. Event listers 
*/ 

// DOM TREE 
//  DOM = HTML = DOCUMENT 


/* 1. selection 
let h1 = document.querySelector(".hello")

let h2 = document.querySelectorAll('h2') // here h2 is a nodelist , similar to array but not an array
console.log(h2) 
*/

/* 2. changing html elements 

let h1 = document.querySelector(".hello")

// h1.innerHTML = "change"
// h1.textContent = "yohohohoh"
 */


/* 3. changing css using js 


let h1 = document.querySelector(".hello")
h1.style.backgroundColor = "blue"
h1.style.color = "white"
 */



/*  4. Event listeners in js 
let h1 = document.querySelector(".hello")

h1.addEventListener('dblclick', ()=>{
    h1.style.color = "green"
})

*/




 const h1 = document.querySelector('.roshan')
 console.log(h1)