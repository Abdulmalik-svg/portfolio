import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiVite, SiFirebase, SiFramer, 
  SiSolidity, SiEthereum, SiWeb3Dotjs 
} from 'react-icons/si';

const techStack = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-cyan-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-600" /> },

  // Blockchain additions
  { name: 'Solidity', icon: <SiSolidity className="text-gray-800" /> },
  { name: 'Ethereum', icon: <SiEthereum className="text-blue-700" /> },
  { name: 'Web3.js', icon: <SiWeb3Dotjs className="text-green-600" /> },
];

const Home = () => {
  return (
    <main className="bg-gray-200 text-black px-6 pt-32 pb-20 md:px-12 space-y-32 font-sans">

      {/* ========= HERO SECTION ========= */}
      <section className="text-center max-w-5xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-snug">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text">
            Abdulmalik
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
          I craft <span className="font-semibold">beautiful</span>, high-performance
          websites and Web3 applications using modern tools like{' '}
          <span className="font-semibold">React</span>,{' '}
          <span className="font-semibold">JavaScript</span>,{' '}
          <span className="font-semibold">Tailwind</span>, and{' '}
          <span className="font-semibold">Solidity</span>.
        </p>

        <a
          href="/projects"
          className="inline-block bg-black hover:bg-gray-800 text-gray-200 px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg"
        >
          Explore My Projects
        </a>
      </section>

      {/* ========= TECH STACK ========= */}
      <section className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-gray-100 transition duration-300 border border-gray-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-xs text-gray-800 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========= WHAT I BUILD ========= */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-black">What I Build</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          I build everything from modern UI experiences to complete Web3 dApps.
          My work includes frontend development, dashboards, digital stores,
          blockchain tools, interactive UIs, and clean design systems.
        </p>
      </section>

      {/* ========= FEATURED PROJECTS ========= */}
      <section className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-black">Featured Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Project 1 */}
          <div className="bg-white rounded-xl p-6 text-left hover:shadow-xl transition hover:bg-gray-100 border border-gray-300">
            <h3 className="text-2xl font-semibold text-black mb-2">Pi² Mirror Explorer</h3>
            <p className="text-gray-800 mb-4">
              A blockchain explorer for mirrored Ethereum blocks using Pi² VSL technology.
              Built with React, Tailwind, and Web3.
            </p>
            <a href="/projects" className="text-black hover:underline text-sm">
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl p-6 text-left hover:shadow-xl transition hover:bg-gray-100 border border-gray-300">
            <h3 className="text-2xl font-semibold text-black mb-2">FundMe Smart Contract dApp</h3>
            <p className="text-gray-800 mb-4">
              A decentralized crowdfunding platform powered by Solidity smart contracts
              and MetaMask integration.
            </p>
            <a href="/projects" className="text-black hover:underline text-sm">
              View Project →
            </a>
          </div>
        </div>

        <a
          href="/projects"
          className="text-black hover:underline font-medium text-lg block mt-6"
        >
          See all projects
        </a>
      </section>

    </main>
  );
};

export default Home;
