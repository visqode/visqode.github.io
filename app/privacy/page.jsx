import { ChartBar, LayoutDashboard, ScrollText } from "lucide-react";
import ChatWidget from "../../components/ChatWidget";
import Navigation from "../../components/Navigation";

export default function PrivacyPage() {
  return (
    <section>
      <div className="bg-black">
        <Navigation />
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 ">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          📄 <span>Privacy Policy</span>
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: <strong>July 11, 2025</strong>
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🔍 <span>Information We Collect</span>
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number (only when you voluntarily submit them through forms).
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, pages
              visited, time spent on pages, and other analytics data.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar tracking
              technologies to enhance user experience and analyze traffic.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            💡 <span>How We Use Your Information</span>
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>
              Send occasional updates or promotional materials (only if you opt
              in).
            </li>
            <li>
              Understand usage patterns to optimize our website’s performance.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🔒 <span>Data Protection & Security</span>
          </h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, or loss. However, please be aware
            that no digital transmission or storage system is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🤝 <span>Third-Party Services</span>
          </h2>
          <p>
            We may use trusted third-party tools (like analytics or hosting
            services) that may collect limited data to help us operate the
            website efficiently. These services are required to maintain data
            confidentiality and may not use your information for their own
            purposes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🍪 <span>Cookies & Tracking Technologies</span>
          </h2>
          <p>
            You may choose to disable cookies through your browser settings.
            However, some features of the website may not function properly
            without cookies enabled.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            📤 <span>Your Rights</span>
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access or correct your personal information.</li>
            <li>Request the deletion of your data.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us directly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            📞 <span>Contact Us</span>
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            feel free to reach out:
          </p>
          <ul className="mt-2">
            <li>
              <strong>VisQode</strong>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:your@email.com"
                className="text-blue-500 hover:underline"
              >
                [your@email.com]
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://visqode.com"
                className="text-blue-500 hover:underline"
              >
                https://visqode.com
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🔄 <span>Changes to This Policy</span>
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page, and the “Last Updated” date will be
            revised accordingly.
          </p>
        </section>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          ✅ By using our website, you consent to the terms of this Privacy
          Policy.
        </div>
      </div>{" "}
      <ChatWidget />
    </section>
  );
}
