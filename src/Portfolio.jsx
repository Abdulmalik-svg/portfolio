import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  FaReact, FaGitAlt, FaGithub, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  SiTailwindcss, SiVite, SiSolidity, SiEthereum,
} from 'react-icons/si';
import {
  ArrowRight, Shield, Zap, Lock, ExternalLink,
  ChevronDown, Sun, Moon, Menu, X, Send,
  MapPin, Clock, Mail, ArrowUp,
} from 'lucide-react';
import { useTheme } from './context/ThemeContext';

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey',  href: '#journey'  },
  { label: 'Contact',  href: '#contact'  },
];

const STATS = [
  { num: '2+',   label: 'Years building' },
  { num: '10+',  label: 'Projects shipped' },
  { num: '100%', label: 'On-chain logic' },
  { num: '0',    label: 'Rugs shipped' },
];

const BLOCKCHAIN_PROJECTS = [
  {
    num: '01',
    title: 'ShieldAudit',
    subtitle: 'Smart Contract Risk Analyzer',
    description:
      'Real-time EVM smart contract security analyzer that detects honeypots, rug pulls, trading taxes, and unsafe Solidity patterns using on-chain data and GoPlus Security.',
    features: ['Vulnerability detection', 'Contract safety scoring', 'Pre-deployment analysis'],
    tech: ['Solidity', 'JavaScript', 'React', 'GoPlus API'],
    github: 'https://github.com/Abdulmalik-svg/Analyzer',
    demo: 'https://analyzer-rho-six.vercel.app/',
    image: '/images/sheildaudit.png',
    featured: true,
    role: 'Sole Developer',
  },
  {
    num: '02',
    title: 'Raise3',
    subtitle: 'On-Chain Crowdfunding Protocol',
    description:
      'Escrow-based crowdfunding platform with smart contract–enforced funding logic, per-user contribution tracking, and automatic refund fallback for failed campaigns.',
    features: ['Smart contract escrow system', 'Per-user contribution tracking', 'Claim + refund logic'],
    tech: ['Solidity', 'Ethers.js', 'React', 'Tailwind'],
    github: 'https://github.com/Abdulmalik-svg/fund-me-dapp',
    demo: 'https://my-web3-project-hfef.vercel.app/',
    image: '/images/Raise3.png',
    featured: false,
    role: 'Sole Developer',
  },
];

const OTHER_PROJECTS = [
  {
    num: '03',
    title: 'Crypto Dashboard',
    description: 'Live crypto tracker with charts, portfolio view, and real-time market data.',
    tech: ['React', 'Tailwind', 'CoinGecko API'],
    github: 'https://github.com/Abdulmalik-svg/crypto-dashboard',
    demo: 'https://crypto-dashboard-rho-rosy.vercel.app/',
    image: '/images/crypto dashboard.png',
    category: 'Web3',
  },
  {
    num: '04',
    title: 'Pi² Mirror Explorer',
    description: 'Explorer for mirrored Ethereum blocks and claims on the Pi² testnet.',
    tech: ['React', 'Tailwind', 'Web3'],
    github: 'https://github.com/Abdulmalik-svg/pi2-mirror-explorer',
    demo: 'https://pi2-mirror-explorer.vercel.app/',
    image: '/images/pi2 explorer.png',
    category: 'Web3',
  },
  {
    num: '05',
    title: 'NaijaFlex Ecommerce',
    description: 'Modern ecommerce site for physical and digital products with local payments.',
    tech: ['React', 'Tailwind', 'localStorage'],
    github: 'https://github.com/Abdulmalik-svg/naijaflex-store',
    demo: 'https://naijaflex-store-yfxu-p0t1hk5t5-abdulmalik-svgs-projects.vercel.app/',
    image: '/images/naijaflex.png',
    category: 'Full Stack',
  },
  {
    num: '06',
    title: 'Guess My Number',
    description: 'Fun number guessing game with polished game logic and smooth UI.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Abdulmalik-svg/my-game',
    demo: 'https://my-game-sigma-nine.vercel.app/',
    image: '/images/guess my number.png',
    category: 'Frontend',
  },
];

