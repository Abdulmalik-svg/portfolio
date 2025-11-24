import React from 'react';

const projects = [
  {
    title: 'Guess My Number',
    description: 'A fun number guessing game built with JavaScript logic and styled UI.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Abdulmalik-svg/my-game',
    demo: 'https://my-game-sigma-nine.vercel.app/',
    image: '/images/guess my number.png',
  },
  {
    title: 'NaijaFlex Ecommerce',
    description: 'A modern ecommerce website to sell physical and digital products with local payments.',
    tech: ['React', 'Tailwind', 'localStorage'],
    github: 'https://github.com/Abdulmalik-svg/naijaflex-store',
    demo: 'https://naijaflex-store-yfxu-p0t1hk5t5-abdulmalik-svgs-projects.vercel.app/',
    image: '/images/naijaflex.png',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Live crypto tracker dashboard with charts, portfolio view, and market data.',
    tech: ['React', 'Tailwind', 'CoinGecko API'],
    github: 'https://github.com/Abdulmalik-svg/crypto-dashboard',
    demo: 'https://crypto-dashboard-rho-rosy.vercel.app/',
    image: '/images/crypto dashboard.png',
  },
  {
    title: 'Pi² Mirror Explorer',
    description: 'Explorer for mirrored Ethereum blocks and claims on the Pi² testnet.',
    tech: ['React', 'Tailwind', 'Web3'],
    github: 'https://github.com/Abdulmalik-svg/pi2-mirror-explorer',
    demo: 'https://pi2-mirror-explorer.vercel.app/',
    image: '/images/pi2 explorer.png',
  },
  {
    title: 'Sign Image Gallery',
    description: 'A stylish gallery app that displays sign language illustrations and images.',
    tech: ['React', 'Tailwind', 'Image Grid'],
    github: 'https://github.com/Abdulmalik-svg/sign-image',
    demo: 'https://sign-image.vercel.app/',
    image: '/images/sign gallery.png',
  },

  // ===========================
  // ⭐ NEW PROJECTS
  // ===========================

  {
    title: 'Sandwich Project',
    description: 'A clean and modern sandwich ordering UI built with React and Tailwind.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/Abdulmalik-svg/sandwich-project',
    demo: 'https://sandwich-project-mu.vercel.app/',
    image: '/images/sandwich.png',
  },
  {
    title: 'FundMe Blockchain dApp',
    description: 'A smart contract–powered crowdfunding platform with wallet connection.',
    tech: ['Solidity', 'React', 'Web3', 'MetaMask'],
    github: 'https://github.com/Abdulmalik-svg/fund-me-dapp',
    demo: 'https://blockchain-d-app.vercel.app/',
    image: '/images/fundMe.png', // UPDATED ✔️
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-black px-6 md:px-20 pt-32 pb-16">
      <h2 className="text-4xl font-bold text-black mb-12 text-center">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-2">{project.title}</h3>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-black text-xs text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:nounderline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:nounderline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
