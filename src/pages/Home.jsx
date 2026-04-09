import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  FaReact, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss, SiVite, SiSolidity, SiEthereum
} from 'react-icons/si';
import { ArrowRight, Shield, Zap, Lock, ExternalLink, ChevronDown } from 'lucide-react';

const techStack = [
  { name: 'Solidity', icon: <SiSolidity />, color: 'text-gray-300' },
  { name: 'Ethereum', icon: <SiEthereum />, color: 'text-blue-400' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'Vite', icon: <SiVite />, color: 'text-purple-400' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-400' },
];

const blockchainProjects = [
  {
    title: 'Raise3',
    subtitle: 'On-Chain Crowdfunding Protocol',
    description: 'Escrow-based crowdfunding platform with smart contract–enforced funding logic, per-user contribution tracking, and automatic refund fallback for failed campaigns.',
    features: ['Smart contract escrow system', 'Per-user contribution tracking', 'Claim + refund logic'],
    tech: ['Solidity', 'Ethers.js', 'React', 'Tailwind'],
    github: 'https://github.com/Abdulmalik-svg/fund-me-dapp',
    demo: 'https://my-web3-project-hfef.vercel.app/',
    accent: 'emerald',
    icon: '🏗️',
    featured: false,
  },
  {
    title: 'ShieldAudit',
    subtitle: 'Smart Contract Risk Analyzer',
    description: 'Real-time EVM smart contract security analyzer that detects honeypots, rug pulls, trading taxes, and unsafe Solidity patterns using on-chain data and GoPlus Security.',
    features: ['Vulnerability detection', 'Contract safety scoring', 'Pre-deployment analysis'],
    tech: ['Solidity', 'JavaScript', 'React', 'GoPlus API'],
    github: 'https://github.com/Abdulmalik-svg/Analyzer',
    demo: 'https://analyzer-rho-six.vercel.app/',
    accent: 'yellow',
    icon: '🛡️',
    featured: true,
  },
];

const otherProjects = [
  {
    title: 'Crypto Dashboard',
    description: 'Live crypto tracker with charts, portfolio view, and market data.',
    tech: ['React', 'Tailwind', 'CoinGecko API'],
    github: 'https://github.com/Abdulmalik-svg/crypto-dashboard',
    demo: 'https://crypto-dashboard-rho-rosy.vercel.app/',
    icon: '📊',
  },
  {
    title: 'Pi² Mirror Explorer',
    description: 'Explorer for mirrored Ethereum blocks and claims on the Pi² testnet.',
    tech: ['React', 'Tailwind', 'Web3'],
    github: 'https://github.com/Abdulmalik-svg/pi2-mirror-explorer',
    demo: 'https://pi2-mirror-explorer.vercel.app/',
    icon: '🔍',
  },
  {
    title: 'NaijaFlex Ecommerce',
    description: 'Modern ecommerce site for physical and digital products with local payments.',
    tech: ['React', 'Tailwind', 'localStorage'],
    github: 'https://github.com/Abdulmalik-svg/naijaflex-store',
    demo: 'https://naijaflex-store-yfxu-p0t1hk5t5-abdulmalik-svgs-projects.vercel.app/',
    icon: '🛒',
  },
];

const focuses = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Smart Contract Security',
    desc: 'Every contract I write is designed with attack vectors in mind — reentrancy guards, access control, and overflow checks by default.',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'On-Chain Financial Systems',
    desc: 'Building escrow, crowdfunding, and DeFi primitives that handle real user funds with gas-optimized, auditable logic.',
  },
  {
    icon: <Lock className="w-7 h-7" />,
    title: 'Trustless Application Design',
    desc: 'Eliminating centralized failure points by moving logic on-chain — no admin keys, no honey pots, no rug vectors.',
  },
];

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <main className="bg-[#080808] text-white font-sans overflow-hidden relative selection:bg-emerald-500/30">

      {/* Cursor glow */}
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-50 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />

      {/* Grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">

        {/* ========= HERO ========= */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8 max-w-5xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">
                Available for Web3 Projects
              </span>
            </motion.div>

            {/* Name */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-500 text-xl font-medium tracking-wide"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="text-7xl md:text-9xl font-black tracking-tighter leading-none"
              >
                <span className="text-white">Abdul</span>
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: '2px #10b981' }}
                >
                  malik
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-emerald-400 text-2xl md:text-3xl font-bold tracking-wide"
              >
                Blockchain Developer (Solidity)
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-3xl border-l-2 border-emerald-500/40 pl-6"
            >
              "I build{' '}
              <span className="text-white font-semibold">secure smart contract systems</span>{' '}
              that handle real user funds."
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-emerald-500 text-black px-10 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/5 border border-white/15 text-white px-10 py-4 rounded-2xl font-black text-lg hover:border-emerald-500/40 hover:bg-white/8 transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 pt-2"
            >
              {[
                { icon: <FaGithub />, href: 'https://github.com/Abdulmalik-svg', label: 'GitHub' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-xl"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </section>

        {/* ========= BLOCKCHAIN PROJECTS (MOST IMPORTANT) ========= */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">
                On-Chain Work
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              Blockchain Projects
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl">
              Smart contracts deployed and tested — real protocols with real security considerations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blockchainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative group bg-white/[0.03] border rounded-3xl p-8 overflow-hidden transition-all duration-500 ${
                  project.featured
                    ? 'border-yellow-400/30 hover:border-yellow-400/60 hover:shadow-[0_0_60px_rgba(250,204,21,0.08)]'
                    : 'border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.08)]'
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                    <span className="text-yellow-400 text-xs font-black uppercase tracking-wider">⭐ Featured</span>
                  </div>
                )}

                {/* Glow effect */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  project.featured ? 'bg-yellow-400/5' : 'bg-emerald-500/5'
                }`} />

                <div className="relative z-10">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`text-5xl p-3 rounded-2xl bg-white/5 border ${
                      project.featured ? 'border-yellow-400/20' : 'border-emerald-500/20'
                    }`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white">{project.title}</h3>
                      <p className={`text-sm font-bold mt-1 ${
                        project.featured ? 'text-yellow-400' : 'text-emerald-400'
                      }`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          project.featured ? 'bg-yellow-400' : 'bg-emerald-400'
                        }`} />
                        <span className="text-gray-400 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                          project.featured
                            ? 'bg-yellow-400/5 border-yellow-400/20 text-yellow-300'
                            : 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                        project.featured
                          ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20'
                          : 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white/5 border border-white/10 text-white hover:border-white/20 transition-all"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= ABOUT ========= */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-12 bg-emerald-500/50" />
                  <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">About</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Frontend meets <span className="text-emerald-400">Blockchain</span>
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                I'm <span className="text-white font-bold">Abdulmalik Badmus</span> — a frontend developer turned blockchain builder based in Lagos, Nigeria.
                I combine UI craftsmanship with deep Solidity knowledge to ship dApps that are both beautiful and battle-tested.
              </p>
              <p className="text-gray-500 leading-relaxed">
                My focus is <span className="text-emerald-400 font-semibold">smart contract security</span>, on-chain financial primitives, and trustless system design.
                I don't just connect wallets to frontends — I write and own the contracts underneath.
              </p>
              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
              >
                More about me <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Skills grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Blockchain', items: ['Solidity', 'Hardhat', 'Foundry', 'Ethers.js', 'Viem'] },
                { label: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'] },
                { label: 'Tools', items: ['Git', 'Vercel', 'VS Code', 'MetaMask'] },
              ].map((group, gi) => (
                <div key={gi} className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-500">{group.label}</p>
                  {group.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + ii * 0.05 }}
                      className="px-3 py-2 bg-white/[0.03] border border-white/8 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all cursor-default"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========= OTHER PROJECTS ========= */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-white/20" />
              <span className="text-gray-500 text-sm font-black uppercase tracking-[0.3em]">Also Built</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Other Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white/[0.02] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-500">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-emerald-400 transition-colors font-semibold">
                    <ExternalLink className="w-3 h-3" /> Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors font-semibold">
                    <FaGithub className="w-3 h-3" /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= WHAT I FOCUS ON ========= */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              What I Focus On
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The principles that shape how I approach every smart contract and dApp I build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {focuses.map((f, index) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="group bg-white/[0.03] border border-emerald-500/10 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)] transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 mb-6 group-hover:bg-emerald-500/15 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= TECH STACK ========= */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-gray-600 text-sm font-black uppercase tracking-[0.3em]">Tech Stack</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6, scale: 1.1 }}
                className="flex flex-col items-center gap-3 bg-white/[0.03] border border-white/8 rounded-2xl px-8 py-6 hover:border-emerald-500/30 transition-all cursor-default"
              >
                <span className={`text-4xl ${tech.color}`}>{tech.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= CTA ========= */}
        <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.03] border border-emerald-500/20 rounded-[3rem] p-16 text-center overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-yellow-400/3 rounded-[3rem]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Let's Build Something{' '}
                <span className="text-emerald-400">On-Chain</span>
              </h2>

              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Got a Web3 project that needs secure smart contracts and a clean frontend? Let's ship it.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-emerald-500 text-black px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/25 hover:bg-emerald-400 transition-all mt-6"
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