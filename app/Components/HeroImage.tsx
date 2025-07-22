"use client";
import React, { useRef } from "react";
import Image from "next/image";
import HeroImage1 from "../assets/images/project 1.png";
import HeroImage2 from "../assets/images/project 2.png";
import HeroImage3 from "../assets/images/project 3.png";
const ScrollableWebsiteGallery = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Replace these with your actual website screenshot images
  const websiteImages = [
    {
      id: 1,
      src: HeroImage1,
      alt: "Website homepage",
    },
    {
      id: 2,
      src: HeroImage2,
      alt: "Website homepage",
    },
    {
      id: 3,
      src: HeroImage3,
      alt: "Website homepage",
    },
  ];

  const handleWheel = (e: React.WheelEvent, index: number) => {
    if (scrollRefs.current[index]) {
      scrollRefs.current[index]!.scrollTop += e.deltaY;
      e.preventDefault(); // Prevent page scrolling when scrolling the images
    }
  };

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Qucik Views
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {websiteImages.map((image, index) => (
            <div key={image.id} className="relative group">
              {/* Frame/browser chrome effect */}
              <div className="absolute inset-x-0 top-0 h-8 bg-gray-200 rounded-t-lg flex items-center px-3 z-10">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
              </div>

              {/* Scrollable image container */}
              <div
                ref={(el) => {
                  scrollRefs.current[index] = el;
                }}
                onWheel={(e) => handleWheel(e, index)}
                className="h-[500px] overflow-y-auto rounded-b-lg shadow-xl border border-gray-200 bg-white"
                style={{
                  scrollbarWidth: "none", // For Firefox
                  msOverflowStyle: "none", // For IE
                }}
              >
                {/* Hide scrollbar for Chrome/Safari */}
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                <div className="relative w-full h-auto pt-8">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={2000} // Approximate height of your full-page screenshot
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Scroll hint */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  Scroll to explore
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation hint for mobile */}
        <div className="mt-6 text-center text-gray-500 md:hidden">
          <p>Touch and drag to scroll through each screenshot</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollableWebsiteGallery;
