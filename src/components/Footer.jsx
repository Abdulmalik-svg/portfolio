import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/Abdulmalik-svg',
      color: 'hover:text-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/abdulmalik-badmus-442b37323/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'X',
      icon: <FaXTwitter className="w-5 h-5" />,
      href: 'https://x.com/Sha_dow002',
      color: 'hover:text-gray-900',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:abdulmalikbadmus105@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t-2 border-gray-200">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link to="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-600 rotate-45 rounded-xl group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-indigo-200" />
                <div className="absolute inset-1 bg-white/10 rotate-45 rounded-lg border border-white/20" />
                <span className="relative text-white font-black text-2xl tracking-tighter italic">A</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  Abdulmalik.dev
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 ml-0.5">
                  Web3 Developer
                </span>
              </div>
            </Link>
            
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Frontend Developer & Web3 Enthusiast building beautiful, fast, and accessible 
              decentralized experiences. Let's create something extraordinary together.
            </p>

            {/* Newsletter / CTA */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-lg">💼</span>
                Available for Work
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Open for freelance projects and collaborations
              </p>
              <Link
                to="/contact"
                className="inline-block bg-slate-950 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-black text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-indigo-600 transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-indigo-600 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-black text-slate-900 mb-6">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 text-gray-600 ${social.color} transition-all group`}
                >
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center group-hover:border-indigo-300 group-hover:shadow-md transition-all">
                    {social.icon}
                  </div>
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <span>&copy; {new Date().getFullYear()} Abdulmalik.dev</span>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-white border-2 border-gray-200 text-slate-900 px-4 py-2 rounded-xl text-sm font-bold hover:border-indigo-300 hover:shadow-lg transition-all"
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