import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaMountain, FaHardHat, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Incline Mining Operations",
    description:
      "Expertise in managing and optimizing incline mining operations to ensure safety and efficiency in challenging terrains.",
    icon: <FaMountain className="text-yellow-500 w-6 h-6 mb-2" />,
  },
  {
    title: "Safety & Compliance",
    description:
      "Comprehensive safety protocols and compliance management to protect workers and meet industry regulations.",
    icon: <FaHardHat className="text-yellow-500 w-6 h-6 mb-2" />,
  },
  {
    title: "Equipment Maintenance & Support",
    description:
      "Reliable maintenance and technical support services to maximize equipment uptime and performance.",
    icon: <FaTools className="text-yellow-500 w-6 h-6 mb-2" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-black text-white max-w-7xl mx-auto"
      style={{ backgroundImage: "url('/path-to-subtle-pattern.svg')" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div>
          <p className="text-yellow-500 uppercase tracking-widest mb-2 font-semibold text-sm">
            MINING INCLINE SERVICES
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
          Our mining incline services are designed to provide innovative, safe, and efficient solutions tailored to the unique challenges of incline mining operations.
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
