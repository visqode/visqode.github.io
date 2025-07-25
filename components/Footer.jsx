"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const socialIcons = [
    { name: "facebook", icon: "ri-facebook-fill" },
    { name: "twitter", icon: "ri-twitter-fill" },
    { name: "linkedin", icon: "ri-linkedin-fill" },
    { name: "instagram", icon: "ri-instagram-line" },
    { name: "youtube", icon: "ri-youtube-fill" },
  ];

  return (
    <div className="flex items-center m-2 md:m-5 justify-center">
      <motion.div
        className="bg-black rounded-2xl md:rounded-3xl p-6 md:p-10 w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#E5E5E5] font-racing mb-4">
              READY TO WORK WITH US?
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-medium text-[#B0B0B0] font-openSans">
              Partner with our design agency for your business with amazing
              results.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex-shrink-0"
          >
            <div className="bg-[#39FF14] rounded-[15px] w-24 h-24 md:w-32 md:h-[52px] flex flex-col items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(57,255,20,0.5)] font-racing text-center text-sm md:text-[15px]">
              <span>GET STARTED</span>
              <i className="ri-arrow-right-line mt-1 text-lg md:text-xl" />
            </div>
          </motion.div>
        </div>

        <hr className="border-t border-gray-700 my-8 md:my-10" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-[22px] font-bold text-[#E5E5E5] mb-3 font-racing">
              VisQode
            </h2>
            <p className="text-[17px] font-semibold text-[#B0B0B0] leading-relaxed mb-4 font-openSans">
              We know how important customer experience is for a business and
              therefore, we strive.
            </p>
            <div className="flex justify-center sm:justify-start space-x-2">
              {socialIcons.map(({ name, icon }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.2 }}
                  className="bg-[#333333] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
                  aria-label={name}
                >
                  <i className={`${icon} text-white text-base`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Data Science */}
          <div className="text-center sm:text-left">
            <h2 className="text-[22px] font-bold text-[#E5E5E5] mb-3 font-racing">
              Data Science
            </h2>
            <ul className="text-[16px] text-[#B0B0B0] font-medium space-y-2 font-openSans">
              <li>Business Use-Case</li>
              <li>Data Roles</li>
              <li>Blog</li>
              <li>Machine Learning</li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline focus:outline-none"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center sm:text-left">
            <h2 className="text-[22px] font-bold text-[#E5E5E5] mb-3 font-racing">
              About
            </h2>
            <ul className="text-[16px] text-[#B0B0B0] font-medium space-y-2 font-openSans">
              <li>Contact Us</li>
              <li>Support Us</li>
              <li>Community</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center sm:text-left">
            <h2 className="text-[22px] font-bold text-[#E5E5E5] mb-3 font-racing">
              Programs
            </h2>
            <ul className="text-[16px] text-[#B0B0B0] font-medium space-y-2 font-openSans">
              <li>Learning Modules</li>
              <li>Partnership</li>
              <li>Events</li>
              <li>Data Analyst</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-10 text-[#B0B0B0] text-sm gap-3 font-semibold font-openSans">
          <span>VisQode, INC.</span>
          <span>COPYRIGHT © {new Date().getFullYear()} VisQode</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
