import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-black px-6 md:px-20 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Abdulmalik"
            className="w-80 h-80 rounded-2xl object-cover border-4 border-black shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hi, I'm Abdulmalik.
            A passionate frontend developer who’s obsessed with crafting pixel-perfect UIs and building fast, interactive websites that users love.
          </p>
          <p className="text-gray-800 leading-relaxed">
            My current stack includes <span className="text-black font-semibold">React</span>,{' '}
            <span className="text-black font-semibold">Tailwind CSS</span>, and{' '}
            <span className="text-black font-semibold">Vite</span>. Whether I’m designing responsive landing pages or building Web3 dashboards, I strive for clean code, seamless UX, and performance.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            I'm constantly learning, experimenting, and pushing the boundaries of what I can build. Outside of coding, I’m probably exploring design trends or contributing to cool projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
