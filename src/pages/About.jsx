import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Smart Contract Development', level: 88, color: 'emerald' },
    { name: 'Solidity Security', level: 85, color: 'yellow' },
    { name: 'Frontend / React', level: 95, color: 'emerald' },
    { name: 'Web3 Integration', level: 90, color: 'yellow' },
  ];

  const values = [
    { icon: <Shield className="w-6 h-6" />, title: 'Security First', desc: 'Every contract is written with attack vectors in mind before a single line goes to mainnet.' },
    { icon: <Lock className="w-6 h-6" />, title: 'Trustless Design', desc: 'Removing centralized failure points. No admin keys. No hidden mints. Code is law.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Gas Efficiency', desc: 'Optimizing every opcode. Because wasted gas is wasted money for real users.' },
    { icon: <Target className="w-6 h-6" />, title: 'Ship & Iterate', desc: 'Deploying tested contracts fast, then improving based on on-chain data.' },
  ];

  const journey = [
    { year: '2022', title: 'Started Web Development', desc: 'Learned HTML, CSS, and JavaScript from scratch.' },
    { year: '2023', title: 'Mastered React & Frontend', desc: 'Built production-ready UIs with React, Tailwind, and modern tooling.' },
    { year: '2024', title: 'Entered Web3 / Solidity', desc: 'Deployed first smart contracts, studied EVM, security patterns, and DeFi primitives.' },
    { year: '2025', title: 'Full-Stack Blockchain Dev', desc: 'Shipping end-to-end dApps — from Solidity contracts to polished frontends.' },
  ];

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
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32 space-y-28">

        {/* ========= HERO ========= */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-yellow-400 to-emerald-500 rounded-3xl opacity-30 group-hover:opacity-60 blur-lg transition-opacity duration-500" />
                <motion.img
                  src="/images/profile.png"
                  alt="Abdulmalik"
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover border border-emerald-500/20"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-[#0f0f0f] border border-emerald-500/20 rounded-2xl px-6 py-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="font-bold text-white text-sm">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px w-12 bg-emerald-500/50" />
                <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">About Me</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                Building the{' '}
                <span className="text-emerald-400">trustless</span>{' '}
                web
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed">
                I'm <span className="text-white font-bold">Badmus Abdulmalik</span> — a frontend developer and Solidity engineer from Lagos, Nigeria.
                I build secure smart contract systems and clean dApp frontends that work together seamlessly.
              </p>

              <p className="text-gray-500 leading-relaxed">
                My work sits at the intersection of <span className="text-emerald-400 font-semibold">smart contract security</span>, on-chain financial logic, and
                polished user interfaces. I treat every contract like it's handling someone's savings — because it usually is.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 text-black px-8 py-4 rounded-2xl font-black shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
                >
                  View My Projects
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 border border-white/15 text-white px-8 py-4 rounded-2xl font-black hover:border-emerald-500/30 transition-all"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========= SKILLS ========= */}
        <section className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Technical Skills</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-emerald-500/20 transition-all"
              >
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                  <span className="text-2xl font-black text-emerald-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= VALUES ========= */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">Principles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">What Drives Me</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white/[0.03] border border-emerald-500/10 rounded-2xl p-6 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)] transition-all duration-500"
              >
                <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= JOURNEY ========= */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">My Journey</h2>
          </motion.div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                      <span className="text-emerald-400 font-black text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-emerald-500/20 transition-all">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
                {index < journey.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 to-transparent -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= CTA ========= */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.03] border border-emerald-500/20 rounded-[3rem] p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Let's Work Together
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Got a Web3 project in mind? I'm always open to building something meaningful.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-emerald-500 text-black px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/25 hover:bg-emerald-400 transition-all mt-6"
              >
                Start a Conversation
              </motion.a>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default About;