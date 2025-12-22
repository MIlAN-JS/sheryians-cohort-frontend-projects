import React from 'react'
import Navbar from './components/Navbar'
import QuickLinks from './components/QuickLinks'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <main className='w-full  h-dvh bg-background'>
    <Navbar/>
    <QuickLinks/>
    <HeroSection/>
    </main>
  )
}

export default App