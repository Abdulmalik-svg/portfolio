import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Left - Name / About */}
        <div>
          <h3 className="text-black text-xl font-bold mb-2">Abdulmalik.dev</h3>
          <p className="text-sm text-gray-700">
            Frontend Developer building beautiful, fast, and accessible web experiences.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h4 className="text-black font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:text-gray-900 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-900 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Right - Socials */}
        <div>
          <h4 className="text-black font-semibold mb-2">Connect</h4>
          <div className="flex justify-center md:justify-start gap-4 text-gray-700">
            <a href="https://github.com/Abdulmalik-svg" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/abdulmalik-badmus-442b37323/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <Linkedin />
            </a>
            <a href="mailto:abdulmalikbadmus105@gmail.com" className="hover:text-black">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-600">
        &copy; {new Date().getFullYear()} Abdulmalik.dev — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
