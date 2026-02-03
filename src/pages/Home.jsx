import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaLinkedin, FaTwitter
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiVite, SiFirebase, SiFramer, 
  SiSolidity, SiEthereum, SiWeb3Dotjs 
} from 'react-icons/si';
import { ArrowRight, Sparkles, Code2, Palette, Rocket } from 'lucide-react';

const techStack = [
  { name: 'Solidity', icon: <SiSolidity className="text-gray-800" />, color: 'from-gray-100 to-gray-200', accent: 'group-hover:shadow-gray-300' },
  { name: 'Ethereum', icon: <SiEthereum className="text-blue-700" />, color: 'from-blue-50 to-blue-100', accent: 'group-hover:shadow-blue-200' },
  { name: 'Web3.js', icon: <SiWeb3Dotjs className="text-green-600" />, color: 'from-green-50 to-green-100', accent: 'group-hover:shadow-green-200' },
  { name: 'React', icon: <FaReact className="text-cyan-500" />, color: 'from-cyan-50 to-cyan-100', accent: 'group-hover:shadow-cyan-200' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, color: 'from-yellow-50 to-yellow-100', accent: 'group-hover:shadow-yellow-200' },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-500" />, color: 'from-sky-50 to-sky-100', accent: 'group-hover:shadow-sky-200' },
  { name: 'Framer', icon: <SiFramer className="text-pink-600" />, color: 'from-pink-50 to-pink-100', accent: 'group-hover:shadow-pink-200' },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, color: 'from-orange-50 to-orange-100', accent: 'group-hover:shadow-orange-200' },
  { name: 'Vite', icon: <SiVite className="text-purple-500" />, color: 'from-purple-50 to-purple-100', accent: 'group-hover:shadow-purple-200' },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" />, color: 'from-red-50 to-red-100', accent: 'group-hover:shadow-red-200' },
];

const projects = [
  {
    title: 'Pi² Mirror Explorer',
    desc: 'A blockchain explorer for mirrored Ethereum blocks using Pi² VSL technology. Features real-time indexing and deep-linking capabilities.',
    tech: ['React', 'Ethers.js', 'VSL'],
    gradient: 'from-indigo-500 to-purple-600',
    icon: '🔍',
  },
  {
    title: 'FundMe dApp',
    desc: 'Decentralized crowdfunding platform with Chainlink price feeds. Secured via OpenZeppelin standards and audited smart contracts.',
    tech: ['Solidity', 'Hardhat', 'Web3'],
    gradient: 'from-blue-500 to-cyan-600',
    icon: '💰',
  },
  {
    title: 'DeFi Portfolio Tracker',
    desc: 'Real-time multi-chain portfolio tracking with automated yield optimization and gas-efficient transactions.',
    tech: ['React', 'Web3.js', 'Firebase'],
    gradient: 'from-emerald-500 to-teal-600',
    icon: '📊',
  },
];

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Smart Contract Development',
    desc: 'Secure, gas-optimized Solidity contracts with comprehensive testing and auditing.',
    color: 'indigo',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Web3 Frontend',
    desc: 'Beautiful, responsive dApp interfaces with seamless wallet integration.',
    color: 'purple',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Full-Stack dApps',
    desc: 'End-to-end decentralized applications from concept to mainnet deployment.',
    color: 'cyan',
  },
];

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-slate-900 font-sans selection:bg-indigo-200 overflow-hidden relative">
      
      {/* Subtle cursor glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-multiply opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20 md:px-12 space-y-32">
        
        {/* ========= HERO SECTION ========= */}
        <section className="text-center max-w-6xl mx-auto space-y-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-bold text-gray-700 tracking-wide">
                Available for Web3 Projects
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-none">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  Abdulmalik
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 -rotate-1 -z-10 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              I craft{' '}
              <span className="font-semibold text-slate-900">beautiful</span>,
              high-performance websites and{' '}
              <span className="font-semibold text-indigo-600">Web3 applications</span>{' '}
              using modern tools with a focus on{' '}
              <span className="font-semibold text-purple-600">security</span> and{' '}
              <span className="font-semibold text-cyan-600">scalability</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-5 pt-6"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-slate-950 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-300 transition-all"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white border-2 border-gray-200 text-slate-900 px-10 py-4 rounded-2xl font-bold shadow-lg hover:border-indigo-300 hover:shadow-xl transition-all"
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4 pt-8"
          >
            {[
              { icon: <FaGithub />, href: '#', label: 'GitHub' },
              { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
              { icon: <FaTwitter />, href: '#', label: 'Twitter' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* ========= SERVICES SECTION ========= */}
        <section className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              What I Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From smart contracts to stunning interfaces, I deliver end-to-end Web3 solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-white border-2 border-gray-200 p-8 rounded-3xl hover:border-${service.color}-300 hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 text-${service.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= TECH STACK ========= */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">
                Tech Stack
              </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build robust and scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`group bg-gradient-to-br ${tech.color} border-2 border-gray-200 p-8 rounded-2xl hover:border-white shadow-lg ${tech.accent} transition-all duration-300`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700 group-hover:text-gray-900 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= FEATURED PROJECTS ========= */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600">
                Verified contracts and production-ready dApps
              </p>
            </div>
            <motion.a
              href="/projects"
              whileHover={{ x: 5 }}
              className="group flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold text-lg"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />
                
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.a
                  href="/projects"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= STATS SECTION ========= */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-16 relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: '50+', label: 'Smart Contracts' },
                { num: '$2M+', label: 'TVL Secured' },
                { num: '15K+', label: 'Transactions' },
                { num: '99.9%', label: 'Uptime' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-2">
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
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Extraordinary
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Ready to launch your next Web3 project? Let's collaborate and create decentralized solutions that scale.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-slate-950 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-slate-300 hover:shadow-slate-400 transition-all mt-6"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default Home;