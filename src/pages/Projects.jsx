import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    title: 'ShieldAudit',
    description: 'Real-time EVM smart contract security analyzer. Detects honeypots, rug pulls, trading taxes, and wallet portfolio risks using on-chain data and GoPlus Security.',
    tech: ['React', 'Tailwind', 'Viem', 'GoPlus API', 'Web3'],
    github: 'https://github.com/Abdulmalik-svg/Analyzer',
    demo: 'https://analyzer-rho-six.vercel.app/',
    image: '/images/sheildaudit.png',
    category: 'Web3',
    featured: true,
  },
  {
    title: 'Raise3: A Blockchain dApp',
    description: 'A smart contract–powered crowdfunding platform with wallet connection, escrow-based funding logic, per-user contribution tracking, and refund fallback.',
    tech: ['Solidity', 'React', 'Web3', 'MetaMask'],
    github: 'https://github.com/Abdulmalik-svg/fund-me-dapp',
    demo: 'https://my-web3-project-hfef.vercel.app/',
    image: '/images/Raise3.png',
    category: 'Web3',
    featured: true,
  },
  {
    title: 'Crypto Dashboard',
    description: 'Live crypto tracker dashboard with charts, portfolio view, and market data.',
    tech: ['React', 'Tailwind', 'CoinGecko API'],
    github: 'https://github.com/Abdulmalik-svg/crypto-dashboard',
    demo: 'https://crypto-dashboard-rho-rosy.vercel.app/',
    image: '/images/crypto dashboard.png',
    category: 'Web3',
    featured: true,
  },
  {
    title: 'Pi² Mirror Explorer',
    description: 'Explorer for mirrored Ethereum blocks and claims on the Pi² testnet.',
    tech: ['React', 'Tailwind', 'Web3'],
    github: 'https://github.com/Abdulmalik-svg/pi2-mirror-explorer',
    demo: 'https://pi2-mirror-explorer.vercel.app/',
    image: '/images/pi2 explorer.png',
    category: 'Web3',
    featured: true,
  },
  {
    title: 'NaijaFlex Ecommerce',
    description: 'A modern ecommerce website to sell physical and digital products with local payments.',
    tech: ['React', 'Tailwind', 'localStorage'],
    github: 'https://github.com/Abdulmalik-svg/naijaflex-store',
    demo: 'https://naijaflex-store-yfxu-p0t1hk5t5-abdulmalik-svgs-projects.vercel.app/',
    image: '/images/naijaflex.png',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Guess My Number',
    description: 'A fun number guessing game built with JavaScript logic and styled UI.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Abdulmalik-svg/my-game',
    demo: 'https://my-game-sigma-nine.vercel.app/',
    image: '/images/guess my number.png',
    category: 'Frontend',
    featured: false,
  },
  {
    title: 'Sign Image Gallery',
    description: 'A stylish gallery app that displays sign language illustrations and images.',
    tech: ['React', 'Tailwind', 'Image Grid'],
    github: 'https://github.com/Abdulmalik-svg/sign-image',
    demo: 'https://sign-image.vercel.app/',
    image: '/images/sign gallery.png',
    category: 'Frontend',
    featured: false,
  },
  {
    title: 'Sandwich Project',
    description: 'A clean and modern sandwich ordering UI built with React and Tailwind.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/Abdulmalik-svg/sandwich-project',
    demo: 'https://sandwich-project-mu.vercel.app/',
    image: '/images/sandwich.png',
    category: 'Frontend',
    featured: false,
  },
];

const categories = ['All', 'Web3', 'Full Stack', 'Frontend'];

const Projects = () => {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);
  const web3Count = projects.filter(p => p.category === 'Web3').length;

  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">

      {/* Grid bg */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32 space-y-20">

        {/* ========= HEADER ========= */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">Portfolio</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              <span className="text-white">My </span>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #10b981' }}>
                Projects
              </span>
            </h1>

            <p className="text-gray-500 text-xl max-w-3xl leading-relaxed">
              Smart contracts, dApps, and frontend applications — built with security and real-world use in mind.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelected(cat)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  selected === cat
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:border-emerald-500/30 hover:text-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* ========= GRID ========= */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className={`group relative bg-white/[0.03] border rounded-3xl overflow-hidden transition-all duration-500 ${
                  project.featured && project.category === 'Web3'
                    ? 'border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]'
                    : 'border-white/8 hover:border-white/15'
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider rounded-full">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-white/[0.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                    <span className={`text-xs font-bold uppercase tracking-wide ${
                      project.category === 'Web3' ? 'text-emerald-400' : 'text-gray-500'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 border border-white/8 rounded-lg text-xs font-semibold text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-gray-500 font-bold text-sm hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </section>

        {/* ========= STATS ========= */}
        <section className="max-w-6xl mx-auto">
          <div className="relative bg-white/[0.03] border border-emerald-500/15 rounded-[3rem] p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 to-transparent" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: `${projects.length}+`, label: 'Projects Built' },
                { num: `${web3Count}`, label: 'Web3 dApps' },
                { num: '100%', label: 'On-Chain Logic' },
                { num: '0', label: 'Rugs Shipped' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2">{stat.num}</div>
                  <div className="text-gray-600 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========= CTA ========= */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.03] border border-white/8 rounded-[3rem] p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/4 to-yellow-400/2" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Have a Web3 Project?
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Let's build something secure, scalable, and trustless together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 text-black px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
                >
                  Let's Talk
                </motion.a>
                <motion.a
                  href="https://github.com/Abdulmalik-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-lg hover:border-white/20 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default Projects;