const JOURNEY = [
  {
    year: '2022',
    title: 'Started Web Development',
    company: 'Self-taught',
    period: '2022 – 2023',
    desc: 'Learned HTML, CSS, and JavaScript from scratch. Built first static sites and fell in love with creating things on the web.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    year: '2023',
    title: 'Mastered React & Frontend',
    company: 'Freelance',
    period: '2023 – 2024',
    desc: 'Deep-dived into React, Tailwind CSS, and the modern frontend ecosystem. Shipped multiple client projects including ecommerce and dashboards.',
    tags: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
  },
  {
    year: '2024',
    title: 'Entered Web3 / Solidity',
    company: 'Independent Builder',
    period: '2024 – 2025',
    desc: 'Deployed first smart contracts. Studied EVM internals, security patterns, reentrancy attacks, and DeFi primitives. Built ShieldAudit and Raise3.',
    tags: ['Solidity', 'Hardhat', 'Ethers.js', 'Security'],
  },
  {
    year: '2025',
    title: 'Full-Stack Blockchain Dev',
    company: 'Open to opportunities',
    period: '2025 – Present',
    desc: 'Shipping end-to-end dApps — from Solidity contracts to polished frontends. Focused on trustless system design and on-chain financial security.',
    tags: ['Solidity', 'Viem', 'React', 'DeFi'],
  },
];

const FOCUSES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Smart Contract Security',
    desc: 'Every contract is written with attack vectors in mind - reentrancy guards, access control, and overflow checks by default.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'On-Chain Financial Systems',
    desc: 'Building escrow, crowdfunding, and DeFi primitives that handle real user funds with gas-optimized, auditable logic.',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Trustless Application Design',
    desc: 'Eliminating centralized failure points - no admin keys, no honey pots, no rug vectors.',
  },
];

const TECH = [
  { name: 'Solidity',  icon: <SiSolidity />,   dark: 'text-gray-300', light: 'text-gray-600' },
  { name: 'Ethereum',  icon: <SiEthereum />,   dark: 'text-blue-400', light: 'text-blue-600' },
  { name: 'Hardhat',   icon: <span className="font-black text-sm">HH</span>, dark: 'text-yellow-400', light: 'text-yellow-600' },
  { name: 'React',     icon: <FaReact />,      dark: 'text-cyan-400', light: 'text-cyan-600' },
  { name: 'Tailwind',  icon: <SiTailwindcss />,dark: 'text-sky-400',  light: 'text-sky-600' },
  { name: 'Vite',      icon: <SiVite />,       dark: 'text-purple-400', light: 'text-purple-600' },
  { name: 'Git',       icon: <FaGitAlt />,     dark: 'text-orange-400', light: 'text-orange-500' },
];

