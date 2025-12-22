import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero-section/Hero'
import SkillCard from './components/SkillCard/SkillCard'
import About from './components/About-section/About'
import Crew from './components/CrewMember-section/Crew'
import Footer from './components/Footer-section/Footer'

const App = () => {
  return (
    <main className='max-w-[1400px] px-8 m-auto '>
      
      <header className='flex flex-col gap-4'>

        <Navbar/>
        <Hero/>

      </header>
      <section className="skill-card-container   gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 pt-8">
        <SkillCard  
        title = "LOYALTY" 
        detail="Zoro’s loyalty to Luffy is absolute. He puts his captain’s dream above his own life without hesitation." 
        skill=""
         />
        <SkillCard  
        title = "DISCIPLINE" 
        detail="He trains harder than anyone, endures extreme pain, and never looks for shortcuts. His mindset is pure warrior discipline." 
        skill=""
         />
        <SkillCard  
        title = "Pride & Honor" 
        detail="Zoro lives by a swordsman’s code. He would rather die than lose his honor or betray his principles." 
        skill=""
         />
        <SkillCard  
        title = "Fearless Determination" 
        detail="No matter how strong the enemy, Zoro never backs down. Once he decides to win, pain and fear mean nothing." 
        skill=""
         />
       
      </section>
      <About/>
      <Crew/>
      <Footer/>
      
    </main>
  )
}

export default App