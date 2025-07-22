// https://www.upwork.com/freelancers/~018cf38f84bea9511e?mp_source=share

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaMedal, FaCheck, FaExternalLinkAlt } from "react-icons/fa";

const UpworkProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-md"
    >
      {/* Header with Upwork Branding */}
      <div className="bg-[#14a800] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-white"
          >
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
          </svg>
          <span className="text-white font-semibold">Upwork Profile</span>
        </div>
        <span className="text-white text-sm">Top Rated Plus</span>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1b4552]">
            <img
              src="/your-profile-pic.jpg" // Replace with your Upwork profile image
              alt="Upwork Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Your Name</h3>
            <p className="text-[#1b4552] font-medium">Full Stack Developer</p>
            <div className="flex items-center mt-1 gap-2">
              <div className="flex items-center text-yellow-500">
                <FaStar className="fill-current" />
                <span className="ml-1 text-gray-700 font-medium">5.0</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">100% Job Success</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-[#f8fafc] p-3 rounded-lg">
            <p className="text-2xl font-bold text-[#1b4552]">50+</p>
            <p className="text-gray-600 text-sm">Projects</p>
          </div>
          <div className="bg-[#f8fafc] p-3 rounded-lg">
            <p className="text-2xl font-bold text-[#1b4552]">100%</p>
            <p className="text-gray-600 text-sm">Success</p>
          </div>
          <div className="bg-[#f8fafc] p-3 rounded-lg">
            <p className="text-2xl font-bold text-[#1b4552]">2+</p>
            <p className="text-gray-600 text-sm">Years</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Top Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#1b4552]/10 text-[#1b4552] text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-1 bg-[#f8fafc] px-3 py-1 rounded-full">
            <FaMedal className="text-yellow-500" />
            <span className="text-sm font-medium">Top Rated Plus</span>
          </div>
          <div className="flex items-center gap-1 bg-[#f8fafc] px-3 py-1 rounded-full">
            <FaCheck className="text-green-500" />
            <span className="text-sm font-medium">Verified</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://www.upwork.com/freelancers/~018cf38f84bea9511e?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#14a800] hover:bg-[#128a00] text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
        >
          <span>Hire on Upwork</span>
          <FaExternalLinkAlt className="text-sm" />
        </a>
      </div>
    </motion.div>
  );
};

export default UpworkProfileCard;
