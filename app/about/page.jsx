"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Award,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Rocket,
  Brain,
  Heart,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "CEO & Creative Director",
    bio: "Visionary leader with 12+ years in digital innovation and brand transformation. Alex has personally overseen the transformation of over 500 brands, leading teams that have won 15+ industry awards including the prestigious Digital Excellence Award 2023. His strategic approach combines deep market psychology with cutting-edge technology to create brands that don't just compete—they dominate.",
    image: "/placeholder.svg?height=500&width=400&text=Alex+Rivera",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@visqode.com",
    },
    achievements: [
      "Forbes 30 Under 30 (2020)",
      "Digital Excellence Award Winner",
      "Innovation Leader 2023",
      "TEDx Speaker on Digital Transformation",
      "Published Author: 'The Future of Digital Branding'",
    ],
    expertise: ["Strategic Leadership", "Brand Psychology", "Digital Innovation", "Team Building", "Client Relations"],
    yearsExperience: 12,
    projectsLed: 500,
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer & Tech Architect",
    bio: "Full-stack architect and AI specialist with unparalleled expertise in scalable web applications. Sarah has architected platforms serving over 10 million users and pioneered 8 open-source technologies used by thousands of developers worldwide. Her technical leadership has resulted in 99.9% uptime across all client projects and revolutionary performance optimizations.",
    image: "/placeholder.svg?height=500&width=400&text=Sarah+Chen",
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@visqode.com",
    },
    achievements: [
      "Google Developer Expert",
      "AWS Solutions Architect Professional",
      "Open Source Contributor (50K+ GitHub stars)",
      "Tech Innovation Award 2022",
      "Women in Tech Leadership Award",
    ],
    expertise: [
      "Full-Stack Development",
      "Cloud Architecture",
      "AI/ML Integration",
      "Performance Optimization",
      "DevOps",
    ],
    yearsExperience: 10,
    projectsLed: 300,
  },
  {
    name: "Marcus Johnson",
    role: "Brand Strategist & Psychology Expert",
    bio: "Master of brand psychology with a PhD in Consumer Behavior from Stanford. Marcus has crafted compelling narratives for 50+ Fortune 500 companies, driving over $100M in additional revenue through strategic brand positioning. His psychological insights have revolutionized how premium brands connect with their audiences at a subconscious level.",
    image: "/placeholder.svg?height=500&width=400&text=Marcus+Johnson",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@visqode.com",
    },
    achievements: [
      "PhD in Consumer Psychology (Stanford)",
      "Brand Strategy Excellence Award",
      "Marketing Genius Award 2021",
      "Published Researcher (25+ papers)",
      "Fortune 500 Brand Consultant",
    ],
    expertise: [
      "Consumer Psychology",
      "Brand Strategy",
      "Market Research",
      "Narrative Design",
      "Conversion Optimization",
    ],
    yearsExperience: 15,
    projectsLed: 200,
  },
  {
    name: "Elena Vasquez",
    role: "Senior UX/UI Designer & Creative Lead",
    bio: "Design perfectionist with an obsessive eye for detail that creates intuitive, beautiful interfaces. Elena's designs have increased user engagement by an average of 400% across all projects and won 12 international design awards. Her user-centered approach has redefined digital experiences for millions of users worldwide.",
    image: "/placeholder.svg?height=500&width=400&text=Elena+Vasquez",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "elena@visqode.com",
    },
    achievements: [
      "UX Design Master Certification",
      "Interface Innovation Award (3x winner)",
      "User Experience Expert of the Year",
      "Dribbble Top Designer",
      "Adobe Creative Resident",
    ],
    expertise: ["UX/UI Design", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    yearsExperience: 8,
    projectsLed: 250,
  },
]

