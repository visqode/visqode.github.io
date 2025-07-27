"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/Features/ScrollReveal";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      desc: "From MVPs to enterprise solutions, we’ve built scalable platforms across tech, healthcare, retail, and more.",
    },
    {
      number: "5+",
      label: "Years of Expertise",
      desc: "Hands-on experience delivering end-to-end digital solutions tailored to evolving industry needs.",
    },
    {
      number: "100%",
      label: "Client-Centric Focus",
      desc: "We don't just complete projects — we build lasting partnerships based on transparency and trust.",
    },
  ];

  const values = [
    {
      icon: "bx-rocket",
      title: "Innovation",
      description:
        "From concept to launch, we infuse originality and forward-thinking into every pixel and line of code.",
    },
    {
      icon: "bx-heart",
      title: "Partnership",
      description:
        "We listen, collaborate, and co-create — working as an extension of your team, not just a vendor.",
    },
    {
      icon: "bx-shield-check",
      title: "Excellence",
      description:
        "We uphold top-tier standards in design, development, and delivery to ensure your product stands out and performs flawlessly.",
    },
    {
      icon: "bx-trending-up",
      title: "Growth Mindset",
      description:
        "Our solutions are built to scale with your vision. We're here for your next milestone, not just your next task.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white">
        <Navigation />
      </div>

      <PageHero
        title="About VisQode"
        subtitle="Your Digital Transformation Partner"
        description="VisQode is a forward-thinking digital agency empowering businesses through strategic design, innovative technology, and purpose-driven branding. From startups to enterprises, we craft digital experiences that inspire, engage, and drive measurable results."
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* What is VisQode Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl md:rounded-3xl shadow-lg w-full h-auto"
              />
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl rajdhani font-bold">
                What is VisQode?
              </h2>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                textClassName="text-base md:text-lg openSans leading-relaxed text-gray-700"
              >
                VisQode is your one-stop digital innovation partner. We design,
                build, and scale digital solutions — from sleek websites to
                robust web applications — that empower businesses to lead in a
                competitive digital age.
              </ScrollReveal>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                textClassName="text-base md:text-lg openSans leading-relaxed text-gray-700"
              >
                With an interdisciplinary team of designers, developers, and
                strategists, we bridge creativity and functionality. Our mission
                is simple: to craft digital ecosystems that align with your
                brand, captivate your audience, and fuel growth.
              </ScrollReveal>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                textClassName="text-base md:text-lg openSans leading-relaxed text-gray-700"
              >
                Whether you're launching a new product, redefining your brand,
                or scaling your platform — we’re here to guide you every step of
                the way with strategy, innovation, and measurable impact.
              </ScrollReveal>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl racing text-[#a7ff59] mb-4">
                  {stat.number}
                </div>
                <h3 className="text-lg md:text-xl racing mb-2">{stat.label}</h3>
                <p className="openSans text-gray-600 text-sm md:text-base">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl racing font-bold mb-6">
              Our Core Values
            </h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-lg openSans text-gray-600 max-w-3xl mx-auto"
            >
              These principles guide everything we do and shape how we work with
              our clients.
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#a7ff59] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`bx ${value.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl racing font-bold mb-3">{value.title}</h3>
                <p className="openSans text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Whad Do we Do*/}
          <div className="text-center my-12">
            <h2 className="text-3xl md:text-4xl racing font-bold mb-6">
              What Do
              <span className="bg-[#a7ff59] px-[.3rem] rounded-[6px] mx-2">
                We
              </span>{" "}
              Do?
            </h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-lg openSans text-gray-600 max-w-3xl mx-auto cursor-default"
            >
              We are more than just a digital firm. We provide a broad range of
              services to help businesses succeed in the digital era as a
              full-service partner for digital transformation. VisQode offers
              everything from production-ready software development to social
              media automation and brand building.
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
