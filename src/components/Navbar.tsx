import React, { useState, useEffect, memo, useCallback } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const debounce = (func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => setScrolled(window.scrollY > 10), 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-all ${
          scrolled ? "bg-white/70 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto text-sm">
          <a href="#hero" className="font-bold tracking-wide text-gray-900">
            Hallifax Minning and Energy
          </a>
          <ul className="hidden gap-6 text-gray-700 md:flex">
            <li>
              <a href="#hero" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-black">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-black">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-black">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#analytics" className="hover:text-black">
                Analytics
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
          <button
            className="block text-gray-700 md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Side drawer menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#0B0E1E] text-white flex flex-col justify-between py-6 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Logo Section */}
          <div className="flex items-center px-6 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-xs font-bold rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
              S
            </div>
            <div className="ml-3">
              <h1 className="text-sm font-semibold leading-tight">
                Hallifax Minning and Energy
              </h1>
              <span className="text-xs text-gray-400">
                Hallifax Minning and Energy
              </span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="px-6 mb-2 text-xs text-gray-400 uppercase">Overview</div>
          <ul className="px-2 space-y-1">
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h18v18H3V3z"
                />
              </svg>
              <a href="#dashboard" className="w-full">
                Dashboard
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <a href="#products" className="w-full">
                Products
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8h18M3 16h18"
                />
              </svg>
              <a href="#contact" className="w-full">
                Messages
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <a href="#order" className="w-full">
                Order
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
                />
              </svg>
              <span>Calendar</span>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2a4 4 0 014-4h4"
                />
              </svg>
              <span>Activity</span>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2a4 4 0 014-4h4"
                />
              </svg>
              <span>Static</span>
            </li>
          </ul>

          {/* Divider */}
          <div className="mx-6 my-4 border-t border-white/10" />
          {/* Account Section */}
          <div className="px-6 mb-2 text-xs text-gray-400 uppercase">Account</div>
          <ul className="px-2 space-y-1">
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2"
                />
              </svg>
              <span>Chat</span>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3"
                />
              </svg>
              <span>Settings</span>
            </li>
            <li className="flex items-center px-4 py-2 text-sm transition rounded-md cursor-pointer hover:bg-white/10">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
              <span>Log out</span>
            </li>
          </ul>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between px-6 pt-4">
          <div className="flex space-x-2">
            <div className="w-4 h-4 rounded-full bg-white/30" />
            <div className="w-4 h-4 rounded-full bg-white/30" />
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707"
              />
            </svg>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);


