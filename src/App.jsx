import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Technology from './components/Technology'
import Team from './components/Team'
import FutureVision from './components/FutureVision'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor'
import Implementation from './components/Implementation'

const App = () => {
  return (
    <div>
      <SplashCursor />
      <div className='font-sans max-w-screen-lg mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Team />
        <Implementation />
        <FutureVision />
      </div>
    </div>
  )
}

export default App