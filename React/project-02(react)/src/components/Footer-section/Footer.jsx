import React from 'react'
import { FaFacebook , FaInstagram, FaGithub} from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='text-white flex items-center justify-between py-10'>
         <h1 className='text-4xl hidden md:block    '>MUGIWARAS </h1>
         <p className=' text-3xl md:block'>사랑해요 !! </p>
         <div className="social-links flex items-center text-4xl gap-3 cursor-pointer ">
            <i className='hover:scale-90 transition-all ease-in-out duration-200'><FaFacebook /></i>
            <i className='hover:scale-90 transition-all ease-in-out duration-200' ><FaInstagram /></i>
            <i className='hover:scale-90 transition-all ease-in-out duration-200'><FaTiktok /></i>
            <i className='hover:scale-90 transition-all ease-in-out duration-200'><FaGithub /></i>
         </div>
    </footer>
  )
}

export default Footer