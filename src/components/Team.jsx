import React from 'react'

const teamMembers = [
  {
    name: 'Giribala Arun',
    role: 'Frontend Developer',
    image: '/src/assets/dazzling-star-svgrepo-com.svg',
    bio: 'Focused on UI/UX precision, accessibility, and clean React architecture.'
  },
  {
    name: 'Fathima Meharin Irshad',
    role: 'Backend Engineer',
    image: '/src/assets/dazzling-star-svgrepo-com.svg',
    bio: 'Handles data pipelines, API design, and server-side logic with reliability.'
  },
  {
    name: 'Geevar Saji Kuriakose',
    role: 'ML Researcher',
    image: '/src/assets/dazzling-star-svgrepo-com.svg',
    bio: 'Works on visual speech models and real-time inference systems.'
  },
  {
    name: 'Darsan Prasad',
    role: 'Product Designer',
    image: '/src/assets/dazzling-star-svgrepo-com.svg',
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
        <p className="text-base md:text-xl text-primary-dark max-w-4xl leading-relaxed">
          Meet the minds behind this — engineers, designers, and researchers working together to make silent communication accessible to all.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group bg-[#F9FAFB] rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              {/* Front Face */}
              <div className="p-6 flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-12 w-12 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-xl text-gray-600">{member.role}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary text-[#F0F8FF] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <p className="text-[1.2rem] font-medium text-center">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team