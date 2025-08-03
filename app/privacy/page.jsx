"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Lock, Eye, Database, Globe, Mail, Phone, MapPin, Calendar, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function PrivacyPage() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Hero animations
    gsap
      .timeline()
      .fromTo(
        ".privacy-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      )
      .fromTo(
        ".privacy-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        ".privacy-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      )

    // Content animation
    gsap.fromTo(
      ".privacy-section",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
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

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div className="privacy-badge inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tiffany-blue/10 border border-tiffany-blue/20 mb-8">
            <Shield className="w-4 h-4 text-tiffany-blue" />
            <span className="text-sm font-medium text-tiffany-blue">Your Privacy Matters</span>
          </motion.div>

          <h1 className="privacy-title text-6xl md:text-7xl font-bold mb-8 leading-none">
            <span className="block text-white">Privacy</span>
            <span className="block bg-gradient-to-r from-tiffany-blue to-white bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="privacy-subtitle text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            At Visqode, we are committed to protecting your privacy and ensuring the security of your personal
            information. This comprehensive policy explains how we collect, use, and safeguard your data.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: January 15, 2024</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-tiffany-blue" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Quick Overview */}
          <div className="privacy-section mb-16 p-8 rounded-3xl bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 border border-tiffany-blue/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-tiffany-blue" />
              Privacy at a Glance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">What We Collect</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Contact information you provide</li>
                  <li>• Website usage analytics</li>
                  <li>• Communication preferences</li>
                  <li>• Project-related information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">How We Protect You</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• End-to-end encryption</li>
                  <li>• Secure data storage</li>
                  <li>• Limited access controls</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-7 h-7 text-tiffany-blue" />
                Information We Collect
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-4">1. Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• Contact us through our website forms</li>
                    <li>• Subscribe to our newsletter</li>
                    <li>• Request a consultation or quote</li>
                    <li>• Engage with our services</li>
                    <li>• Communicate with us via email or phone</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    This may include your name, email address, phone number, company information, project details, and
                    any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-4">
                    2. Automatically Collected Information
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    When you visit our website, we automatically collect certain information about your device and usage
                    patterns:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• IP address and location data</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system information</li>
                    <li>• Pages visited and time spent</li>
                    <li>• Referral sources</li>
                    <li>• Device characteristics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-4">3. Cookies and Tracking Technologies</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>
                      • <strong>Essential Cookies:</strong> Required for website functionality
                    </li>
                    <li>
                      • <strong>Analytics Cookies:</strong> Help us understand website usage
                    </li>
                    <li>
                      • <strong>Preference Cookies:</strong> Remember your settings and preferences
                    </li>
                    <li>
                      • <strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-7 h-7 text-tiffany-blue" />
                How We Use Your Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-3">Service Delivery</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use your information to provide, maintain, and improve our services, including responding to
                    inquiries, delivering projects, and providing customer support.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-3">Communication</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may use your contact information to send you important updates about our services, respond to
                    your inquiries, and provide relevant information about our offerings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-3">Website Improvement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We analyze usage data to understand how visitors interact with our website, identify areas for
                    improvement, and optimize user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-3">Legal Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may process your information to comply with legal obligations, resolve disputes, and enforce our
                    agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-7 h-7 text-tiffany-blue" />
                Data Protection & Security
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-3">Security Measures</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Encrypted data storage with AES-256</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-factor authentication for team access</li>
                    <li>• Secure cloud infrastructure with AWS/Google Cloud</li>
                    <li>• Regular backup and disaster recovery procedures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-3">Access Controls</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Access to your personal information is strictly limited to authorized personnel who need it to
                    perform their job functions. All team members sign confidentiality agreements and receive regular
                    privacy training.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-tiffany-blue mb-3">Data Retention</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined
                    in this policy, comply with legal obligations, or resolve disputes. Typically, this is 7 years for
                    business records and 3 years for marketing communications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Rights</h2>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Under applicable privacy laws (including GDPR, CCPA, and others), you have the following rights
                  regarding your personal information:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-tiffany-blue mb-2">Right to Access</h4>
                      <p className="text-gray-300 text-sm">
                        Request a copy of the personal information we hold about you.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tiffany-blue mb-2">Right to Rectification</h4>
                      <p className="text-gray-300 text-sm">
                        Request correction of inaccurate or incomplete information.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tiffany-blue mb-2">Right to Erasure</h4>
                      <p className="text-gray-300 text-sm">
                        Request deletion of your personal information under certain circumstances.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-tiffany-blue mb-2">Right to Portability</h4>
                      <p className="text-gray-300 text-sm">
                        Request transfer of your data to another service provider.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tiffany-blue mb-2">Right to Object</h4>
                      <p className="text-gray-300 text-sm">
                        Object to processing of your personal information for marketing purposes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tiffany-blue mb-2">Right to Restrict</h4>
                      <p className="text-gray-300 text-sm">
                        Request limitation of processing under certain circumstances.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-tiffany-blue/10 border border-tiffany-blue/20">
                  <p className="text-gray-300 text-sm">
                    <strong>How to Exercise Your Rights:</strong> To exercise any of these rights, please contact us
                    using the information provided below. We will respond to your request within 30 days and may require
                    verification of your identity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Third-Party Services</h2>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We may use trusted third-party services to help us operate our website and provide our services. These
                  partners have access to your personal information only to perform specific tasks on our behalf and are
                  obligated to protect your information.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-tiffany-blue mb-2">Analytics Services</h4>
                    <p className="text-gray-300 text-sm">
                      Google Analytics, Hotjar - for website usage analysis and improvement
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tiffany-blue mb-2">Email Services</h4>
                    <p className="text-gray-300 text-sm">
                      EmailJS, Mailchimp - for email communications and newsletter management
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tiffany-blue mb-2">Cloud Services</h4>
                    <p className="text-gray-300 text-sm">AWS, Google Cloud - for secure data storage and processing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tiffany-blue mb-2">Communication Tools</h4>
                    <p className="text-gray-300 text-sm">
                      Slack, Zoom - for internal communications and client meetings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a global company, we may transfer your personal information to countries outside your residence. We
                ensure that such transfers comply with applicable privacy laws through:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li>• Adequacy decisions by relevant authorities</li>
                <li>• Standard contractual clauses approved by the European Commission</li>
                <li>• Binding corporate rules for intra-group transfers</li>
                <li>• Your explicit consent where required</li>
              </ul>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal
                information from children under 16. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately, and we will take steps to remove such
                information.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="privacy-section mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6 mb-4">
                <li>• Posting the updated policy on our website</li>
                <li>• Sending an email notification to registered users</li>
                <li>• Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="privacy-section">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 border border-tiffany-blue/20">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-tiffany-blue" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">privacy@visqode.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-tiffany-blue" />
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-tiffany-blue" />
                    <div>
                      <div className="font-semibold text-white">Address</div>
                      <div className="text-gray-300">New York, NY, USA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-tiffany-blue" />
                    <div>
                      <div className="font-semibold text-white">Data Protection Officer</div>
                      <div className="text-gray-300">dpo@visqode.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5">
                <p className="text-gray-300 text-sm">
                  <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 48 hours
                  during business days. For urgent matters, please call our main number and mention it's a privacy
                  concern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
