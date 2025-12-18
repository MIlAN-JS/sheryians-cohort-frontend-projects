  function companyDets(){

     let projH1 = React.createElement("h1", {className : "proj-h1"}, "+200");
     let projP = React.createElement("p", {className:"proj-p"}, "Project completed");
     let startupH1 = React.createElement("h1", {className : "startup-h1"}, "+50");
     let startupP = React.createElement("p", {className:"startup-p"}, "Startup raised");

     let completedProj = React.createElement("div", {className:"completed-proj"}, [projH1 , projP])
     let startupRaised = React.createElement("div", {className:"startup-raised"}, [startupH1, ,startupP])

   let companyDetsContainer;
     return  companyDetsContainer = React.createElement("div"  , {className :"dets-container"}, [completedProj,startupRaised])


     

    
}

function HeroText(){
     let heroH1 = React.createElement("h1",{className: "hero-h1"}, "Hello")
     let heroP = React.createElement("p",{className: "hero-h1"}, "-It's D.Nova a design wizerd")



     let heroTxtContainer = React.createElement("div", {className : 'hero-txt-container'}, [heroH1, heroP])
     return heroTxtContainer
}

function HeroBtn(){
     
     let heroBtn = React.createElement("button", {className:'hero-btn'}, "Scroll down ↓")
     return heroBtn
}


export default function Hero(){


     let modelImg = React.createElement("img",{src:"./model0-r0.png"})
     console.log(modelImg)
     let heroContainer = React.createElement("div", {className: "hero-container"}, [companyDets
          (),HeroText(), HeroBtn(),modelImg
     ])

     return heroContainer



         
}

