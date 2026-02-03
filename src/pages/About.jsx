import { motion } from 'framer-motion';
import { Code2, Sparkles, Heart, Coffee, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, color: 'indigo' },
    { name: 'Web3 Integration', level: 88, color: 'purple' },
    { name: 'UI/UX Design', level: 85, color: 'cyan' },
    { name: 'Smart Contracts', level: 82, color: 'pink' },
  ];

  const values = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      desc: 'Writing maintainable, scalable code that stands the test of time',
      color: 'indigo',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'User Experience',
      desc: 'Crafting intuitive interfaces that users love to interact with',
      color: 'purple',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      desc: 'Optimizing every pixel and byte for lightning-fast experiences',
      color: 'cyan',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Continuous Learning',
      desc: 'Staying ahead with the latest technologies and best practices',
      color: 'pink',
    },
  ];

  const journey = [
    {
      year: '2022',
      title: 'Started Web Development',
      desc: 'Began learning HTML, CSS, and JavaScript fundamentals',
    },
    {
      year: '2023',
      title: 'Mastered React & Modern Tools',
      desc: 'Deep-dived into React, Tailwind, and modern frontend ecosystem',
    },
    {
      year: '2024',
      title: 'Entered Web3 Space',
      desc: 'Started building dApps, smart contracts, and blockchain solutions',
    },
    {
      year: '2025',
      title: 'Full-Stack Web3 Developer',
      desc: 'Delivering end-to-end decentralized applications',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-slate-900 overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32 space-y-32">
        
        {/* ========= HERO SECTION ========= */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image */}
                <motion.img
                  src="/images/profile.png"
                  alt="Abdulmalik"
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold text-slate-900">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full mb-4"
                >
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-bold text-indigo-700">About Me</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                  Building the{' '}
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    decentralized
                  </span>{' '}
                  future
                </h1>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                I'm <span className="font-bold text-slate-900">Badmus Abdulmalik</span>, a passionate
                Frontend Developer and Web3 enthusiast focused on building beautiful, responsive, and
                user-friendly digital experiences.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in <span className="font-semibold text-indigo-600">React</span>,{' '}
                <span className="font-semibold text-purple-600">Tailwind CSS</span>, and modern
                JavaScript frameworks. Recently, I've been diving deeper into{' '}
                <span className="font-semibold text-cyan-600">Web3 development</span>—building
                dashboards, blockchain explorers, and decentralized applications.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                My coding philosophy is simple: write clean code, create smooth user experiences,
                and keep learning. When I'm not coding, I'm exploring UI/UX trends, improving my
                design workflow, or working on new side projects.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:shadow-2xl transition-all"
                >
                  View My Projects
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-gray-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:border-indigo-300 shadow-lg transition-all"
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========= SKILLS SECTION ========= */}
        <section className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Constantly evolving skill set focused on modern web and blockchain technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{skill.name}</h3>
                  <span className={`text-2xl font-black text-${skill.color}-600`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= VALUES SECTION ========= */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              What Drives Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core principles that guide every project I build
            </p>
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
                className={`group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-${value.color}-300 hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-${value.color}-50 to-${value.color}-100 text-${value.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= JOURNEY TIMELINE ========= */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              My Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From beginner to building production-ready Web3 applications
            </p>
          </motion.div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-8 items-start">
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-lg">{item.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-xl transition-all">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Connecting line */}
                {index < journey.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-purple-300 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========= FUN FACTS ========= */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200 rounded-[3rem] p-12 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Beyond the Code
              </h2>
              <p className="text-lg text-gray-600">
                A few things that keep me inspired
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Coffee className="w-8 h-8" />,
                  title: 'Coffee Enthusiast',
                  desc: 'Fueled by espresso and curiosity',
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: 'Design Lover',
                  desc: 'Always hunting for pixel-perfect interfaces',
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Tech Explorer',
                  desc: 'Experimenting with the latest frameworks',
                },
              ].map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl text-indigo-600 mb-4">
                    {fact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {fact.desc}
                  </p>
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
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Let's Work Together
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have a project in mind? I'm always open to discussing new opportunities and ideas.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all mt-6"
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