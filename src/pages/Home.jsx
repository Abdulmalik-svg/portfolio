import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiFirebase, SiFramer } from 'react-icons/si';

const techStack = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" /> },
];

const Home = () => {
  return (
    <main className="bg-slate-950 text-white px-4 py-20 md:px-12 space-y-32 font-sans">

      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-sky-400 drop-shadow-lg">
          Hi, I'm Abdulmalik
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 leading-relaxed">
          I craft beautiful, blazing-fast websites using modern tech like{' '}
          <span className="text-white font-semibold">React</span>,{' '}
          <span className="text-white font-semibold">JavaScript</span>, and{' '}
          <span className="text-white font-semibold">Tailwind CSS</span>.
        </p>
        <a
          href="/projects"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg"
        >
          Explore My Projects
        </a>
      </section>

      {/* Tech Stack */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-sky-400 mb-10">Tech Stack</h2>
        <div className="grid grid-cols-3 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center bg-slate-800 p-6 rounded-xl shadow hover:bg-slate-700 transition duration-300 group"
            >
              <div className="text-4xl mb-2 animate-bounce group-hover:animate-none">
                {tech.icon}
              </div>
              <span className="text-sm text-slate-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What I Build */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold text-sky-400">What I Build</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          I bring ideas to life — from modern landing pages and eCommerce stores to Web3 dashboards and clean UI kits.
          Whether you're launching a startup or need a personal brand, I build scalable, responsive apps with passion.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold text-sky-400">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-slate-800 rounded-xl p-6 text-left hover:shadow-lg transition hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-2">Sign Gallery</h3>
            <p className="text-slate-300 mb-4">
              A digital signature showcase with a smooth interface. Built with React and Tailwind. Clean, fast, and fully responsive.
            </p>
            <a href="/projects" className="text-sky-400 hover:underline text-sm">View Project →</a>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-left hover:shadow-lg transition hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-2">Crypto Dashboard</h3>
            <p className="text-slate-300 mb-4">
              Tracks Ethereum mirror claims and wallet stats in real-time. Built with Vite, React, and Tailwind for performance.
            </p>
            <a href="/projects" className="text-sky-400 hover:underline text-sm">View Project →</a>
          </div>
        </div>
        <a href="/projects" className="text-sky-500 hover:underline font-medium text-lg block mt-6">
          See all projects
        </a>
      </section>
    </main>
  );
};

export default Home;
