import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const techStack = [
  {
    icon: <SiNextdotjs className="text-[#1b4552] w-6 h-6" />,
    title: "Next.js",
  },
  {
    icon: <SiTailwindcss className="text-[#1b4552] w-6 h-6" />,
    title: "Tailwind CSS",
  },
  {
    icon: <SiTypescript className="text-[#1b4552] w-6 h-6" />,
    title: "TypeScript",
  },
  {
    icon: <FaReact className="text-[#1b4552] w-6 h-6" />,
    title: "React",
  },
  {
    icon: <FaNodeJs className="text-[#1b4552] w-6 h-6" />,
    title: "Node.js",
  },
  {
    icon: <SiVercel className="text-[#1b4552] w-6 h-6" />,
    title: "Vercel",
  },
];

export default function TechStackSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-white border border-[#1b4552]/20 rounded-lg p-8 text-center hover:shadow-md transition-all hover:-translate-y-1 hover:border-[#1b4552]/40"
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-[#1b4552]/10 mb-2">
                {tech.icon}
              </div>
              <h3 className="text-sm font-medium text-[#1b4552]">
                {tech.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