const companyStrengths = [
  {
    icon: Rocket,
    title: "5 Years of Proven Excellence",
    description:
      "Since 2019, we've consistently delivered premium digital experiences that exceed expectations and drive real business results.",
    stats: "500+ successful projects",
  },
  {
    icon: Users,
    title: "World-Class Team",
    description:
      "Our team combines 45+ years of collective experience with cutting-edge expertise in design, development, and strategy.",
    stats: "50+ team members globally",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description:
      "Our clients see average increases of 300% in conversions, 250% in user engagement, and 400% in brand recognition.",
    stats: "$50M+ client revenue generated",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We've worked with clients across 25+ countries, from innovative startups to Fortune 500 companies.",
    stats: "25+ countries served",
  },
  {
    icon: Shield,
    title: "Premium Quality Guarantee",
    description:
      "Every project undergoes rigorous quality assurance with our 99.9% client satisfaction rate and comprehensive warranty.",
    stats: "99.9% client satisfaction",
  },
  {
    icon: Brain,
    title: "Innovation Leadership",
    description:
      "We don't follow trends—we create them. Our team pioneers new technologies and methodologies that shape the industry.",
    stats: "15+ industry awards",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push boundaries and embrace cutting-edge technologies to deliver solutions that define the future of digital experiences. Our R&D investment is 20% of revenue.",
    principles: ["Continuous Learning", "Technology Leadership", "Creative Problem Solving", "Future-Focused Thinking"],
  },
  {
    icon: Award,
    title: "Premium Excellence",
    description:
      "Every project is crafted with meticulous attention to detail and an unwavering commitment to ultra-premium quality standards that exceed industry benchmarks.",
    principles: ["Quality Obsession", "Attention to Detail", "Perfectionist Approach", "Premium Standards"],
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We believe in deep collaborative relationships that foster growth and create lasting value for our clients and their audiences through transparent communication.",
    principles: ["Open Communication", "Shared Success", "Long-term Relationships", "Mutual Growth"],
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Our success is measured by your success. We focus on delivering measurable results that transform businesses and exceed expectations with data-driven approaches.",
    principles: ["Data-Driven Decisions", "ROI Focus", "Performance Metrics", "Continuous Optimization"],
  },
]

