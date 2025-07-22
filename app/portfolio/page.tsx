"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";
import image6 from "../assets/images/image6.webp";
import Image from "next/image";

import ScrollableWebsiteGallery from "../Components/HeroImage";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Accounting Firm Website",
    description:
      "Full-featured Accounting Firm Website with Next.js and Sanity.io integration",
    tags: ["Next.js", "TypeScript", "Tailwind", "Sanity.io"],
    image: image1,
    link: "",
    github: "",
    category: "web, mobile",
  },
  {
    id: 2,
    title: "SaaS Web App",
    description: "Agency website with Next.js",
    tags: ["NextJs", "TypeScript", "Tailwind CSS"],
    image: image2,
    link: "",
    github: "e",
    category: "web, mobile",
  },
  {
    id: 3,
    title: "Ai Saas App Frontend",
    description: "Ai Powered SaaS web App Frontend with Next.js",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: image3,
    link: "",
    github: "",
    category: "Web, mobile",
  },
  {
    id: 4,
    title: "Tour Agency Website",
    description:
      "Responsive tour agency website with booking system with Next.js and sanity.io",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity.io"],
    image: image4,
    github: "",
    link: "",
    category: "mobile, web",
  },
  {
    id: 5,
    title: "Movie trailer website",
    description: "Movie trailer website with NextJs and Sanity.io",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity.io"],
    image: image5,
    github: "",
    link: "",
    category: "mobile, web",
  },
  {
    id: 6,
    title: "Ai powered Notion Like Editor",
    description:
      "Ai powered Notion like editor with Next.js and Firebase, clerk authentication",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Clerk"],
    image: image6,
    github: "",
    link: "",
    category: "web, mobile",
  },
];

const categories = ["all", "web", "mobile"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            My <span className="text-[#1b4552]">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A collection of my recent projects and case studies
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12"
        >
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <FiFilter className="text-gray-600" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition ${
                    activeFilter === category
                      ? "bg-[#1b4552] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-54 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#1b4552]/80 text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#1b4552] hover:text-[#1b4552]/80 transition"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition"
                    >
                      <FaGithub />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Want to see more?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Check out my GitHub profile for additional projects and code
            samples.
          </p>
          <a
            href="https://github.com/roziisho07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1b4552] hover:bg-[#1b4552]/90 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            <FaGithub className="text-lg" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
      <div className="mt-16">
        <ScrollableWebsiteGallery />
      </div>
    </section>
  );
}
