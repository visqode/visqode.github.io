import { GoogleGenerativeAI } from "@google/generative-ai";
import EmailService from "./emailjs";

const genAI = new GoogleGenerativeAI("AIzaSyACh4c7UEmIZWEGsNj16mVYvIWbkD-nR3g");

const VISQODE_CONTEXT = `
You are VisQode's AI assistant, representing a premium digital agency. Respond in a clear, helpful, concise, professional tone.

Never use filler phrases like "I'm back online", "As an AI", "Feel free to ask", etc.
NEVER repeat contact information unless asked.
Do not include greetings or goodbyes.
Do not say "I'm here to help" unless explicitly asked.

Focus only on answering based on VisQode's services and needs. Be results-driven, premium-quality in tone, confident and informative.
If you don't know something, politely suggest contacting the team.

About VisQode:
- Web Development (React, Next.js)
- UI/UX, Branding, E-commerce, Apps
- 5+ years experience, 100% satisfaction
- Pricing starts at $500 for logo, $3,500+ for websites
- Email: visqode@gmail.com | Urgent: ibwmahin@gmail.com
`;

class GeminiService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: "chat-bison-001" });
    this.emailService = new EmailService();
  }

  async generateResponse(userMessage, conversationHistory = []) {
    try {
      await this.checkForUrgentMatters(userMessage);

      const context = conversationHistory
        .slice(-6)
        .map((m) => `${m.sender === "user" ? "User" : "VisQode"}: ${m.text}`)
        .join("\n");

      const prompt = `
${VISQODE_CONTEXT}

Recent conversation:
${context}

User: ${userMessage}

Assistant (3–5 sentences, no greetings/disclaimers):`;

      const result = await this.model.generateMessage({
        prompt: { text: prompt },
      });
      const raw = result.candidates[0].output;
      const clean = this.cleanOutput(raw);

      return { success: true, message: clean };
    } catch (err) {
      console.error("Gemini API Error:", err);
      return {
        success: false,
        message: this.getFallbackResponse(userMessage),
      };
    }
  }

  cleanOutput(text) {
    return text
      .replace(/I'm back online.*$/gi, "")
      .replace(/Feel free to continue.*$/gi, "")
      .replace(/As an AI[^.]*\./gi, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  async checkForUrgentMatters(msg) {
    const keys = [
      "urgent",
      "emergency",
      "asap",
      "help",
      "error",
      "bug",
      "down",
    ];
    if (keys.some((k) => msg.toLowerCase().includes(k))) {
      await this.emailService.sendUrgentNotification(
        "Urgent Inquiry",
        `User: "${msg}" at ${new Date().toLocaleString()}`,
        "VisQode AI",
      );
    }
  }

  getFallbackResponse(msg) {
    const l = msg.toLowerCase();
    if (/(price|cost)/.test(l))
      return "Pricing starts at $500 for branding, $3,500+ for sites. Contact us for a detailed quote.";
    if (/service/.test(l))
      return "We offer web dev, branding, e-commerce, mobile apps—what are you looking for?";
    if (/timeline|time/.test(l))
      return "Typical timelines: logo (1–2 wks), sites (4–8 wks), apps (8–16 wks).";
    return "Please share more about your project goals, and we'll guide you.";
  }

  getQuickReplies(msg) {
    const l = msg.toLowerCase();
    if (/urgent/.test(l)) return ["Call now", "Email urgent contact"];
    if (/price|cost/.test(l)) return ["Get a quote", "View pricing tiers"];
    if (/service/.test(l))
      return ["Web development", "Brand design", "Mobile apps"];
    return [];
  }
}

export default GeminiService;
