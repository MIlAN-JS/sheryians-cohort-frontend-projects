import React from 'react'
// import {Link} from  "react-router-dom"
const Navlink = ({title , bgColor="bg-primary" , textColor = "text-white"}) => {
  return (

    <button className= { `${bgColor}  ${textColor} px-6 py-2 text-xl rounded-lg`}>

        <a href="/">{title}</a>



    </button>
  )
}

export default Navlink;