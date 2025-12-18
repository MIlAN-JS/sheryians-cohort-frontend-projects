import Navbar from "./Navbar.js";
import Hero from "./hero.js";


function render(){
    let root = ReactDOM.createRoot(document.querySelector("#root"))
    let mainContainer = React.createElement("div" , null , [Navbar(), Hero()])
    root.render(mainContainer)
}

render()