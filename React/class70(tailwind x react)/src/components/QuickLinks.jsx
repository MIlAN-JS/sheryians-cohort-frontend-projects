import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";

const QuickLinks = () => {
  return (
    <div className='flex  gap-3 py-4 px-8'>
        <a href="#" className='hidden  md:flex items-center '>Home <IoIosArrowForward /> </a>
        <a href="#" className='md:hidden flex items-center'> <RiHome5Line /> <IoIosArrowForward /></a>
        <a href="#" className='flex items-center'>Companies <IoIosArrowForward /></a>
        <a href="#">Nepal</a>
    </div>
  )
}

export default QuickLinks