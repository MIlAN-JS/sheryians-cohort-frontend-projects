export default function Navbar(){
    let logo = React.createElement("img", {className:"main-logo" , src : 'https://i.pinimg.com/1200x/24/4c/32/244c32123607f93f8b5f0cae61d209fe.jpg', width: '50px'},null)


   


    let bookToCall = React.createElement("a", {href: '#', className : 'book-call'} , "Book A Call")

    let aboutMe = React.createElement("a" , {href:"#"}, "About Me")
    let portfolio = React.createElement("a" , {href:"#"}, "Portfolio")
    let services = React.createElement("a" , {href:"#"}, "Services")
    let blog = React.createElement("a" , {href:"#"}, "Blog")
     let navItemContainer = React.createElement("div", {className: "nav-item-container"},[aboutMe, portfolio, services,blog] )
     let parent;
    return  parent = React.createElement("nav", {className : '-bar'}, [logo, navItemContainer, bookToCall])



    



    
}