const SOCIALS = [
  { name: 'GitHub',   icon: <FaGithub className="w-5 h-5" />,   href: 'https://github.com/Abdulmalik-svg' },
  { name: 'X',        icon: <FaXTwitter className="w-5 h-5" />, href: 'https://x.com/Abdulrahee84158' },
  { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/abdulmalik-badmus-442b37323/' },
  { name: 'Email',    icon: <FaEnvelope className="w-5 h-5" />, href: 'mailto:abdulmalikbadmus105@gmail.com' },
];

// ─── SMOOTH SCROLL HELPER ────────────────────────────────────────────────────
const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-10 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-7xl mx-auto px-6 py-3 rounded-2xl flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.08)]'
            : 'bg-white/95 backdrop-blur-md border border-emerald-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}>

        {/* Logo */}
        <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500 rotate-45 rounded-xl group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-emerald-500/30" />
            <span className="relative text-black font-black text-xl italic z-10">A</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`text-lg font-bold tracking-tight group-hover:text-emerald-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Abdulmalik
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">
              Blockchain Dev
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-bold tracking-wide relative group transition-colors duration-300 ${
                  active === link.href
                    ? 'text-emerald-500'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${active === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              isDark
                ? 'bg-white/5 border-white/10 text-yellow-400 hover:border-yellow-400/30'
                : 'bg-gray-100 border-gray-200 text-gray-500 hover:border-emerald-400/40 hover:text-emerald-600'
            }`}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <button
            onClick={() => scrollTo('#contact')}
            className="bg-emerald-500 text-black px-7 py-2.5 rounded-xl text-sm font-black shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button onClick={toggleTheme} whileTap={{ scale: 0.9 }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center border ${isDark ? 'bg-white/5 border-white/10 text-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
          <button onClick={() => setIsOpen(!isOpen)} className={isDark ? 'text-white p-2' : 'text-gray-900 p-2'}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full left-4 right-4 mt-3 p-8 rounded-3xl shadow-2xl md:hidden flex flex-col items-center space-y-5 border ${
              isDark ? 'bg-[#0f0f0f] border-emerald-500/20' : 'bg-white border-gray-100'
            }`}
          >
            {NAV_LINKS.map(link => (
              <button key={link.href} onClick={() => { scrollTo(link.href); setIsOpen(false); }}
                className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {link.label}
              </button>
            ))}
            <button onClick={() => { scrollTo('#contact'); setIsOpen(false); }}
              className="w-full text-center bg-emerald-500 text-black py-4 rounded-2xl font-black shadow-xl">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── MAIN PORTFOLIO ───────────────────────────────────────────────────────────
export default function Portfolio() {
  const { isDark } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const h = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      alert("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSending(false);
    }, 1500);
  };

  // ── Theme tokens ──
  const bg       = isDark ? 'bg-[#080808]'  : 'bg-[#f8f8f6]';
  const surface  = isDark ? 'bg-white/[0.03] border-white/8' : 'bg-white border-gray-200';
  const text     = isDark ? 'text-white'    : 'text-gray-900';
  const sub      = isDark ? 'text-gray-400' : 'text-gray-600';
  const muted    = isDark ? 'text-gray-500' : 'text-gray-500';
  const inp      = isDark
    ? 'bg-white/[0.04] border-white/10 text-white placeholder-gray-600 focus:border-emerald-500/50'
    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-400';

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className={`${bg} ${text} min-h-screen font-sans transition-colors duration-300 selection:bg-emerald-500/30`}>
      <Navbar />

      {/* Cursor glow */}
      {isDark && (
        <motion.div className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-40 opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)', left: mousePos.x - 300, top: mousePos.y - 300 }} />
      )}

      {/* Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: isDark ? 0.025 : 0.035 }} />

      {/* Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] ${isDark ? 'bg-emerald-500/6' : 'bg-emerald-400/8'}`} />
        <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px] ${isDark ? 'bg-yellow-400/4' : 'bg-yellow-300/5'}`} />
      </div>

      <div className="relative z-10">

        {/* ═══════════════════════════════════════════ HERO */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-20 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-8 max-w-5xl">

            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-emerald-400/40 bg-emerald-50'}`}>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-emerald-500 tracking-widest uppercase">Available for Web3 Projects</span>
            </motion.div>

            {/* Name */}
            <div className="space-y-1">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className={`text-xl font-medium ${muted}`}>Hi, I'm</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="text-7xl md:text-[9rem] font-black tracking-tighter leading-none">
                <span className={text}>Abdul</span>
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #10b981' }}>malik</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-emerald-500 text-2xl md:text-3xl font-bold tracking-wide">
                Blockchain Developer (Solidity)
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className={`text-xl md:text-2xl leading-relaxed max-w-3xl border-l-2 border-emerald-500/40 pl-6 ${sub}`}>
              "I build <span className={`font-bold ${text}`}>secure smart contract systems</span> that handle real user funds."
            </motion.p>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 max-w-2xl">
              {STATS.map((s, i) => (
                <div key={i} className={`border rounded-2xl px-4 py-3 ${isDark ? 'bg-white/[0.03] border-white/8' : 'bg-white border-gray-200 shadow-sm'}`}>
                  <div className="text-2xl font-black text-emerald-500">{s.num}</div>
                  <div className={`text-xs font-semibold uppercase tracking-wider mt-0.5 ${muted}`}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4 pt-2">
              <motion.button onClick={() => scrollTo('#projects')} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-emerald-500 text-black px-10 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/25 hover:bg-emerald-400 transition-all">
                View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button onClick={() => scrollTo('#contact')} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-lg border transition-all ${isDark ? 'bg-white/5 border-white/15 text-white hover:border-emerald-500/40' : 'bg-white border-gray-200 text-gray-900 hover:border-emerald-400'}`}>
                Contact Me
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex gap-3 pt-2">
              {SOCIALS.map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-11 h-11 border rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-white/5 border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30' : 'bg-white border-gray-200 text-gray-500 hover:text-emerald-600 hover:border-emerald-400'}`}>
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${muted}`}>
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════ ABOUT */}
        <section id="about" className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-emerald-500/50" />
            <span className="text-emerald-500 text-sm font-black uppercase tracking-[0.3em]">About Me</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0.1)} className="space-y-6">
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight leading-tight ${text}`}>
                Frontend meets <br /><span className="text-emerald-500">Blockchain</span>
              </h2>
              <p className={`text-lg leading-relaxed ${sub}`}>
                I'm <span className={`font-bold ${text}`}>Badmus Abdulmalik</span> - a frontend developer turned blockchain builder based in Lagos, Nigeria.
                I combine UI craftsmanship with deep Solidity knowledge to ship dApps that are both beautiful and battle-tested.
              </p>
              <p className={`leading-relaxed ${muted}`}>
                My focus is <span className="text-emerald-500 font-semibold">smart contract security</span>, on-chain financial primitives, and trustless system design.
                I don't just connect wallets to frontends - I write and own the contracts underneath.
              </p>

              {/* Focus cards */}
              <div className="space-y-3 pt-2">
                {FOCUSES.map((f, i) => (
                  <motion.div key={i} {...fadeUp(0.1 * i)}
                    className={`flex items-start gap-4 border rounded-2xl p-4 group hover:border-emerald-500/30 transition-all ${surface}`}>
                    <div className={`p-2.5 rounded-xl text-emerald-500 flex-shrink-0 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                      {f.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm mb-1 ${text}`}>{f.title}</h4>
                      <p className={`text-xs leading-relaxed ${muted}`}>{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div {...fadeUp(0.2)} className="space-y-6">
              {/* Tech grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Blockchain', items: ['Solidity', 'Hardhat', 'Foundry', 'Ethers.js', 'Viem'] },
                  { label: 'Frontend', items: ['React', 'JavaScript', 'Tailwind', 'Framer Motion'] },
                  { label: 'Tools', items: ['Git', 'Vercel', 'VS Code', 'MetaMask'] },
                ].map((group, gi) => (
                  <div key={gi} className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-500">{group.label}</p>
                    {group.items.map((item, ii) => (
                      <motion.div key={ii} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ delay: gi * 0.08 + ii * 0.04 }}
                        className={`px-3 py-2 border rounded-xl text-xs font-semibold cursor-default transition-all hover:border-emerald-500/30 ${isDark ? 'bg-white/[0.03] border-white/8 text-gray-400 hover:text-white' : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900'}`}>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Tech icons */}
              <div className="flex flex-wrap gap-3 pt-4">
                {TECH.map((t, i) => (
                  <motion.div key={i} whileHover={{ y: -4, scale: 1.1 }}
                    className={`flex flex-col items-center gap-1.5 border rounded-xl px-4 py-3 cursor-default transition-all ${isDark ? 'bg-white/[0.03] border-white/8 hover:border-emerald-500/30' : 'bg-white border-gray-200 hover:border-emerald-400'}`}>
                    <span className={`text-2xl ${isDark ? t.dark : t.light}`}>{t.icon}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${muted}`}>{t.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ PROJECTS */}
        <section id="projects" className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-500 text-sm font-black uppercase tracking-[0.3em]">On-Chain Work</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <h2 className={`text-5xl md:text-6xl font-black tracking-tight ${text}`}>
                Things I've <em className="not-italic text-emerald-500">shipped</em>
              </h2>
              <p className={`text-sm ${muted} md:text-right max-w-xs`}>
                {BLOCKCHAIN_PROJECTS.length + OTHER_PROJECTS.length} projects spanning smart contracts, dApps, and frontends.
              </p>
            </div>
          </motion.div>

          {/* Blockchain — large cards */}
          <div className="space-y-8 mb-20">
            {BLOCKCHAIN_PROJECTS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.1)}
                whileHover={{ y: -4 }}
                className={`relative group border rounded-3xl overflow-hidden transition-all duration-500 ${
                  p.featured
                    ? isDark ? 'bg-white/[0.03] border-yellow-400/25 hover:border-yellow-400/50 hover:shadow-[0_0_80px_rgba(250,204,21,0.07)]'
                              : 'bg-white border-yellow-300 hover:border-yellow-400 hover:shadow-2xl'
                    : isDark ? 'bg-white/[0.03] border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_80px_rgba(16,185,129,0.07)]'
                              : 'bg-white border-emerald-200 hover:border-emerald-400 hover:shadow-2xl'
                }`}>

                {/* Hover glow */}
                <div className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${p.featured ? 'bg-yellow-400/5' : 'bg-emerald-500/5'}`} />

                <div className="relative z-10 grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-56 md:h-auto overflow-hidden ${isDark ? 'bg-white/[0.02]' : 'bg-gray-100'}`}>
                    <img src={p.image} alt={p.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-transparent to-[#080808]/60' : 'from-transparent to-white/40'}`} />
                    {/* Number */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-5xl font-black opacity-30 ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className={`text-xs font-black uppercase tracking-widest mb-1 ${p.featured ? 'text-yellow-500' : 'text-emerald-500'}`}>{p.subtitle}</p>
                        <h3 className={`text-3xl font-black ${text}`}>{p.title}</h3>
                      </div>
                      {p.featured && (
                        <span className={`px-3 py-1 text-xs font-black uppercase rounded-full border ${isDark ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400' : 'bg-yellow-50 border-yellow-300 text-yellow-600'}`}>
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    <p className={`text-sm leading-relaxed ${sub}`}>{p.description}</p>

                    <div className="space-y-1.5">
                      {p.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.featured ? 'bg-yellow-400' : 'bg-emerald-400'}`} />
                          <span className={`text-xs ${sub}`}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, ti) => (
                        <span key={ti} className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                          p.featured
                            ? isDark ? 'bg-yellow-400/5 border-yellow-400/20 text-yellow-300' : 'bg-yellow-50 border-yellow-200 text-yellow-700'
                            : isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        }`}>{t}</span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-1">
                      <motion.a href={p.demo} target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${p.featured ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20' : 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'}`}>
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </motion.a>
                      <motion.a href={p.github} target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all ${isDark ? 'bg-white/5 border-white/10 text-white hover:border-white/20' : 'bg-gray-100 border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                        <FaGithub className="w-4 h-4" /> GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other — small grid */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-px w-12 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} />
            <span className={`text-sm font-black uppercase tracking-[0.3em] ${muted}`}>Also Built</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OTHER_PROJECTS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.08)} whileHover={{ y: -6 }}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? 'bg-white/[0.02] border-white/8 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]' : 'bg-white border-gray-200 hover:border-emerald-300 hover:shadow-lg'}`}>
                <div className={`relative h-36 overflow-hidden ${isDark ? 'bg-white/[0.02]' : 'bg-gray-100'}`}>
                  <span className={`absolute top-3 left-3 text-3xl font-black opacity-20 ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.num}</span>
                  <img src={p.image} alt={p.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#080808]/60' : 'from-white/50'} to-transparent`} />
                </div>
                <div className="p-5 space-y-2">
                  <span className={`text-xs font-black uppercase tracking-wider ${p.category === 'Web3' ? 'text-emerald-500' : muted}`}>{p.category}</span>
                  <h3 className={`font-black text-base group-hover:text-emerald-500 transition-colors ${text}`}>{p.title}</h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${muted}`}>{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tech.map((t, ti) => (
                      <span key={ti} className={`px-2 py-0.5 rounded text-[10px] font-semibold ${isDark ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-600'}`}>{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-emerald-500 hover:text-emerald-400 font-bold transition-colors">
                      <ExternalLink className="w-3 h-3" /> Demo
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-xs font-bold transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                      <FaGithub className="w-3 h-3" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════ JOURNEY */}
        <section id="journey" className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-500 text-sm font-black uppercase tracking-[0.3em]">Experience</span>
            </div>
            <h2 className={`text-5xl md:text-6xl font-black tracking-tight mb-16 ${text}`}>
              Where I've <em className="not-italic text-emerald-500">grown</em>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-[2.45rem] top-0 bottom-0 w-px ${isDark ? 'bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent' : 'bg-gradient-to-b from-emerald-400/40 via-emerald-300/20 to-transparent'}`} />

            <div className="space-y-10">
              {JOURNEY.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex gap-8 items-start relative">
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-20 flex flex-col items-center gap-1">
                    <div className={`w-5 h-5 rounded-full border-2 border-emerald-500 flex-shrink-0 ${isDark ? 'bg-[#080808]' : 'bg-[#f8f8f6]'}`}>
                      <div className="w-full h-full rounded-full bg-emerald-500 scale-50" />
                    </div>
                    <span className="text-emerald-500 text-xs font-black">{item.year}</span>
                  </div>

                  {/* Card */}
                  <motion.div whileHover={{ x: 4 }}
                    className={`flex-1 border rounded-2xl p-6 transition-all hover:border-emerald-500/30 ${surface}`}>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className={`text-xl font-black ${text}`}>{item.title}</h3>
                        <p className="text-emerald-500 text-sm font-bold">{item.company}</p>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border flex-shrink-0 ${isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
                        {item.period}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed mb-4 ${sub}`}>{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, ti) => (
                        <span key={ti} className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ CONTACT */}
        <section id="contact" className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-500 text-sm font-black uppercase tracking-[0.3em]">Get In Touch</span>
            </div>
            <h2 className={`text-5xl md:text-6xl font-black tracking-tight mb-4 ${text}`}>
              Let's work <em className="not-italic text-emerald-500">together</em>
            </h2>
            <p className={`text-lg mb-16 max-w-xl ${sub}`}>
              Have a Web3 project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left info */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Lagos, Nigeria' },
                { icon: <Clock className="w-5 h-5" />, label: 'Response Time', value: 'Within 24 hours' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'abdulmalikbadmus105@gmail.com' },
              ].map((info, i) => (
                <div key={i} className={`flex items-start gap-4 border rounded-2xl p-5 ${surface}`}>
                  <div className={`p-2.5 rounded-xl text-emerald-500 flex-shrink-0 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>{info.icon}</div>
                  <div>
                    <p className={`text-xs font-black uppercase tracking-wider mb-1 ${muted}`}>{info.label}</p>
                    <p className={`font-semibold text-sm ${text}`}>{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <p className={`text-xs font-black uppercase tracking-widest mb-4 ${muted}`}>Find Me On</p>
                <div className="flex gap-3">
                  {SOCIALS.map((s, i) => (
                    <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-11 h-11 border rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-white/5 border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30' : 'bg-white border-gray-200 text-gray-500 hover:text-emerald-600 hover:border-emerald-400'}`}>
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className={`border rounded-2xl p-5 ${isDark ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className={`font-black text-sm ${text}`}>Currently Available</span>
                </div>
                <p className={`text-xs ${muted}`}>Open for Web3 projects and smart contract work</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className={`border rounded-3xl p-8 md:p-10 space-y-5 ${surface}`}>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                    { name: 'email', label: 'Your Email', placeholder: 'john@example.com', type: 'email' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{field.label}</label>
                      <input type={field.type} name={field.name} required placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={e => setFormData({ ...formData, [field.name]: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${inp}`} />
                    </div>
                  ))}
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Subject</label>
                  <input type="text" name="subject" required placeholder="Smart Contract Work / Project Inquiry"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${inp}`} />
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-xl outline-none transition-all resize-none ${inp}`} />
                </div>

                <motion.button type="submit" disabled={sending}
                  whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 bg-emerald-500 text-black py-4 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {sending ? (
                    <><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ FOOTER */}
        <footer className={`border-t px-6 md:px-16 py-12 transition-colors duration-300 ${isDark ? 'border-white/8' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500 rotate-45 rounded-lg" />
                <span className="relative text-black font-black italic z-10">A</span>
              </div>
              <div>
                <p className={`font-black text-sm ${text}`}>Abdulmalik.dev</p>
                <p className={`text-[10px] uppercase tracking-[0.2em] text-emerald-500`}>Blockchain Developer</p>
              </div>
            </div>

            <p className={`text-xs text-center ${muted}`}>
              Deployed from Lagos, Nigeria. Building secure on-chain systems.
            </p>

            <div className="flex items-center gap-4">
              <p className={`text-xs ${muted}`}>© {new Date().getFullYear()} Abdulmalik</p>
              <span className={`text-xs px-2 py-1 rounded border font-bold ${isDark ? 'border-emerald-500/20 text-emerald-500 bg-emerald-500/5' : 'border-emerald-400/30 text-emerald-600 bg-emerald-50'}`}>
                SYSTEM_STATUS: ONLINE
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollTo('#home')}
            whileHover={{ scale: 1.1, y: -2 }}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-emerald-500 text-black rounded-xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:bg-emerald-400 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}