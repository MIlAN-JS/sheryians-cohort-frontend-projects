const  allElem = document.querySelectorAll(".elem");
const fullElemPage = document.querySelectorAll(".full-page-elem");
const FullPagecloseBtn = document.querySelectorAll(".close-btn")
console.log(fullElemPage)

allElem.forEach((elem)=>{

    elem.addEventListener("click",(e)=>{

      fullElemPage[elem.id].style.display= "block";

    })



})


FullPagecloseBtn.forEach((closeBtn)=>{

  closeBtn.addEventListener("click", ()=>{
      fullElemPage[closeBtn.id].style.display  = "none"
  } )


})








    