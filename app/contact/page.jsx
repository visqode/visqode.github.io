"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, MessageSquare, Zap } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const formRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("tKxkx74KmTruWC0Q6")

    // Hero animations
    gsap
      .timeline()
      .fromTo(
        ".contact-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      )
      .fromTo(
        ".contact-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        ".contact-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      )
      .fromTo(".contact-form", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
      .fromTo(
        ".contact-info",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1 },
        "-=0.8",
      )
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Create the message content that includes all form data
      const fullMessage = `
Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Project Details:
${formData.message}
      `.trim()

      await emailjs.send("service_d300jps", "template_r02gudy", {
        name: formData.name,
        time: new Date().toLocaleString(),
        message: fullMessage,
      })

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Success animation
      gsap.fromTo(
        ".success-animation",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      )
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-night text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-tiffany-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-hookers-green/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="success-animation text-center max-w-2xl mx-auto relative z-10"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle className="w-16 h-16 text-night" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tiffany-blue to-white bg-clip-text text-transparent">
            Message Sent Successfully!
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Thank you for reaching out to Visqode. Our team will review your message and get back to you within 24 hours
            with a personalized response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(180, 232, 219, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold rounded-full transition-all duration-300"
            >
              Send Another Message
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/")}
              className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full backdrop-blur-xl hover:bg-white/5 transition-all duration-300"
            >
              Back to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-night text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-tiffany-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-hookers-green/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-tiffany-blue/3 to-hookers-green/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center mb-20">
            <motion.div className="contact-badge inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tiffany-blue/10 border border-tiffany-blue/20 mb-8">
              <MessageSquare className="w-4 h-4 text-tiffany-blue" />
              <span className="text-sm font-medium text-tiffany-blue">Let's Connect</span>
            </motion.div>

            <h1 className="contact-title text-7xl md:text-8xl font-bold mb-8 leading-none">
              <span className="block text-white">Let's Create</span>
              <span className="block bg-gradient-to-r from-tiffany-blue to-white bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>

            <p className="contact-subtitle text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We're here to turn your vision into reality. Let's discuss how
              we can elevate your brand to extraordinary heights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div whileHover={{ y: -5 }} className="contact-form">
              <div className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-night" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Send us a message</h2>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-3">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                            errors.name
                              ? "border-red-500 focus:border-red-400"
                              : "border-white/20 focus:border-tiffany-blue/50 focus:bg-white/15"
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-400 rounded-full" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-3">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                            errors.email
                              ? "border-red-500 focus:border-red-400"
                              : "border-white/20 focus:border-tiffany-blue/50 focus:bg-white/15"
                          }`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-400 rounded-full" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-tiffany-blue/50 focus:bg-white/15 transition-all duration-300"
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-500 focus:border-red-400"
                            : "border-white/20 focus:border-tiffany-blue/50 focus:bg-white/15"
                        }`}
                        placeholder="Tell us about your project, goals, timeline, and budget..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-400 rounded-full" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(180, 232, 219, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold text-lg rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-night/30 border-t-night rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-sm text-gray-400 text-center">
                      We typically respond within 24 hours during business days
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="contact-info p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-night" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Email Us</h3>
                    <p className="text-tiffany-blue font-semibold">visqode@gmail.com</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Drop us a line anytime. We love hearing about new projects and opportunities to create something
                  extraordinary together.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="contact-info p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-hookers-green to-tiffany-blue rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-night" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Call Us</h3>
                    <p className="text-tiffany-blue font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Available Monday to Friday, 9 AM to 6 PM EST. For urgent matters, we're always just a call away.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="contact-info p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-night" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Visit Us</h3>
                    <p className="text-tiffany-blue font-semibold">New York, NY</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Schedule a meeting at our creative studio in the heart of the city. Let's discuss your vision in
                  person.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="contact-info p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-hookers-green to-tiffany-blue rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-night" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Response Time</h3>
                    <p className="text-tiffany-blue font-semibold">Within 24 Hours</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We pride ourselves on quick, thoughtful responses. Your project deserves immediate attention.
                </p>
              </motion.div>

              {/* CTA Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 border border-tiffany-blue/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-tiffany-blue" />
                    <h3 className="text-2xl font-bold text-white">Ready to Start?</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Let's transform your digital presence together. Every great project starts with a conversation.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-tiffany-blue rounded-full animate-pulse" />
                    <div
                      className="w-3 h-3 bg-hookers-green rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-3 h-3 bg-tiffany-blue rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
