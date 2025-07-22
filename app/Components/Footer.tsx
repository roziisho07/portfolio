"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/roziisho07",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://linkedin.com/in/rozi-shah-roziisho/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      url: "https://twitter.com/roziisho",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:roziisho@gmail.com",
      label: "Email",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <footer className="bg-[#1b4552] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white text-[#1b4552] flex items-center justify-center font-bold text-xl">
                R
              </div>
              <span className="text-xl font-semibold">Rozi.dev</span>
            </Link>
            <p className="text-[#c4d8dd]">
              Crafting exceptional digital experiences with modern web
              technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                  className="bg-[#2a5c6b] hover:bg-[#3a6c7b] p-3 rounded-full transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#c4d8dd] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#c4d8dd] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-[#c4d8dd] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-[#c4d8dd]">
              Subscribe to get updates on my latest projects and articles.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3a6c7b]"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#1b4552] hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-[#2a5c6b] mt-12 pt-8 text-center text-[#c4d8dd]"
        >
          <p>© {currentYear} Rozi.dev. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
