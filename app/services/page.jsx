"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import {
  Palette,
  Code2,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Rocket,
  Target,
  Settings,
  BarChart3,
  Smartphone,
  Search,
  ShoppingCart,
  PenTool,
  Cloud,
  Lock,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const mainServices = [
  {
    icon: Palette,
    title: "Brand Building & Identity",
    description:
      "Create powerful brand identities that resonate with your audience and establish market dominance through strategic visual storytelling and positioning.",
    features: [
      "Complete Visual Identity Systems",
      "Brand Strategy & Market Positioning",
      "Logo Design & Typography",
      "Brand Guidelines & Standards",
      "Market Research & Competitive Analysis",
      "Brand Voice & Messaging",
      "Packaging & Print Design",
      "Brand Asset Management",
    ],
    pricing: "Starting at $15,000",
    timeline: "4-8 weeks",
    results: "400% average increase in brand recognition",
    caseStudy: "Luxury wellness brand achieved $2M first-year revenue",
    gradient: "from-tiffany-blue to-hookers-green",
  },
  {
    icon: Code2,
    title: "Web Development & Applications",
    description:
      "Build lightning-fast, scalable web applications with cutting-edge technologies that deliver exceptional user experiences and drive business growth.",
    features: [
      "Custom Web Applications",
      "E-commerce Platforms",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Performance Optimization",
      "Mobile-First Responsive Design",
      "Content Management Systems",
      "Third-party Integrations",
    ],
    pricing: "Starting at $25,000",
    timeline: "6-12 weeks",
    results: "300% average performance improvement",
    caseStudy: "SaaS platform scaled from 100 to 100K users seamlessly",
    gradient: "from-hookers-green to-tiffany-blue",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Leverage artificial intelligence to automate processes, enhance user experiences, and gain competitive advantages through intelligent automation and machine learning.",
    features: [
      "AI Chatbots & Virtual Assistants",
      "Machine Learning Integration",
      "Predictive Analytics & Insights",
      "Automated Content Generation",
      "Process Optimization & Automation",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "AI-Powered Personalization",
    ],
    pricing: "Starting at $20,000",
    timeline: "8-16 weeks",
    results: "250% efficiency improvement average",
    caseStudy: "Fintech AI reduced customer service costs by 60%",
    gradient: "from-tiffany-blue via-hookers-green to-tiffany-blue",
  },
]

