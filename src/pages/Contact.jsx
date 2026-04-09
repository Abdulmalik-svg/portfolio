import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Clock } from 'lucide-react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thank you for reaching out! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { name: 'Email', icon: <FaEnvelope className="w-5 h-5" />, href: 'mailto:abdulmalikbadmus105@gmail.com', label: 'abdulmalikbadmus105@gmail.com' },
    { name: 'X (Twitter)', icon: <FaXTwitter className="w-5 h-5" />, href: 'https://x.com/Sha_dow002', label: '@sha_dow002' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/abdulmalik-badmus-442b37323/', label: 'Abdulmalik Badmus' },
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/Abdulmalik-svg', label: '@Abdulmalik-svg' },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6" />, title: 'Location', detail: 'Lagos, Nigeria' },
    { icon: <Clock className="w-6 h-6" />, title: 'Response Time', detail: 'Within 24 hours' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email', detail: 'abdulmalikbadmus105@gmail.com' },
  ];

  const inputClass = "w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl focus:border-emerald-500/50 focus:bg-white/[0.06] text-white placeholder-gray-600 transition-all outline-none";

  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">

      {/* Grid bg */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32">

        {/* ========= HEADER ========= */}
        <section className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">Get In Touch</span>
              <div className="h-px w-12 bg-emerald-500/50" />
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              <span className="text-white">Let's </span>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #10b981' }}>Connect</span>
            </h1>

            <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
              Open for Web3 projects, smart contract work, and frontend collaborations. Let's build something secure together.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 mb-20">

          {/* ========= LEFT — INFO ========= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Contact Info</h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                Available for freelance smart contract work, remote Web3 roles, and building cool products with serious teams.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-emerald-500/20 transition-all"
                >
                  <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400 mb-3">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm">{info.title}</h3>
                  <p className="text-sm text-gray-500">{info.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Find Me On</h3>
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
                    className="flex items-center gap-4 bg-white/[0.03] border border-white/8 rounded-xl p-4 hover:border-emerald-500/20 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-sm">{social.name}</div>
                      <div className="text-xs text-gray-500 truncate">{social.label}</div>
                    </div>
                    <Send className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ========= RIGHT — FORM ========= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-black text-white mb-2">Send a Message</h2>
              <p className="text-gray-500 mb-8 text-sm">I'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Smart Contract Audit / Project Inquiry" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, what you need built, timeline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 bg-emerald-500 text-black px-8 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
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

        {/* ========= AVAILABILITY ========= */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 flex items-center justify-between flex-wrap gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
              <div>
                <h3 className="font-black text-white text-xl">Currently Available</h3>
                <p className="text-gray-500 text-sm">Open for Web3 projects and smart contract work</p>
              </div>
            </div>
            <motion.a
              href="mailto:abdulmalikbadmus105@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-black px-8 py-3 rounded-xl font-black shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
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