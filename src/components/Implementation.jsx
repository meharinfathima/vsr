import React from 'react'

const steps = [
  {
    title: 'Input Capture',
    description: 'Facial movements and lip contours are recorded via camera or sensor array.'
  },
  {
    title: 'Feature Extraction',
    description: 'Landmark detection and motion tracking isolate key visual features.'
  },
  {
    title: 'Model Inference',
    description: 'Deep learning models decode silent articulation into phonetic representations.'
  },
  {
    title: 'Real-Time Output',
    description: 'Predictions are rendered instantly as text or speech with minimal latency.'
  }
]

const Implementation = () => {
  return (
    <section id="implementation" className="w-full py-20 px-6 md:px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#64dfdf] tracking-tight leading-tight">
          Real-Time Implementation
        </h1>
        <p className="text-base md:text-xl text-[#56cfe1] max-w-4xl leading-relaxed">
          Our pipeline translates silent articulation into spoken output through a streamlined sequence of visual processing and inference.
        </p>
      </div>

      {/* Process Flow */}
      <div className="max-w-screen-xl mx-auto mt-20 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative lg:w-1/4">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-0 w-full h-1 bg-[#64dfdf] z-0" />
              )}
              {/* Dot */}
              <div className="w-5 h-5 bg-[#64dfdf] rounded-full z-10 mb-4" />
              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-[#64dfdf] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Implementation