"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, LockKeyhole, FileText, Globe, User } from "lucide-react";
import ChatWidget from "../../components/ChatWidget";
import Navigation from "../../components/Navigation";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a] text-white"
    >
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md">
        <Navigation />
      </div>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative px-6 py-24 text-center bg-gradient-to-br from-black via-gray-900 to-[#0e0e0e] overflow-hidden"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-600">
          Your Privacy, Superpowered.
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-gray-300">
          No tracking. No data selling. Just respectful, minimalist data
          handling.
        </p>

        {/* Wavy SVG divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            className="w-full h-24 fill-current text-[#1a1a1a]"
          >
            <path d="M0,0 C600,100 600,0 1200,100 L1200,00 L0,0 Z" />
          </svg>
        </div>
      </motion.header>

      {/* Sections */}
      <main className="relative px-6 md:px-16 lg:px-24 max-w-7xl mx-auto pb-24 space-y-20 z-10">
        {sections.map((section, index) => (
          <div
            key={section.title}
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-[#111111]/60 border border-gray-800 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-lime-600 to-lime-500 p-3 rounded-full">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                {section.content}
              </div>
            </motion.div>
          </div>
        ))}
      </main>

      <ChatWidget />
    </motion.section>
  );
}

// 💡 Section Data
const sections = [
  {
    title: "Introduction",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    content: (
      <p>
        At Visqode, privacy is a core principle. We believe in minimal data
        collection and total transparency. We collect only what's essential and
        never sell your data — ever.
      </p>
    ),
  },
  {
    title: "Data Collection Philosophy",
    icon: <FileText className="w-6 h-6 text-white" />,
    content: (
      <ul className="list-disc list-inside">
        <li>No unnecessary personal info</li>
        <li>No tracking across the web</li>
        <li>We never rent or sell your data</li>
      </ul>
    ),
  },
  {
    title: "What We Collect",
    icon: <User className="w-6 h-6 text-white" />,
    content: (
      <>
        <p>We only collect what we need to deliver services, such as:</p>
        <ul className="list-disc list-inside">
          <li>Email and name (if you submit them)</li>
          <li>Technical data (IP, browser, device type)</li>
        </ul>
        <p className="font-semibold mt-2">We DO NOT collect:</p>
        <ul className="list-disc list-inside">
          <li>Location data</li>
          <li>Behavioral tracking or ad IDs</li>
          <li>Biometric or sensitive info</li>
        </ul>
      </>
    ),
  },
  {
    title: "Cookies & Tracking",
    icon: <Globe className="w-6 h-6 text-white" />,
    content: (
      <>
        <p>
          We only use essential first-party cookies. Nothing that follows you
          around.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>No social media pixels</li>
          <li>No analytics trackers</li>
          <li>No cross-site cookies</li>
        </ul>
      </>
    ),
  },
  {
    title: "Your Rights",
    icon: <LockKeyhole className="w-6 h-6 text-white" />,
    content: (
      <ul className="list-disc list-inside">
        <li>Access or delete your data anytime</li>
        <li>Correct inaccuracies</li>
        <li>Withdraw consent</li>
        <li>File complaints if needed</li>
      </ul>
    ),
  },
];
