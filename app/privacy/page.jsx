import { ChartBar, LayoutDashboard, ScrollText } from "lucide-react";
import ChatWidget from "../../components/ChatWidget";
import Navigation from "../../components/Navigation";

export default function PrivacyPage() {
  return (
    <section>
      <div className="bg-black">
        <Navigation />
      </div>
      {/* page content  */}

      <div className="m-3  bg-black text-white p-5 rounded-2xl ">
        {/* Privacy Heading Page title   */}
        <div className="flex justify-between flex-col racing">
          <div className="flex justify-between items-center">
            Last Updated:
            <span className="bg-[#a7ff59] text-black font-bold p-2 rounded-xl openSans">
              July 11, 2025
            </span>
          </div>
          {/* Heading text Fine tune */}
          <div className=" bg-white text-black mt-4 p-2 rounded-xl openSans font-bold flex justify-center  flex-col">
            Welcome to VisQode. Your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you interact with our website or services.
            {/* sub heading */}
            <span>🔍 Information We Collect</span>
          </div>
        </div>
      </div>
      <ChatWidget />
    </section>
  );
}
