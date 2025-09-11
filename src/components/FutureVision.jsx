import React from "react"



const futureCards = [
  {
    title: "Multilingual Visual Recognition",
    desc: "Expand lip-reading models to support multiple languages and dialects, enabling inclusive communication.",
    icon: "/src/assets/language-svgrepo-com.svg",
  },
  {
    title: "AR/VR Integration",
    desc: "Seamlessly integrate with AR and VR environments, bringing silent communication into immersive worlds.",
    icon: "/src/assets/vr-svgrepo-com.svg",
  },
  {
    title: "Wearable Devices",
    desc: "Design lightweight, discreet camera-based wearables for capturing facial cues naturally in daily life.",
    icon: "/src/assets/wearable-svgrepo-com.svg",
  },
  {
    title: "Cross-User Adaptation",
    desc: "Refine deep learning models to generalize across users with diverse facial features and articulation styles.",
    icon: "/src/assets/adaptation-svgrepo-com.svg",
  },
]

const FutureVision = () => {
  return (
    <section id="future" className="relative w-full py-20 px-6 md:px-8 bg-black">
      {/* Heading */}
      <div className="relative max-w-screen-lg mx-auto flex flex-col items-center text-center gap-6 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#64dfdf] tracking-tight leading-tight">
          Future Vision
        </h1>
        <p className="text-base md:text-xl text-[#56cfe1] max-w-4xl leading-relaxed">
          SilentSpeech is evolving toward a world where visual communication becomes effortless,
          accurate, and universal. Our roadmap focuses on making visual speech recognition more
          adaptive, inclusive, and practical for real-world use.
        </p>
      </div>

      {/* Card Section with Background Glow */}
      <div className="relative max-w-screen-lg mx-auto mt-16">
        {/* Background Glow only for cards */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 
                      rounded-3xl blur-3xl"
        />

        {/* Cards Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
          {futureCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl 
                           p-6 flex flex-col items-center text-center shadow-lg 
                           transition transform hover:-translate-y-2 hover:scale-105 
                           hover:shadow-cyan-400/50"
              >
                <img src={card.icon} alt={card.title} className="w-12 h-12 mb-4" />

                <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FutureVision
