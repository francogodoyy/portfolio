"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mdavbweq", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) setSent(true);
  };

  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-200 mb-2">
          Get in <span className="text-purple-950">Touch</span>
        </h2>
        <p className="text-gray-400 mb-8">
          I&apos;m currently open to freelance and full-time opportunities.
          Let&apos;s build something together.
        </p>

        {sent ? (
          <p className="text-green-400 mb-8">
            Thanks! I&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mb-10">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-950"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-950"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-950 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-purple-950 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="https://github.com/francogodoyy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/franco-godoyy/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-500 transition-colors" />
          </a>
          <a href="https://www.instagram.com/franco.godoy__/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-purple-500 transition-colors" />
          </a>
          <a href="mailto:alanfrancogodoy@gmail.com">
            <FaEnvelope className="hover:text-purple-500 transition-colors" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-2">
          <FaMapMarkerAlt />
          <span>Argentina</span>
        </div>

        <p className="text-gray-600 text-sm">&copy; 2026 Franco Godoy.</p>
      </div>
    </footer>
  );
}
