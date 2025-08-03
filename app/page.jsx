"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Code2,
  Palette,
  Zap,
  Globe,
  Users,
  Brain,
  Star,
  CheckCircle,
  TrendingUp,
  Rocket,
  Target,
  Lightbulb,
} from "lucide-react";
import Chatbot from "@/components/chatbot";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const futureRef = useRef(null);
  const testimonialsRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // Hero animations
    gsap
      .timeline()
      .fromTo(
        ".hero-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      )
      .fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      )
      .fromTo(
        ".hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        ".hero-mockup",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1",
      );

    // Floating animations
    gsap.to(".floating-1", {
      y: -20,
      rotation: 5,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.to(".floating-2", {
      y: -30,
      rotation: -3,
      duration: 5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });
    gsap.to(".floating-3", {
      y: -15,
      rotation: 2,
      duration: 3.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2,
    });

    // Services animation
    gsap.fromTo(
      ".service-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
        },
      },
    );

    // Stats animation
    gsap.fromTo(
      ".stat-card",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      },
    );

    // Process animation
    gsap.fromTo(
      ".process-step",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 70%",
        },
      },
    );

    // Future section animation
    gsap.fromTo(
      ".future-card",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: futureRef.current,
          start: "top 70%",
        },
      },
    );

    // Testimonials animation
    gsap.fromTo(
      ".testimonial-card",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <div className="min-h-screen bg-night text-white overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-1 absolute top-20 left-10 w-72 h-72 bg-tiffany-blue/5 rounded-full blur-3xl" />
          <div className="floating-2 absolute top-40 right-20 w-96 h-96 bg-hookers-green/8 rounded-full blur-3xl" />
          <div className="floating-3 absolute bottom-20 left-1/3 w-80 h-80 bg-tiffany-blue/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div className="hero-badge inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8">
              <div className="w-2 h-2 bg-tiffany-blue rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                5 Years of Digital Excellence
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="hero-title text-7xl md:text-8xl font-bold mb-8 leading-none">
              <span className="block text-white">Transform Your</span>
              <span className="block text-tiffany-blue">Digital Vision</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              We craft extraordinary digital experiences that elevate brands to
              unprecedented heights. From premium web development to AI-powered
              solutions, we're your partner in digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(180, 232, 219, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold text-lg rounded-full flex items-center gap-3 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 border-2 border-white/20 text-white font-bold text-lg rounded-full backdrop-blur-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-6 h-6" />
                Watch Our Story
              </motion.button>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="hero-mockup relative max-w-6xl mx-auto">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 rounded-3xl blur-xl" />

              {/* Code Editor Mockup */}
              <div className="relative bg-eerie-black rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-gray-400">
                    visqode-transformation.jsx
                  </span>
                </div>

                <div className="space-y-2 text-gray-300">
                  <div>
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-tiffany-blue">
                      {"{ DigitalExcellence }"}
                    </span>{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">'@visqode/core'</span>
                  </div>
                  <div>
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-tiffany-blue">
                      {"{ AIInnovation }"}
                    </span>{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">'@visqode/future'</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-purple-400">
                      export default function
                    </span>{" "}
                    <span className="text-yellow-400">BrandTransformation</span>
                    <span className="text-white">() {"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-white">{"("}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-gray-500">{"<"}</span>
                    <span className="text-red-400">DigitalExcellence</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-tiffany-blue">experience</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"ultra-premium"</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-tiffany-blue">innovation</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"cutting-edge"</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-tiffany-blue">results</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"transformative"</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-gray-500">/{">"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">)</span>
                  </div>
                  <div>
                    <span className="text-white">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Projects Completed",
                sublabel: "Since 2019",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                sublabel: "5-Star Average",
              },
              {
                number: "$10M+",
                label: "Revenue Generated",
                sublabel: "For Our Clients",
              },
              {
                number: "50+",
                label: "Team Members",
                sublabel: "Global Experts",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -10, scale: 1.05 }}
                className="stat-card text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="text-5xl font-bold text-tiffany-blue mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tiffany-blue/10 border border-tiffany-blue/20 mb-6">
              <Zap className="w-4 h-4 text-tiffany-blue" />
              <span className="text-sm font-medium text-tiffany-blue">
                Our Expertise
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-tiffany-blue bg-clip-text text-transparent">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From brand building to AI-powered development, we deliver
              comprehensive solutions that drive real results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Brand Building Card */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-night" />
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-tiffany-blue transition-colors">
                  Brand Building
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  Create powerful brand identities that resonate with your
                  audience and establish market dominance through strategic
                  visual storytelling and positioning.
                </p>

                <div className="space-y-3">
                  {[
                    "Visual Identity Systems",
                    "Brand Strategy & Positioning",
                    "Logo & Typography Design",
                    "Brand Guidelines & Standards",
                    "Market Research & Analysis",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-tiffany-blue" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Web Development Card */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-hookers-green/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-hookers-green to-tiffany-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-8 h-8 text-night" />
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-tiffany-blue transition-colors">
                  Web Development
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  Build lightning-fast, scalable web applications with
                  cutting-edge technologies that deliver exceptional user
                  experiences and drive business growth.
                </p>

                <div className="space-y-3">
                  {[
                    "Custom Web Applications",
                    "E-commerce Platforms",
                    "API Development & Integration",
                    "Performance Optimization",
                    "Mobile-First Design",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-tiffany-blue" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI-Powered Solutions Card */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-night" />
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-tiffany-blue transition-colors">
                  AI-Powered Solutions
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  Leverage artificial intelligence to automate processes,
                  enhance user experiences, and gain competitive advantages
                  through intelligent automation.
                </p>

                <div className="space-y-3">
                  {[
                    "AI Chatbots & Automation",
                    "Machine Learning Integration",
                    "Predictive Analytics",
                    "Content Generation",
                    "Process Optimization",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-tiffany-blue" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tiffany-blue/5 via-transparent to-hookers-green/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              Our Proven <span className="text-tiffany-blue">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach refined over 5 years to deliver exceptional
              results every time
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "Deep dive into your business goals, target audience, and competitive landscape to create a winning strategy.",
                icon: Target,
              },
              {
                step: "02",
                title: "Design & Planning",
                description:
                  "Create stunning designs and detailed project plans that align with your vision and business objectives.",
                icon: Lightbulb,
              },
              {
                step: "03",
                title: "Development & Build",
                description:
                  "Transform designs into powerful, scalable solutions using cutting-edge technologies and best practices.",
                icon: Rocket,
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description:
                  "Deploy your solution and continuously optimize performance based on real-world data and feedback.",
                icon: TrendingUp,
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                whileHover={{ y: -10, scale: 1.02 }}
                className="process-step group text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-10 h-10 text-night" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-night border-2 border-tiffany-blue rounded-full flex items-center justify-center text-sm font-bold text-tiffany-blue">
                    {process.step}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-tiffany-blue transition-colors">
                  {process.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section ref={futureRef} className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hookers-green/10 border border-hookers-green/20 mb-6">
              <Brain className="w-4 h-4 text-hookers-green" />
              <span className="text-sm font-medium text-hookers-green">
                Coming Soon
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              The Future is <span className="text-tiffany-blue">Now</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're building tomorrow's digital ecosystem today - expanding
              beyond traditional services to create a comprehensive platform
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Talent Marketplace",
                description:
                  "Revolutionary platform connecting top talent with visionary clients, without excessive fees. Find work or hire experts seamlessly.",
                features: [
                  "Zero Commission Model",
                  "AI-Powered Matching",
                  "Integrated Project Management",
                  "Global Talent Pool",
                ],
              },
              {
                icon: Brain,
                title: "AI-Human Hybrid Services",
                description:
                  "The perfect fusion of artificial intelligence and human expertise for unmatched results and efficiency.",
                features: [
                  "Automated Workflows",
                  "Human Quality Control",
                  "Predictive Analytics",
                  "24/7 Availability",
                ],
              },
              {
                icon: Globe,
                title: "Complete Digital Ecosystem",
                description:
                  "One-stop platform for all digital needs - from social media management to complex development projects.",
                features: [
                  "Unified Dashboard",
                  "Cross-Platform Integration",
                  "Real-time Collaboration",
                  "Comprehensive Analytics",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="future-card group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-night" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-tiffany-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-tiffany-blue rounded-full" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400">
              Trusted by industry leaders worldwide for 5+ years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                time: "2 weeks ago",
                message:
                  "Visqode transformed our entire digital presence. The attention to detail and innovative approach exceeded all expectations. Our conversion rates increased by 400% after launch.",
                rating: 5,
                project: "Complete Brand Overhaul",
              },
              {
                name: "Michael Chen",
                company: "Global Ventures",
                time: "1 month ago",
                message:
                  "Working with Visqode was a game-changer. Their technical expertise and creative vision delivered results beyond what we imagined possible. ROI was immediate.",
                rating: 5,
                project: "E-commerce Platform",
              },
              {
                name: "Emily Rodriguez",
                company: "Creative Studios",
                time: "3 weeks ago",
                message:
                  "The team at Visqode doesn't just build websites - they craft digital experiences. Our client satisfaction scores went through the roof after the redesign.",
                rating: 5,
                project: "Portfolio Website",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                whileHover={{ y: -5 }}
                className="testimonial-card p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-tiffany-blue fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  "{testimonial.message}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-tiffany-blue">
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.project} • {testimonial.time}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center text-night font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 rounded-3xl" />

            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform?
              </h3>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join 500+ successful businesses who've transformed their digital
                presence with Visqode. Let's create something extraordinary
                together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 50px rgba(180, 232, 219, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold text-xl rounded-full transition-all duration-300"
                  >
                    Start Your Journey
                  </motion.button>
                </Link>

                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 border-2 border-white/20 text-white font-bold text-xl rounded-full backdrop-blur-xl hover:bg-white/5 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
}
