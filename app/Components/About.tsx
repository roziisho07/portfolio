"use client";

import Image from "next/image";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
import aboutImage from "../assets/images/rozi.webp"; // Replace with your image
import Link from "next/link";
import { SiUpwork } from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f5f7fa] to-white"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImage}
                alt="About Me"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b4552]/20 to-transparent"></div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1b4552] text-white px-6 py-3 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="text-[#1b4552] font-medium">ABOUT ME</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Building Digital Solutions{" "}
                <span className="text-[#1b4552]">With Purpose</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600">
              {` I'm a passionate full-stack developer dedicated to creating web
              applications that not only look beautiful but solve real problems.
              With expertise across the entire development stack, I bridge the
              gap between design and technical implementation.`}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaCode className="text-[#1b4552] w-6 h-6" />,
                  title: "Clean Code",
                  description:
                    "Modular, maintainable code following best practices",
                },
                {
                  icon: <FaPalette className="text-[#1b4552] w-6 h-6" />,
                  title: "Pixel Perfect",
                  description: "Attention to detail in every implementation",
                },
                {
                  icon: <FaRocket className="text-[#1b4552] w-6 h-6" />,
                  title: "Performance",
                  description:
                    "Optimized solutions for blazing fast experiences",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f8fafc] p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1b4552]/10 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 gap-8 flex flex-col sm:flex-row">
              <button className="px-6 cursor-pointer py-3 rounded-lg border-2 border-[#1b4552] text-[#1b4552] font-medium hover:bg-[#1b4552]/5 transition-colors">
                Download Resume
              </button>
              <Link
                href={
                  "https://www.upwork.com/freelancers/~018cf38f84bea9511e?mp_source=share"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hire on Upwork"
                title="Hire on Upwork"
                className="px-6 cursor-pointer flex items-center gap-2 justify-center  py-3 rounded-lg border-2 bg-[#1b4552] text-[white] font-medium hover:bg-transparent hover:text-gray-700 transition-colors"
              >
                Hire on Upwork{" "}
                <span className="rounded-full bg-green-600 p-2 text-[#1b4552]">
                  <SiUpwork className="text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
