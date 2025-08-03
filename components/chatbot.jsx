"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight, ArrowLeft } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("main");
  const [chatHistory, setChatHistory] = useState([]);

  const chatOptions = {
    main: {
      message:
        "Hi! I'm here to help you learn about Visqode. What would you like to know?",
      options: [
        { text: "Our Services", action: "services" },
        { text: "Pricing Information", action: "pricing" },
        { text: "Portfolio & Case Studies", action: "portfolio" },
        { text: "Get Started", action: "contact" },
      ],
    },
    services: {
      message:
        "We offer comprehensive digital solutions. Which service interests you?",
      options: [
        { text: "Brand Building", action: "brand" },
        { text: "Web Development", action: "web" },
        { text: "AI Solutions", action: "ai" },
        { text: "Back to Main Menu", action: "main" },
      ],
    },
    brand: {
      message:
        "Our brand building services include visual identity, strategy, and market positioning. We've helped 200+ brands establish their digital presence.",
      options: [
        { text: "View Brand Portfolio", action: "portfolio" },
        { text: "Get Brand Quote", action: "contact" },
        { text: "Other Services", action: "services" },
        { text: "Main Menu", action: "main" },
      ],
    },
    web: {
      message:
        "We create lightning-fast, scalable web applications using cutting-edge technologies. From simple websites to complex platforms.",
      options: [
        { text: "View Web Projects", action: "portfolio" },
        { text: "Get Development Quote", action: "contact" },
        { text: "Other Services", action: "services" },
        { text: "Main Menu", action: "main" },
      ],
    },
    ai: {
      message:
        "Our AI solutions include chatbots, automation, machine learning integration, and process optimization to give you a competitive edge.",
      options: [
        { text: "AI Case Studies", action: "portfolio" },
        { text: "Discuss AI Project", action: "contact" },
        { text: "Other Services", action: "services" },
        { text: "Main Menu", action: "main" },
      ],
    },
    pricing: {
      message:
        "Our pricing is project-based and depends on scope. We offer competitive rates with no hidden fees. Typical projects range from $5K to $50K+.",
      options: [
        { text: "Get Custom Quote", action: "contact" },
        { text: "View Service Packages", action: "services" },
        { text: "See Our Work", action: "portfolio" },
        { text: "Main Menu", action: "main" },
      ],
    },
    portfolio: {
      message:
        "We've completed 500+ projects across various industries. Our portfolio includes Fortune 500 companies and innovative startups.",
      options: [
        { text: "Schedule Portfolio Review", action: "contact" },
        { text: "Discuss Your Project", action: "contact" },
        { text: "Learn About Services", action: "services" },
        { text: "Main Menu", action: "main" },
      ],
    },
    contact: {
      message:
        "Ready to start your project? Contact us for a free consultation. We typically respond within 2 hours during business days.",
      options: [
        { text: "Send Message Now", action: "external", link: "/contact" },
        {
          text: "Call Us: +1 (555) 123-4567",
          action: "external",
          link: "tel:+15551234567",
        },
        {
          text: "Email: visqode@gmail.com",
          action: "external",
          link: "mailto:visqode@gmail.com",
        },
        { text: "Main Menu", action: "main" },
      ],
    },
  };

  const handleOptionClick = (action, link) => {
    if (action === "external" && link) {
      if (link.startsWith("/")) {
        window.location.href = link;
      } else {
        window.open(link, "_blank");
      }
      return;
    }

    setChatHistory((prev) => [
      ...prev,
      {
        type: "user",
        message: chatOptions[currentStep].options.find(
          (opt) => opt.action === action,
        )?.text,
      },
    ]);

    setCurrentStep(action);

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          message: chatOptions[action].message,
        },
      ]);
    }, 500);
  };

  const resetChat = () => {
    setCurrentStep("main");
    setChatHistory([]);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center shadow-2xl z-50 hover:shadow-glow transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8 text-night" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-night" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Visqode Assistant</h3>
                  <p className="text-xs text-gray-400">Online now</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Reset Chat"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-400" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {/* Welcome Message */}
              {chatHistory.length === 0 && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-night" />
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
                    <p className="text-white text-sm">
                      {chatOptions[currentStep].message}
                    </p>
                  </div>
                </div>
              )}

              {/* Chat History */}
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${msg.type === "user" ? "justify-end" : ""}`}
                >
                  {msg.type === "bot" && (
                    <div className="w-8 h-8 bg-gradient-to-r from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-night" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl p-4 max-w-[80%] ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-tiffany-blue to-hookers-green text-night rounded-tr-sm"
                        : "bg-white/10 text-white rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
              {/* This set of code is the cause for double line output i removed it to fix it ;  */}
              {/* Current Bot Message */}
              {/* {chatHistory.length > 0 && chatHistory[chatHistory.length - 1]?.type === "bot" && ( */}
              {/*   <div className="flex gap-3"> */}
              {/*     <div className="w-8 h-8 bg-gradient-to-r from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center flex-shrink-0"> */}
              {/*       <MessageCircle className="w-4 h-4 text-night" /> */}
              {/*     </div> */}
              {/*     <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4 max-w-[80%]"> */}
              {/*       <p className="text-white text-sm">{chatOptions[currentStep].message}</p> */}
              {/*     </div> */}
              {/*   </div> */}
              {/* )} */}
            </div>

            {/* Options */}
            <div className="p-6 border-t border-white/10 space-y-2">
              {chatOptions[currentStep].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleOptionClick(option.action, option.link)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-tiffany-blue/30 rounded-xl text-left text-white text-sm transition-all duration-300 flex items-center justify-between group"
                >
                  {option.text}
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-tiffany-blue transition-colors" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