const milestones = [
  {
    year: "2019",
    title: "Visqode Founded",
    description: "Started with a vision to create premium digital experiences that transform businesses.",
    achievement: "First 10 clients secured",
  },
  {
    year: "2020",
    title: "Remote-First Pioneer",
    description: "Successfully transitioned to remote-first operations, ahead of the global shift.",
    achievement: "50+ projects completed",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: "Won our first major industry awards and established partnerships with tech leaders.",
    achievement: "100+ projects milestone",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded operations globally, serving clients across 25+ countries.",
    achievement: "250+ projects completed",
  },
  {
    year: "2023",
    title: "AI Innovation Leader",
    description: "Pioneered AI-powered design and development solutions for premium brands.",
    achievement: "400+ projects milestone",
  },
  {
    year: "2024",
    title: "Future Platform",
    description: "Launching revolutionary platform combining talent marketplace with AI-powered services.",
    achievement: "500+ projects completed",
  },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const strengthsRef = useRef(null)
  const teamRef = useRef(null)
  const valuesRef = useRef(null)
  const milestonesRef = useRef(null)

  useEffect(() => {
    // Hero animations
    gsap
      .timeline()
      .fromTo(".about-badge", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" })
      .fromTo(".about-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.3")
      .fromTo(".about-text", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
      .fromTo(
        ".about-stats",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
        "-=0.6",
      )

    // Strengths animation
    gsap.fromTo(
      ".strength-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: strengthsRef.current,
          start: "top 75%",
        },
      },
    )

    // Team cards animation
    gsap.fromTo(
      ".team-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 75%",
        },
      },
    )

    // Values animation
    gsap.fromTo(
      ".value-card",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 75%",
        },
      },
    )

    // Milestones animation
    gsap.fromTo(
      ".milestone-item",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: milestonesRef.current,
          start: "top 75%",
        },
      },
    )
  }, [])

  return (
    <div className="min-h-screen bg-night text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tiffany-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-hookers-green/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div className="about-badge inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tiffany-blue/10 border border-tiffany-blue/20 mb-8">
              <Users className="w-4 h-4 text-tiffany-blue" />
              <span className="text-sm font-medium text-tiffany-blue">Meet the Visionaries</span>
            </motion.div>

            <h1 className="about-title text-7xl md:text-8xl font-bold mb-8 leading-none">
              <span className="block text-white">Crafting Digital</span>
              <span className="block bg-gradient-to-r from-tiffany-blue to-white bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="about-text text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-16">
              We are digital architects, brand storytellers, and innovation pioneers. For five years, we've been
              transforming the digital landscape through exceptional design, cutting-edge technology, and human-centered
              experiences that drive unprecedented business growth.
            </p>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "500+", label: "Projects Delivered", sublabel: "Across 50+ Industries", icon: Rocket },
              { number: "99.9%", label: "Client Satisfaction", sublabel: "Average Rating 4.9/5", icon: Star },
              {
                number: "$50M+",
                label: "Client Revenue Generated",
                sublabel: "Through Our Solutions",
                icon: TrendingUp,
              },
              { number: "24/7", label: "Premium Support", sublabel: "Dedicated Success Team", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -10, scale: 1.05 }}
                className="about-stats text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-night" />
                </div>
                <div className="text-5xl font-bold text-tiffany-blue mb-3">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Strengths Section */}
      <section ref={strengthsRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tiffany-blue/5 via-transparent to-hookers-green/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-tiffany-blue bg-clip-text text-transparent">
              Why Choose Visqode
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Five years of relentless pursuit of excellence has made us the premier choice for brands that demand the
              best
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {companyStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="strength-card group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <strength.icon className="w-8 h-8 text-night" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-tiffany-blue transition-colors">
                  {strength.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4">{strength.description}</p>

                <div className="text-tiffany-blue font-bold text-lg">{strength.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-tiffany-blue bg-clip-text text-transparent">
              Our Dream Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The creative minds and technical experts behind Visqode's extraordinary success. Combined, our leadership
              team brings 45+ years of industry expertise.
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} whileHover={{ y: -10, scale: 1.01 }} className="team-card group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Image */}
                      <div className="relative">
                        <div className="w-full h-80 rounded-2xl overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-tiffany-blue transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-tiffany-blue font-semibold text-xl mb-4">{member.role}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-tiffany-blue">{member.yearsExperience}+</div>
                            <div className="text-sm text-gray-400">Years Experience</div>
                          </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-8 text-lg">{member.bio}</p>

                        {/* Expertise Tags */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Core Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-tiffany-blue/20 text-tiffany-blue text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-8">
                          <h4 className="text-white font-semibold mb-4">Key Achievements:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {member.achievements.map((achievement) => (
                              <div key={achievement} className="flex items-center gap-3">
                                <Award className="w-4 h-4 text-tiffany-blue flex-shrink-0" />
                                <span className="text-sm text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stats and Social */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{member.projectsLed}+</div>
                              <div className="text-xs text-gray-400">Projects Led</div>
                            </div>
                            <div className="w-px h-12 bg-white/20"></div>
                            <div className="flex gap-3">
                              {member.social.linkedin && (
                                <a
                                  href={member.social.linkedin}
                                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-tiffany-blue/20 hover:scale-110 transition-all duration-300"
                                >
                                  <Linkedin className="w-5 h-5 text-tiffany-blue" />
                                </a>
                              )}
                              {member.social.twitter && (
                                <a
                                  href={member.social.twitter}
                                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-tiffany-blue/20 hover:scale-110 transition-all duration-300"
                                >
                                  <Twitter className="w-5 h-5 text-tiffany-blue" />
                                </a>
                              )}
                              {member.social.github && (
                                <a
                                  href={member.social.github}
                                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-tiffany-blue/20 hover:scale-110 transition-all duration-300"
                                >
                                  <Github className="w-5 h-5 text-tiffany-blue" />
                                </a>
                              )}
                              <a
                                href={`mailto:${member.social.email}`}
                                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-tiffany-blue/20 hover:scale-110 transition-all duration-300"
                              >
                                <Mail className="w-5 h-5 text-tiffany-blue" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section ref={milestonesRef} className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Five years of continuous growth, innovation, and success milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tiffany-blue to-hookers-green"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  whileHover={{ x: 10 }}
                  className="milestone-item relative flex items-center gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center font-bold text-night text-sm">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{milestone.description}</p>
                    <div className="text-tiffany-blue font-semibold">{milestone.achievement}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tiffany-blue/5 via-transparent to-hookers-green/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="value-card group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-night" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-tiffany-blue transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">{value.description}</p>

                <div className="space-y-2">
                  {value.principles.map((principle) => (
                    <div key={principle} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-tiffany-blue" />
                      <span className="text-gray-300 text-sm">{principle}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 rounded-3xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-night" />
              </div>

              <h3 className="text-5xl md:text-6xl font-bold text-white mb-8">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                "To revolutionize the digital landscape by creating extraordinary experiences that not only meet today's
                needs but anticipate tomorrow's possibilities. We believe in the power of innovation, the beauty of
                exceptional design, and the impact of human-centered technology. Our mission is to transform every brand
                we touch into a digital powerhouse that dominates its market and creates lasting value for all
                stakeholders."
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-tiffany-blue to-hookers-green rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
