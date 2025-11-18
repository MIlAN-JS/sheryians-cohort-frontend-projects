//selectors

const displayNum = document.querySelector('.display-number h1')
const addBtn = document.querySelector('.add-btn')
const lessBtn = document.querySelector('.less-btn') 
const autoBtn = document.querySelector('.auto-btn')
const stopBtn  = document.querySelector('.stop-btn')
const resetBtn = document.querySelector('.reset-btn')


// writing event listeners 

let counterVal = 0; 
  

 addBtn.addEventListener('click',()=>{


    if(counterVal>= 20 ){
        alert(' max limit reached ')
    }
    else{

         counterVal++
     displayNum.textContent = counterVal;


    }

   

 })

 lessBtn.addEventListener('click',()=>{

    if(counterVal< -20 ){
        alert(' min limit reached ')
    }
    else{     
       counterVal--
      displayNum.textContent = counterVal;
    }


 })

 let intervalId; 

 autoBtn.addEventListener('click',()=>{
   intervalId =  setInterval(()=>{
        counterVal++
          displayNum.textContent = counterVal;
    }, 1000)
 })

 stopBtn.addEventListener('click',()=>{
     clearInterval(intervalId);
     alert('timer stopped')
 })

 resetBtn.addEventListener('click',()=>{
    counterVal=0;
    displayNum.textContent = counterVal;
    
 })