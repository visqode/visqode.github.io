"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-night/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg bg-white/5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#zap-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <defs>
                    <linearGradient
                      id="zap-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3DE8D1" />
                      <stop offset="100%" stopColor="#438A78" />
                    </linearGradient>
                  </defs>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-3xl font-bold text-white group-hover:text-tiffany-blue transition-colors duration-300">
              Visqode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  pathname === item.href
                    ? "text-tiffany-blue"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-tiffany-blue to-hookers-green rounded-full"
                  />
                )}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}

          <div className="hidden md:block">
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(180, 232, 219, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tiffany-blue"
                aria-label="Get started"
                type="button"
              >
                {/* Gradient border layer */}
                <span className="absolute -inset-1 rounded-full p-3 bg-gradient-to-r from-tiffany-blue via-hookers-green to-tiffany-blue" />

                {/* Inner content with black background */}
                <span className="relative z-10 bg-black text-sm md:text-base px-5 py-2.5 rounded-full flex items-center gap-2 select-none">
                  {/* Gradient Text */}
                  <span className="bg-gradient-to-r from-tiffany-blue to-hookers-green bg-clip-text text-transparent font-semibold">
                    Get Started
                  </span>

                  {/* Gradient Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#arrow-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="arrow-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#3DE8D1" />
                        <stop offset="100%" stopColor="#438A78" />
                      </linearGradient>
                    </defs>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center text-white hover:text-tiffany-blue transition-colors duration-300 rounded-xl hover:bg-white/5"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-night/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                      pathname === item.href
                        ? "text-tiffany-blue bg-white/10 border border-tiffany-blue/20"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
