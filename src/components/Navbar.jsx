import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-10 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-7xl mx-auto px-6 py-3 rounded-2xl transition-all duration-500 flex justify-between items-center ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.08)]'
          : 'bg-transparent'
      }`}>

        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500 rotate-45 rounded-xl group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-emerald-500/30" />
            <div className="absolute inset-1 bg-black/20 rotate-45 rounded-lg border border-white/10" />
            <span className="relative text-black font-black text-xl italic">A</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              Abdulmalik
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 ml-0.5">
              Blockchain Dev
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="bg-emerald-500 text-black px-7 py-2.5 rounded-xl text-sm font-black shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-3 p-8 bg-[#0f0f0f] border border-emerald-500/20 rounded-3xl shadow-2xl shadow-emerald-500/10 md:hidden flex flex-col items-center space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold ${location.pathname === link.path ? 'text-emerald-400' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-emerald-500 text-black py-4 rounded-2xl font-black shadow-xl"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;