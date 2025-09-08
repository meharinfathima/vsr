import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Technology from './components/Technology'
import Team from './components/Team'

const App = () => {
  return (
    <div className='font-sans max-w-screen-lg mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Team />
    </div>
  )
}

export default App