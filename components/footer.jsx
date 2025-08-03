"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)

    try {
      await emailjs.send("service_d300jps", "template_r02gudy", {
        name: "Newsletter Subscriber",
        time: new Date().toLocaleString(),
        message: `Newsletter subscription from: ${email}`,
      })

      setIsSubmitted(true)
      setEmail("")

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error sending newsletter signup:", error)
      alert("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-night text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tiffany-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-hookers-green/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tiffany-blue to-white bg-clip-text text-transparent">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get the latest insights on digital innovation, design trends, and exclusive updates delivered straight to
              your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-tiffany-blue/50 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(180, 232, 219, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-night/30 border-t-night rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-tiffany-blue text-sm mt-4"
              >
                Thank you for subscribing! You'll receive our latest updates soon.
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-xl flex items-center justify-center">
                <span className="text-night font-bold text-xl">V</span>
              </div>
              <h3 className="text-3xl font-bold text-white">Visqode</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Transforming digital experiences through innovative design and cutting-edge technology. We create
              extraordinary solutions that elevate your brand to new heights.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-tiffany-blue transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>visqode@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-tiffany-blue transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-tiffany-blue transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span>New York, NY</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "E-commerce",
                "Digital Marketing",
                "Brand Strategy",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-tiffany-blue transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-tiffany-blue transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Visqode. All rights reserved. Crafted with passion and precision.
            </p>

            <div className="flex items-center gap-8">
              <a href="/privacy" className="text-gray-400 hover:text-tiffany-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-tiffany-blue transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
