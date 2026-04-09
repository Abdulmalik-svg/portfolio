import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/Abdulmalik-svg' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/abdulmalik-badmus-442b37323/' },
    { name: 'X', icon: <FaXTwitter className="w-5 h-5" />, href: 'https://x.com/Sha_dow002' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:abdulmalikbadmus105@gmail.com' },
  ];

  return (
    <footer className="relative bg-[#070707] border-t border-emerald-500/10">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link to="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500 rotate-45 rounded-xl group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-emerald-500/30" />
                <span className="relative text-black font-black text-2xl italic">A</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  Abdulmalik.dev
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 ml-0.5">
                  Blockchain Developer
                </span>
              </div>
            </Link>

            <p className="text-gray-500 leading-relaxed mb-6 max-w-md text-sm">
              Solidity developer building secure smart contract systems and trustless on-chain applications.
              Every line of code handles real user funds — security is not optional.
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for Work
              </h4>
              <p className="text-sm text-gray-500 mb-4">Open for Web3 projects and smart contract work</p>
              <Link
                to="/contact"
                className="inline-block bg-emerald-500 text-black px-6 py-2.5 rounded-xl text-sm font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-black text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-emerald-400 transition-colors font-medium flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-emerald-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-black text-white mb-6">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-500 hover:text-emerald-400 transition-all group"
                >
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5 transition-all">
                    {social.icon}
                  </div>
                  <span className="font-medium text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Abdulmalik.dev — Built on-chain, deployed with care.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 px-4 py-2 rounded-xl text-sm font-bold hover:border-emerald-500/40 hover:text-emerald-400 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;