import { memo } from "react";
import LazyImage from "./LazyImage";

import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="w-full py-24 text-white bg-black">
      <div className="bg-[#08040c] py-6 px-4 mb-12 flex items-center justify-center max-w-[600px] mx-auto">
        <div className="w-24 h-px md:w-48 bg-white/10" />
        <p className="px-4 text-lg font-medium text-center text-indigo-600 md:text-xl">
          Hallifax Energy and Mining - Serving the Industry Since 2019
        </p>
        <div className="w-24 h-px md:w-48 bg-white/10" />
      </div>

    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
      {/* Left: IMAGES */}
      <div className="space-y-4">
        {/* Shown only on mobile */}
        <LazyImage
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80&auto=format&dpr=2"
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
          Hallifax Energy and Mining
        </motion.h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-300">
          Hallifax Energy and Mining is a leading provider of mining supplies, fuel services, and advisory solutions dedicated to supporting the mining and energy sectors.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-gray-300">
          Our core offerings include reagents, chemicals, drilling consumables, grinding balls, fuel supplies and services to oil fields, and expert advisory services to optimize your operations.
        </p>
        <ul className="space-y-2 text-lg leading-relaxed text-gray-300 list-disc list-inside">
          <li><strong>Mining Supplies</strong> – Reagents, Chemicals, Drilling Consumables, Grinding Balls, and more.</li>
          <li><strong>Fuel Supplies & Service</strong> – Reliable fuel supply and maintenance for oil fields.</li>
          <li><strong>Advisory Services</strong> – Industry expertise to guide your mining projects.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default memo(About);
