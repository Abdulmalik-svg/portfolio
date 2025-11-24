import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Abdulmalik"
            className="w-80 h-80 rounded-2xl object-cover shadow-xl border border-gray-300"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I'm <span className="font-semibold text-gray-900">Badmus Abdulmalik</span>, a passionate
            Frontend Developer focused on building beautiful, responsive, and user-friendly digital
            experiences. I love turning ideas into clean and interactive interfaces.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I specialize in <span className="font-medium text-gray-900">React</span>,{' '}
            <span className="font-medium text-gray-900">Tailwind CSS</span>, and{' '}
            <span className="font-medium text-gray-900">Vite</span>. Recently, I've been diving deeper
            into <span className="font-medium text-gray-900">Web3 development</span>—building dashboards,
            blockchain explorers, and crypto-focused products.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My coding philosophy is simple: write clean code, create smooth user experiences, and keep
            learning. When I’m not coding, I’m exploring UI/UX trends, improving my design workflow, or
            working on new side projects.
          </p>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm md:text-base font-medium hover:bg-gray-800 transition-all duration-200 shadow-md"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;