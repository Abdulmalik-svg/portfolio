import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Filter } from 'lucide-react';
import { useState } from 'react';

const projects = [
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
  {
    title: 'Raise3: A Blockchain dApp',
    description: 'A smart contract–powered crowdfunding platform with wallet connection.',
    tech: ['Solidity', 'React', 'Web3', 'MetaMask'],
    github: 'https://github.com/Abdulmalik-svg/fund-me-dapp',
    demo: 'https://my-web3-project-hfef.vercel.app/',
    image: '/images/Raise3.png',
    category: 'Web3',
    featured: true,
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Web3', 'Full Stack', 'Frontend'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-slate-900 overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32 space-y-16">
        
        {/* ========= HEADER SECTION ========= */}
        <section className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-bold text-gray-700 tracking-wide">
                Portfolio Showcase
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Projects
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of my recent work spanning Web3 dApps, full-stack applications, 
              and modern frontend experiences
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 pt-8"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-slate-950 text-white shadow-xl shadow-slate-200'
                    : 'bg-white border-2 border-gray-200 text-slate-900 hover:border-indigo-300 shadow-lg'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* ========= PROJECTS GRID ========= */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-lg">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 3 }}
                      className="flex items-center gap-2 text-indigo-600 font-bold text-sm hover:text-indigo-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 3 }}
                      className="flex items-center gap-2 text-gray-600 font-bold text-sm hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </section>

        {/* ========= STATS SECTION ========= */}
        <section className="max-w-6xl mx-auto pt-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: `${projects.length}+`, label: 'Projects Built' },
                { num: '4', label: 'Web3 dApps' },
                { num: '100%', label: 'Client Satisfaction' },
                { num: '24/7', label: 'Support Available' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.num}
                  </div>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========= CTA SECTION ========= */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 opacity-50" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Have a Project in Mind?
              </h2>
              
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with cutting-edge technology and beautiful design.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-slate-300 hover:shadow-slate-400 transition-all"
                >
                  Let's Talk
                </motion.a>

                <motion.a
                  href="https://github.com/Abdulmalik-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white border-2 border-gray-200 text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg hover:border-indigo-300 shadow-lg transition-all"
                >
                  <Github className="w-5 h-5" />
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