import React from 'react'
import zoroAbt from '../../assets/zoronluffy.jpg'

const About = () => {
  return (
    <section className='flex flex-col-reverse gap-4 md:flex-row'>

        <div className="about-info text-white w-full md:w-1/2 p-6 flex flex-col gap-6 justify-around bg-tri rounded-lg">
           <div>
             <h1 className='text-sm mb-5'>ABOUT</h1>
            <h2 className='text-4xl md:text-6xl '> PIRATE HUNTER RORONOA  </h2>
           </div>

            <div className="info  flex  w-full gap-2 text-sm ">
                <p className='line-clamp-5 hover:line-clamp-none cursor-pointer '>Roronoa Zoro, known as the "Pirate Hunter," is the fiercely loyal, three-sword-wielding combatant and de facto first mate of the Straw Hat Pirates in One Piece:.</p>
                <p className='line-clamp-5 hover:line-clamp-none cursor-pointer'>Driven by a vow to become the world's greatest swordsman after his childhood friend's death, Zoro is known for his incredible strength, unwavering resolve, tendency to get lost, and his intense rivalry with Sanji.</p>
            </div>
        </div>  
        <div className="about-img w-full md:w-1/2 rounded-lg overflow-hidden">
                <img src={zoroAbt} alt="" />
        </div>

    </section>
  )
}

export default About