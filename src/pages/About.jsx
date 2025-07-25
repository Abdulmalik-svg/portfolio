import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 md:px-20 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Abdulmalik"
            className="w-80 h-80 rounded-2xl object-cover border-4 border-sky-500 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-sky-400 mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            Hi, I'm Abdulmalik — a frontend developer who’s obsessed with crafting pixel-perfect UIs and building fast, interactive websites that users love.
          </p>
          <p className="text-slate-400 leading-relaxed">
            My current stack includes <span className="text-white font-semibold">React</span>,{' '}
            <span className="text-white font-semibold">Tailwind CSS</span>, and{' '}
            <span className="text-white font-semibold">Vite</span>. Whether I’m designing responsive landing pages or building Web3 dashboards, I strive for clean code, seamless UX, and performance.
          </p>
          <p className="text-slate-400 leading-relaxed mt-4">
            I'm constantly learning, experimenting, and pushing the boundaries of what I can build. Outside of coding, I’m probably exploring design trends or contributing to cool projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
