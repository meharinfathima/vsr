import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full bg-[#F0F8FF] flex items-center overflow-hidden">
      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto px-6 md:px-8 py-16 flex flex-col justify-center items-center text-center gap-6 z-10">
        <p className="text-[1.2rem] md:text-[1.5rem] text-primary-dark font-semibold leading-tight">
          Give Voice to the Voiceless
        </p>
        <h1 className="text-3xl md:text-5xl font-bold animate-fadeIn bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-transparent leading-tight">
          Silent Speech Recognition <br /> for the Voiceless
        </h1>
        <p className="text-base md:text-xl text-primary-dark max-w-4xl">
          Welcome to Silent Speech Recognition, a revolutionary approach to communication for those who cannot speak. Our technology enables individuals to express themselves through silent gestures and movements, bridging the gap between thought and speech.
        </p>
      </div>
    </section>
  )
}

export default Hero