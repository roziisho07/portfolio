"use client";
import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaLanguage,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "../assets/images/rozi.webp"; // Replace with your image
import Image from "next/image";

const ResumePage = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            My <span className="text-[#1b4552]">Professional Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A summary of my experience, education, and technical expertise
          </motion.p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-8"
            >
              <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#1b4552]/10 mb-4">
                  <Image
                    src={profileImg} // Replace with your image
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Rozi Shah</h2>
                <p className="text-[#1b4552] font-medium">
                  Full Stack Developer
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaBriefcase className="text-[#1b4552]" />
                    <span>Experience</span>
                  </h3>
                  <p className="text-gray-700">5+ Years</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaGraduationCap className="text-[#1b4552]" />
                    <span>Education</span>
                  </h3>
                  <p className="text-gray-700">B.Sc</p>
                  <p className="text-gray-500 text-sm">GC University, Lahore</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaLanguage className="text-[#1b4552]" />
                    <span>Languages</span>
                  </h3>
                  <ul className="space-y-1">
                    <li className="text-gray-700">English (Fluent)</li>
                    <li className="text-gray-700">Urdu (Fluent)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaUser className="text-[#1b4552]" />
                    <span>Socials</span>
                  </h3>
                  <ul className="space-y-1">
                    <li className="text-gray-700">
                      Github:{" "}
                      <span className="text-gray-500">
                        https://github.com/roziisho07
                      </span>
                    </li>
                    <li className="text-gray-700">
                      Linkdin:{" "}
                      <span className="text-gray-500">
                        https://www.linkedin.com/in/rozi-shah-roziisho/
                      </span>
                    </li>
                  </ul>
                </div>

                {/* <div className="pt-4">
                  <button className="w-full bg-[#1b4552] hover:bg-[#1b4552]/90 text-white font-medium py-3 px-6 rounded-lg transition">
                    Download CV
                  </button>
                </div> */}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaBriefcase className="text-[#1b4552] text-2xl" />
                <span>Work Experience</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Senior Frontend Developer",
                    company: "Gethunza LLC.",
                    period: "2024 - 2025",
                    description: [
                      "Led a team of 5 developers to build responsive web applications",
                      "Implemented Next.js and TypeScript across all projects",
                      "Improved application performance by 40% through optimization",
                    ],
                  },
                  {
                    title: "Freelance web Developer",
                    company: "Freelancer.com, Upwork, Fiverr.",
                    period: "2023 - 2024",
                    description: [
                      "Delivered responsive, high-performance web applications for diverse clients across multiple industries.",
                      "Built scalable and maintainable solutions using Next.js, TypeScript, and Tailwind CSS.",
                      "Optimized frontend performance, achieving up to 40% improvement in load times and user experience.",
                    ],
                  },
                  {
                    title: "Frontend Developer",
                    company: "Designbytes International",
                    period: "2022 - 2023",
                    description: [
                      "Developed and maintained React-based applications",
                      "Collaborated with UX team to implement designs",
                      "Reduced page load time by 30%",
                    ],
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-[#1b4552] pl-6 relative pb-6"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1b4552]"></div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-600 mb-2">
                      <span>{job.company}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{job.period}</span>
                    </div>
                    <ul className="space-y-2 mt-3">
                      {job.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-[#1b4552] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaTools className="text-[#1b4552] text-2xl" />
                <span>Technical Skills</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      { name: "Next.js", level: 95 },
                      { name: "React", level: 90 },
                      { name: "TypeScript", level: 85 },
                      { name: "Tailwind CSS", level: 90 },
                      { name: "Headless CMS", level: 75 },
                    ],
                  },
                  {
                    category: "Backend",
                    skills: [
                      { name: "Node.js", level: 80 },
                      { name: "Express", level: 75 },
                      { name: "PostgreSQL", level: 70 },
                    ],
                  },
                  {
                    category: "Tools",
                    skills: [
                      { name: "Git", level: 85 },
                      { name: "Figma", level: 60 },
                    ],
                  },
                ].map((group, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#1b4552]">
                      {group.category}
                    </h3>
                    <div className="space-y-3">
                      {group.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700">{skill.name}</span>
                            <span className="text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#1b4552] h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-[#1b4552] text-2xl" />
                <span>Education</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    degree: "Backend Development Certification",
                    institution: "Udemy",
                    period: "Jan, 2023",
                    description:
                      "Node.js, Express, MongoDB & More: The Complete Bootcamp",
                  },
                  {
                    degree: "B.Sc. Business Accounting and Finance",
                    institution: "State University",
                    period: "2017 - 2021",
                    description:
                      "Specialized in Web Technologies and Software Engineering",
                  },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-[#1b4552] pl-6 relative pb-6"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1b4552]"></div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-600 mb-2">
                      <span>{edu.institution}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-700 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
