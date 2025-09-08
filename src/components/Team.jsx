import React from 'react'

const teamMembers = [
  {
    name: 'G',
    role: 'Frontend Developer',
    image: '/assets/g.svg',
    bio: 'Focused on UI/UX precision, accessibility, and clean React architecture.'
  },
  {
    name: 'M',
    role: 'Backend Engineer',
    image: '/assets/m.svg',
    bio: 'Handles data pipelines, API design, and server-side logic with reliability.'
  },
  {
    name: 'G',
    role: 'ML Researcher',
    image: '/assets/g2.svg',
    bio: 'Works on visual speech models and real-time inference systems.'
  },
  {
    name: 'D',
    role: 'Product Designer',
    image: '/assets/d.svg',
    bio: 'Crafts intuitive interfaces with a focus on user empathy and clarity.'
  }
]

const Team = () => {
  return (
    <section id="team" className="w-full py-20 px-6 md:px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-transparent tracking-tight leading-tight">
          Our Team
        </h1>
        <p className="text-base md:text-[1.2rem] text-primary-dark max-w-4xl leading-relaxed">
          Meet the minds behind this — engineers, designers, and researchers working together to make silent communication accessible to all.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#F9FAFB] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <img src={member.image} alt={member.name} className="h-24 w-24 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team