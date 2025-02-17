"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <footer id="contact" className="bg-black text-white py-6 mt-0">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex gap-6 text-2xl z-20">
          <a
            href="https://github.com/francogodoyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-purple-500 transition-colors cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/franco-godoyy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-purple-500 transition-colors cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/frann.go/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-purple-500 transition-colors cursor-pointer" />
          </a>
          <a href="mailto:alanfrancogodoy@gmail.com">
            <FaEnvelope className="hover:text-purple-500 transition-colors cursor-pointer" />
          </a>
          <a href="tel:+54912345678">
            <FaPhone className="hover:text-purple-500 transition-colors cursor-pointer" />
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          &copy; 2025 Franco Godoy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
