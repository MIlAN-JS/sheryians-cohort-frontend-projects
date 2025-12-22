import React from 'react'
import heroImg from "../assets/hero-img.webp";

const HeroSection = () => {
  return (
    <section id='Hero-page' className='w-full h-fit  p-4 flex flex-col gap-5 lg:flex-row-reverse' >
        
        <div id="hero-img" className=' bg-black w-full h-65 '>
            <img  className=' object-cover h-full w-full' src={heroImg} alt="" />

        </div>

        <div id="hero-info" className='flex flex-col gap-5  ' >
            <div className="hero-heading text-2xl font-bold">

           
            <h1>There are <span className='text-links'>207 </span> Companies in <span className='text-links'>Nepal</span></h1>
             <h1>that cover <span className='text-links'>109</span> Services and Industries!</h1>
                </div> 
             <p className='font-semibold'>
                The IT sector in Nepal is an emerging area of the country. It is one of the priorities for the Nepalese government. This country specializes in web and mobile apps development, they have a lot of new startups, but also big companies like Verisk, Leapfrog, or Brain Digit IT Solutions, and of course, many of the companies in Nepal are providing services for other companies in Europe, America, and other countries in Asia.
             </p>
            
            <p className='font-semibold'>Discover top IT Companies in Nepal specialized in web development, software development, web design, UI/UX design, digital marketing, branding and more.</p>
        </div>
    </section>
  )
}

export default HeroSection