const screen = document.querySelector('main')

screen.addEventListener('contextmenu', (event)=>{
   event.preventDefault()
   console.log(event)


})