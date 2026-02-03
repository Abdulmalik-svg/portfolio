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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-10 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`max-w-7xl mx-auto px-6 py-2.5 rounded-2xl transition-all duration-500 flex justify-between items-center ${
        scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50' 
        : 'bg-transparent'
      }`}>
        
        {/* Logo Section */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Geometric diamond logo */}
            <div className="absolute inset-0 bg-indigo-600 rotate-45 rounded-xl group-hover:rotate-90 transition-transform duration-500 shadow-indigo-200 shadow-lg" />
            <div className="absolute inset-1 bg-white/10 rotate-45 rounded-lg border border-white/20" />
            <span className="relative text-white font-black text-xl tracking-tighter italic">A</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              Abdulmalik
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 ml-0.5">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-bold tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500 hover:text-black'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Clean Primary CTA */}
          <Link 
            to="/contact" 
            className="bg-slate-950 text-white px-7 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-100 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900 p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-3 p-8 bg-white border border-slate-100 rounded-3xl shadow-2xl md:hidden flex flex-col items-center space-y-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-slate-950 text-white py-4 rounded-2xl font-bold shadow-xl"
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