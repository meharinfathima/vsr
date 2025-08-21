import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-screen-lg mx-auto px-8 py-16 flex flex-col justify-center items-center text-center gap-6">
        <p className="text-[5rem] md:text-4xl text-primary-dark font-semibold">
          Give Voice to the Voiceless
        </p>
        <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-transparent leading-tight">
          Silent Speech Recognition for the Voiceless
        </h1>
        <p className="text-lg md:text-xl text-primary-dark max-w-3xl">
          Welcome to Silent Speech Recognition, a revolutionary approach to communication for those who cannot speak. Our technology enables individuals to express themselves through silent gestures and movements, bridging the gap between thought and speech.
        </p>
      </div>
    </section>
  )
}

export default Hero