import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo as Home Link */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-sky-400 hover:text-sky-500 transition"
        >
          Abdulmalik.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-slate-100 font-medium">
          <Link to="/about" className="hover:text-sky-400 transition">About</Link>
          <Link to="/projects" className="hover:text-sky-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-slate-100">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-4 pb-4 flex flex-col space-y-4 text-slate-100">
          <Link to="/about" onClick={toggleMenu} className="hover:text-sky-400">About</Link>
          <Link to="/projects" onClick={toggleMenu} className="hover:text-sky-400">Projects</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-sky-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
