// src/pages/Contact.jsx
import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 md:px-20 py-16 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-sky-400 mb-6">Let's Connect</h2>

      <p className="text-lg text-slate-300 mb-4 max-w-2xl">
        I’m always open to exciting opportunities and collaborations. Whether you're a startup, a business owner, or another developer,
        I'd love to hear from you. Let’s create something impactful together.
      </p>

      <p className="text-slate-400 mb-10 max-w-2xl">
        I'm currently open to freelance work, remote frontend roles, and building cool products with creative teams. 
        If you have an idea, a challenge, or just want to connect — don’t hesitate to reach out.
      </p>

      <div className="bg-slate-800 rounded-xl p-6 md:p-10 w-full max-w-xl shadow-lg">
        <ul className="space-y-6 text-lg">
          <li className="flex items-center gap-3 justify-center">
            <FaEnvelope className="text-sky-400 text-xl" />
            <a
              href="mailto:abdulmalikbadmus105@gmail.com"
              className="hover:text-sky-400 transition"
            >
              abdulmalikbadmus105@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <FaTwitter className="text-sky-400 text-xl" />
            <a
              href="https://x.com/codexmalik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              @codexmalik
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <FaLinkedin className="text-sky-400 text-xl" />
            <a
              href="https://www.linkedin.com/in/abdulmalik-badmus-442b37323/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <FaGithub className="text-sky-400 text-xl" />
            <a
              href="https://github.com/Abdulmalik-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <p className="mt-10 text-slate-500 italic max-w-xl">
        “Building the web is more than code — it’s about connection, creativity, and impact.”
      </p>
    </div>
  );
};

export default Contact;