const additionalServices = [
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Comprehensive SEO strategies and digital marketing campaigns that drive organic traffic and conversions.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "PPC Campaigns"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android Apps", "React Native", "Flutter Development", "App Store Optimization"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with advanced features for online retail success.",
    features: ["Shopify Plus", "WooCommerce", "Custom Platforms", "Payment Integration"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Advanced analytics implementation and data visualization for informed decision-making.",
    features: ["Google Analytics 4", "Custom Dashboards", "Conversion Tracking", "Performance Reports"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions and DevOps practices for reliable, high-performance applications.",
    features: ["AWS/Azure Setup", "CI/CD Pipelines", "Auto-scaling", "Security Hardening"],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Comprehensive security audits and compliance solutions to protect your digital assets.",
    features: ["Security Audits", "GDPR Compliance", "SSL Implementation", "Vulnerability Testing"],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "Deep dive into your business goals, target audience, and competitive landscape to create a winning strategy.",
    icon: Target,
    duration: "1-2 weeks",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Create stunning designs and detailed project plans that align with your vision and business objectives.",
    icon: PenTool,
    duration: "2-4 weeks",
  },
  {
    step: "03",
    title: "Development & Build",
    description:
      "Transform designs into powerful, scalable solutions using cutting-edge technologies and best practices.",
    icon: Settings,
    duration: "4-12 weeks",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing across all devices and browsers to ensure flawless performance and user experience.",
    icon: Shield,
    duration: "1-2 weeks",
  },
  {
    step: "05",
    title: "Launch & Deployment",
    description: "Seamless deployment with comprehensive monitoring and immediate performance optimization.",
    icon: Rocket,
    duration: "1 week",
  },
  {
    step: "06",
    title: "Ongoing Support & Optimization",
    description: "Continuous monitoring, updates, and optimization based on real-world data and user feedback.",
    icon: TrendingUp,
    duration: "Ongoing",
  },
]

const pricingTiers = [
  {
    name: "Startup",
    price: "$15,000",
    description: "Perfect for new businesses and startups looking to establish their digital presence",
    features: [
      "Brand Identity Package",
      "5-Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "3 Months Support",
      "Analytics Integration",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$35,000",
    description: "Ideal for growing businesses that need comprehensive digital solutions",
    features: [
      "Complete Brand System",
      "Custom Web Application",
      "E-commerce Integration",
      "Advanced SEO Strategy",
      "6 Months Support",
      "Performance Optimization",
      "Third-party Integrations",
      "Content Management System",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$75,000+",
    description: "For large organizations requiring premium, scalable solutions",
    features: [
      "Enterprise Brand Strategy",
      "Complex Web Platform",
      "AI-Powered Features",
      "Advanced Analytics",
      "12 Months Support",
      "Dedicated Account Manager",
      "Priority Support",
      "Custom Integrations",
      "Security Audit",
    ],
    popular: false,
  },
]

export default function ServicesPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const additionalRef = useRef(null)
  const pricingRef = useRef(null)

  useEffect(() => {
    // Hero animations
    gsap
      .timeline()
      .fromTo(
        ".services-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      )
      .fromTo(
        ".services-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        ".services-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      )

    // Main services animation
    gsap.fromTo(
      ".main-service-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
        },
      },
    )

    // Process animation
    gsap.fromTo(
      ".process-step",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 70%",
        },
      },
    )

    // Additional services animation
    gsap.fromTo(
      ".additional-service-card",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: additionalRef.current,
          start: "top 75%",
        },
      },
    )

    // Pricing animation
    gsap.fromTo(
      ".pricing-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pricingRef.current,
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
          <div className="absolute top-20 left-10 w-96 h-96 bg-tiffany-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-hookers-green/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div className="services-badge inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tiffany-blue/10 border border-tiffany-blue/20 mb-8">
              <Zap className="w-4 h-4 text-tiffany-blue" />
              <span className="text-sm font-medium text-tiffany-blue">Premium Digital Solutions</span>
            </motion.div>

            <h1 className="services-title text-7xl md:text-8xl font-bold mb-8 leading-none">
              <span className="block text-white">Complete Digital</span>
              <span className="block bg-gradient-to-r from-tiffany-blue to-white bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="services-subtitle text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              From brand building to AI-powered development, we deliver comprehensive solutions that transform
              businesses and drive exceptional results. 5 years of proven expertise at your service.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Expert Team Members" },
              { number: "25+", label: "Countries Served" },
              { number: "99.9%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="text-3xl font-bold text-tiffany-blue mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={servicesRef} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Core Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your digital presence and drive business growth
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div key={service.title} whileHover={{ y: -10, scale: 1.01 }} className="main-service-card group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <service.icon className="w-8 h-8 text-night" />
                          </div>
                          <div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-tiffany-blue transition-colors">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-8 text-lg">{service.description}</p>

                        {/* Key Stats */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                          <div className="text-center p-4 rounded-xl bg-white/5">
                            <div className="text-tiffany-blue font-bold text-lg">{service.pricing}</div>
                            <div className="text-gray-400 text-sm">Starting Price</div>
                          </div>
                          <div className="text-center p-4 rounded-xl bg-white/5">
                            <div className="text-tiffany-blue font-bold text-lg">{service.timeline}</div>
                            <div className="text-gray-400 text-sm">Timeline</div>
                          </div>
                          <div className="text-center p-4 rounded-xl bg-white/5">
                            <div className="text-tiffany-blue font-bold text-lg">ROI</div>
                            <div className="text-gray-400 text-sm">Guaranteed</div>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="mb-8">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-tiffany-blue" />
                            <span className="font-semibold text-white">Typical Results:</span>
                          </div>
                          <p className="text-tiffany-blue font-semibold">{service.results}</p>
                          <p className="text-gray-400 text-sm mt-1">Case Study: {service.caseStudy}</p>
                        </div>

                        <Link href="/contact">
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 text-tiffany-blue font-bold text-lg group-hover:gap-4 transition-all duration-300"
                          >
                            Get Started
                            <ArrowRight className="w-6 h-6" />
                          </motion.button>
                        </Link>
                      </div>

                      {/* Features List */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-6">What's Included:</h4>
                        <div className="grid gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                            >
                              <CheckCircle className="w-5 h-5 text-tiffany-blue flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
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

      {/* Process Section */}
      <section ref={processRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tiffany-blue/5 via-transparent to-hookers-green/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Our Proven <span className="text-tiffany-blue">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach refined over 5 years to deliver exceptional results every time
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                whileHover={{ y: -10, scale: 1.02 }}
                className="process-step group text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-night" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-night border-2 border-tiffany-blue rounded-full flex items-center justify-center text-sm font-bold text-tiffany-blue">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-tiffany-blue transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>

                <div className="text-tiffany-blue font-semibold text-sm">{step.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section ref={additionalRef} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Additional Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized solutions to complement your core digital strategy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="additional-service-card group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-night" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-tiffany-blue transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
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

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-hookers-green/5 via-transparent to-tiffany-blue/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Investment Packages</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparent pricing for premium digital solutions. Every package includes our quality guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`pricing-card group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 ${
                  tier.popular
                    ? "bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 border-tiffany-blue/30 scale-105"
                    : "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-tiffany-blue/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold text-sm rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-tiffany-blue mb-4">{tier.price}</div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-tiffany-blue flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 font-bold text-lg rounded-2xl transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-tiffany-blue to-hookers-green text-night hover:shadow-glow"
                        : "border-2 border-white/20 text-white hover:bg-white/5"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Need a custom solution? We create tailored packages for unique requirements.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(180, 232, 219, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold text-lg rounded-full transition-all duration-300"
              >
                Request Custom Quote
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 rounded-3xl" />

            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Transform?</h3>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join 500+ successful businesses who've transformed their digital presence with Visqode. Let's create
                something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(180, 232, 219, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold text-xl rounded-full transition-all duration-300"
                  >
                    Start Your Project
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
    </div>
  )
}
