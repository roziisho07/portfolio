"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import { TextRevealCardPreview } from "./Card";

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#f5f7fa] to-[#e8eff5] min-h-screen flex items-center">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-[#1b4552]/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-1">
              <span className="text-[#1b4552] font-medium">
                Full Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Crafting Digital <br />
                <span className="text-[#1b4552]">Experiences</span> That Matter
              </h1>
            </div>

            <p className="text-lg text-gray-600 max-w-lg">
              I build fast, scalable web applications using modern technologies
              like Next.js, TypeScript, and Tailwind CSS to solve real business
              problems.
            </p>

            {/* Tech highlights */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                {
                  icon: <SiNextdotjs className="w-5 h-5" />,
                  text: "Next.js Specialist",
                },
                {
                  icon: <SiTypescript className="w-5 h-5" />,
                  text: "TypeScript",
                },
                {
                  icon: <SiTailwindcss className="w-5 h-5" />,
                  text: "Tailwind CSS",
                },
                { icon: <SiReact className="w-5 h-5" />, text: "React Expert" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="text-[#1b4552]">{item.icon}</div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#1b4552] hover:bg-[#1b4552]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Start Your Project
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center gap-2 border-2 border-[#1b4552] text-[#1b4552] hover:bg-[#1b4552]/5 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Tech stack visualization */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    icon: <SiNextdotjs className="w-8 h-8 mx-auto" />,
                    name: "Next.js",
                  },
                  {
                    icon: <SiTailwindcss className="w-8 h-8 mx-auto" />,
                    name: "Tailwind",
                  },
                  {
                    icon: <SiTypescript className="w-8 h-8 mx-auto" />,
                    name: "TypeScript",
                  },
                  {
                    icon: <SiReact className="w-8 h-8 mx-auto" />,
                    name: "React",
                  },
                  {
                    icon: <SiNodedotjs className="w-8 h-8 mx-auto" />,
                    name: "Node.js",
                  },
                  {
                    icon: <SiVercel className="w-8 h-8 mx-auto" />,
                    name: "Vercel",
                  },
                ].map((tech, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto bg-[#f5f9fa] rounded-xl flex items-center justify-center group-hover:bg-[#1b4552]/10 transition-colors">
                      <span className="text-[#1b4552] group-hover:text-[#1b4552]/90 transition-colors">
                        {tech.icon}
                      </span>
                    </div>
                    <span className="mt-2 block text-sm font-medium text-gray-600">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#1b4552]/10 -z-10"></div>
            </div>

            <TextRevealCardPreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
