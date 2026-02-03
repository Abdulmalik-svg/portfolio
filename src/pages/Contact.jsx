import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Clock, Sparkles } from 'lucide-react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for reaching out! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope className="w-5 h-5" />,
      href: 'mailto:abdulmalikbadmus105@gmail.com',
      label: 'abdulmalikbadmus105@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'X (Twitter)',
      icon: <FaXTwitter className="w-5 h-5" />,
      href: 'https://x.com/Sha_dow002',
      label: '@sha_dow002',
      color: 'from-gray-800 to-black',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/abdulmalik-badmus-442b37323/',
      label: 'Abdulmalik Badmus',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com/Abdulmalik-svg',
      label: '@Abdulmalik-svg',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      detail: 'Lagos, Nigeria',
      color: 'indigo',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      detail: 'Within 24 hours',
      color: 'purple',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'abdulmalikbadmus105@gmail.com',
      color: 'cyan',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-slate-900 overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32">
        
        {/* ========= HEADER SECTION ========= */}
        <section className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-bold text-gray-700 tracking-wide">
                Get In Touch
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Connect
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm always open to exciting opportunities and collaborations. Whether you're a startup,
              a business owner, or another developer, I'd love to hear from you.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* ========= LEFT COLUMN - CONTACT INFO ========= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                I'm currently open to freelance work, remote frontend roles, and building cool products with creative teams.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-${info.color}-300 hover:shadow-xl transition-all`}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-${info.color}-50 to-${info.color}-100 text-${info.color}-600 mb-3`}>
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                  <p className="text-sm text-gray-600">{info.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-lg transition-all group"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${social.color} text-white`}>
                      {social.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-slate-900 text-sm">{social.name}</div>
                      <div className="text-xs text-gray-600">{social.label}</div>
                    </div>
                    <Send className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ========= RIGHT COLUMN - CONTACT FORM ========= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Send Me a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-slate-200 hover:shadow-slate-300 transition-all ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ========= QUOTE SECTION ========= */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 opacity-50" />
            
            <div className="relative z-10 space-y-6">
              <div className="text-6xl mb-6">💡</div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 italic leading-relaxed">
                "Building the web is more than code - it's about connection, creativity, and impact."
              </blockquote>

              <div className="pt-4">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-lg">A</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-900">Abdulmalik Badmus</div>
                    <div className="text-sm text-gray-600">Web3 Developer & Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========= AVAILABILITY BANNER ========= */}
        <section className="max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 flex items-center justify-between flex-wrap gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <div>
                <h3 className="font-black text-slate-900 text-xl">Currently Available</h3>
                <p className="text-gray-600 text-sm">Open for freelance projects and collaborations</p>
              </div>
            </div>
            <motion.a
              href="mailto:abdulmalikbadmus105@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-950 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Hire Me Now
            </motion.a>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default Contact;