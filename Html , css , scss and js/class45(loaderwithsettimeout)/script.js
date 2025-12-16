const btn = document.querySelector('.download');
const h1 = document.querySelector('.percentage')
const inner = document.querySelector('.inner')

let grow = 0 ; 

btn.addEventListener('click',function(){
 
 const int = setInterval(function(){
    if(grow < 100){
        grow++
    }
    h1.innerHTML = `${grow}%`
    inner.style.width = `${grow}%`


    setTimeout(function(){
            clearInterval(int)
    },5000)    
},50)








     
})