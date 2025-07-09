"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GeminiService from "@/lib/gemini";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to VisQode. I'm your AI assistant, here to help with any questions about our digital services.",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      id: 2,
      text: "I can help you with pricing, services, project timelines, or connect you with our team. What would you like to know?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [quickReplies, setQuickReplies] = useState([
    "💰 What are your pricing options?",
    "🚀 How do I get started?",
    "📞 Can we schedule a call?",
    "💼 Show me your portfolio",
  ]);

  const messagesEndRef = useRef(null);
  const geminiService = useRef(new GeminiService());

  // auto-scroll down
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // toggle open/close
  const toggleChat = () => setIsOpen((v) => !v);

  // add a message to the list
  const addMessage = (text, sender = "user") => {
    const m = {
      id: Date.now() + Math.random(),
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, m]);
    return m;
  };

  // send user text → AI response
  const handleSendMessage = async (raw = inputValue) => {
    if (!raw.trim()) return;
    addMessage(raw, "user");
    setInputValue("");
    setIsTyping(true);

    try {
      const { success, message } = await geminiService.current.generateResponse(
        raw,
        messages,
      );
      // small delay for “typing” feel
      setTimeout(
        () => {
          setIsTyping(false);
          if (success) {
            addMessage(message, "bot");
            setIsConnected(true);
            const replies = geminiService.current.getQuickReplies(raw) || [];
            setQuickReplies(replies.map((r) => `💡 ${r}`));
          } else {
            addMessage(message, "bot");
            setIsConnected(false);
          }
        },
        800 + Math.random() * 400,
      );
    } catch (err) {
      setIsTyping(false);
      setIsConnected(false);
      addMessage(
        "I'm experiencing technical issues. Please try again shortly or email hello@visqode.com.",
        "bot",
      );
    }
  };

  // quick‑reply click
  const handleQuickReply = (qr) => {
    const clean = qr.replace(/[^?\w\s]/g, "").trim();
    setQuickReplies([]);
    handleSendMessage(clean);
  };

  // connection bubble
  const connectionStatus = isConnected
    ? { color: "bg-green-500", text: "AI Assistant Online" }
    : { color: "bg-yellow-500", text: "Reconnecting..." };

  return (
    <>
      {/* toggle button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#a7ff59] rounded-full shadow-lg flex items-center justify-center text-black hover:bg-[#8fee3f] transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className={`bx ${isOpen ? "bx-x" : "bx-bot"} text-2xl`} />
      </motion.button>

      {/* chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* header */}
            <div className="bg-gradient-to-r from-[#a7ff59] to-[#8fee3f] p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#a7ff59] font-bold">V</span>
                </div>
                <div>
                  <h4 className="font-bold text-black">VisQode AI Assistant</h4>
                  <div className="flex items-center">
                    <span
                      className={`w-2 h-2 ${connectionStatus.color} rounded-full mr-2`}
                    />
                    <span className="text-black/70 text-sm">
                      {connectionStatus.text}
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={toggleChat} className="text-black/70">
                <i className="bx bx-x text-2xl" />
              </button>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 max-w-[75%] rounded-2xl ${
                      m.sender === "user"
                        ? "bg-[#a7ff59] text-black"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{m.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{m.timestamp}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start p-3 text-sm text-gray-500">
                  Typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* quick replies */}
            {quickReplies.length > 0 && (
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="grid gap-2">
                  {quickReplies.slice(0, 3).map((qr, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReply(qr)}
                      className="p-3 bg-white border border-gray-200 rounded-xl text-sm hover:bg-[#a7ff59]/10 transition"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !isTyping && handleSendMessage()
                  }
                  placeholder="Ask me anything about VisQode..."
                  disabled={isTyping}
                  className="flex-1 p-3 border border-gray-200 rounded-xl text-sm focus:outline-none"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-[#a7ff59] rounded-xl flex items-center justify-center text-black hover:bg-[#8fee3f] transition disabled:opacity-50"
                >
                  <i className="bx bx-send" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Powered by AI • For urgent matters: hello@visqode.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
