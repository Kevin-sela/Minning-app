import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaFlask, FaGasPump, FaHandsHelping } from "react-icons/fa";

const services = [
  {
    title: "Mining Supplies",
    description:
      "Reagents, Chemicals, Drilling Consumables, Grinding Balls and other essential mining supplies to support your operations.",
    icon: <FaFlask className="text-yellow-500 w-6 h-6 mb-2" />,
  },
  {
    title: "Fuel Supplies & Service",
    description:
      "Reliable fuel supplies and maintenance services tailored for oil fields to ensure uninterrupted operations.",
    icon: <FaGasPump className="text-yellow-500 w-6 h-6 mb-2" />,
  },
  {
    title: "Advisory Services",
    description:
      "Expert advisory services to guide your mining projects with industry insights and best practices.",
    icon: <FaHandsHelping className="text-yellow-500 w-6 h-6 mb-2" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-black text-white w-full"
      style={{ backgroundImage: "url('/path-to-subtle-pattern.svg')" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div>
          <p className="text-yellow-500 uppercase tracking-widest mb-2 font-semibold text-sm">
            OUR SERVICES
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-5xl font-bold mb-6"
          >
            What We Offer
          </motion.h2>
        </div>
        <div className="text-gray-300 text-lg">
          We provide comprehensive services tailored to meet the needs of the mining and energy sectors.
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: false }}
            className={`p-8 rounded-lg shadow-lg bg-gray-900 border border-transparent ${
              i === 1 ? "border-yellow-500" : ""
            }`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <a
              href="#"
              className="text-yellow-500 font-bold inline-flex items-center hover:underline"
            >
              LEARN MORE
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </motion.div>
          ))}
      </div>
    </section>
  );
};

export default memo(Services);
