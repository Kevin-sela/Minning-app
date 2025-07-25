import React, { memo } from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

const portfolioImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 overflow-x-hidden text-white bg-black w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto mb-16 text-center"
      >
        <h2 className="mb-4 text-5xl font-bold">Our Core Mining Projects</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Showcasing key projects in mining supplies, fuel services, and advisory solutions tailored to the energy sector.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <LazyImage
          src={portfolioImages[0]}
          alt="Mining Project 1"
          className="object-cover w-full h-64 rounded-lg sm:h-72 md:h-80 lg:h-96"
        />
        <LazyImage
          src={portfolioImages[1]}
          alt="Mining Project 2"
          className="object-cover w-full h-64 rounded-lg sm:h-72 md:h-80 lg:h-96"
        />
        <div className="flex flex-col gap-6">
          <LazyImage
            src={portfolioImages[2]}
            alt="Mining Project 3"
            className="object-cover w-full h-32 rounded-lg sm:h-36 md:h-40 lg:h-44"
          />
          <LazyImage
            src={portfolioImages[3]}
            alt="Mining Project 4"
            className="object-cover w-full h-32 rounded-lg sm:h-36 md:h-40 lg:h-44"
          />
        </div>
        <LazyImage
          src={portfolioImages[4]}
          alt="Mining Project 5"
          className="object-cover w-full h-64 rounded-lg sm:h-72 md:h-80 lg:h-96"
        />
      </div>
    </section>
  );
};

export default memo(Portfolio);
