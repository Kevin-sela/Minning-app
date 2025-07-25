import React, { memo } from "react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="w-full px-6 py-24 text-white bg-black">
    <div className="bg-[#08040c] py-6 px-4 mb-12 flex items-center justify-center max-w-[600px] mx-auto">
      <div className="w-24 h-px md:w-48 bg-white/10" />
      <p className="px-4 text-lg font-medium text-center text-white md:text-xl">
        Worked with <span className="font-bold text-purple-500">100+</span> Companies Since 2019
      </p>
      <div className="w-24 h-px md:w-48 bg-white/10" />
    </div>

    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
      {/* Left: IMAGES */}
      <div className="space-y-4">
        {/* Shown only on mobile */}
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Mining Featured"
          className="object-cover w-full h-64 rounded-lg md:hidden"
        />

        {/* Full grid - shown only on md and up */}
        <div className="hidden grid-cols-2 gap-4 md:grid sm:grid-cols-2 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Mining Project 1"
            className="object-cover w-full h-48 col-span-2 rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Mining Project 2"
            className="object-cover w-full h-48 rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Mining Project 3"
            className="object-cover w-full h-48 rounded-lg"
          />
        </div>
      </div>

      {/* Right: TEXT */}
      <div>
        <p className="mb-2 text-sm font-semibold tracking-widest text-purple-600 uppercase">
          ABOUT US
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-6 text-4xl font-bold md:text-5xl"
        >
          The Mining Company Story
        </motion.h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-300">
          Our mining company was founded with a commitment to responsible and sustainable resource extraction. We leverage cutting-edge technology and industry expertise to deliver high-quality minerals while minimizing environmental impact.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-gray-300">
          Beyond our core mining operations, we are dedicated to community development and innovation through several key projects that drive growth and sustainability in the regions we operate.
        </p>
        <ul className="space-y-2 text-lg leading-relaxed text-gray-300 list-disc list-inside">
          <li><strong>EcoMine Initiative</strong> – Promoting environmentally friendly mining practices and rehabilitation of mining sites.</li>
          <li><strong>Community Growth Program</strong> – Supporting local communities with education, healthcare, and infrastructure development.</li>
          <li><strong>Tech Innovation Hub</strong> – Investing in research and development to improve mining efficiency and safety.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default memo(About);
