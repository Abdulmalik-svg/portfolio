import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-200 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-black hover:text-gray-700 transition"
        >
          Abdulmalik.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-black font-medium">
          <Link to="/about" className="hover:text-gray-700 transition">About</Link>
          <Link to="/projects" className="hover:text-gray-700 transition">Projects</Link>
          <Link to="/contact" className="hover:text-gray-700 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-black">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 px-4 pb-4 flex flex-col space-y-4 text-black">
          <Link to="/about" onClick={toggleMenu} className="hover:text-gray-700">About</Link>
          <Link to="/projects" onClick={toggleMenu} className="hover:text-gray-700">Projects</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
