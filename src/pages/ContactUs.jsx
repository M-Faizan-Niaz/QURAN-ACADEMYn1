import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiWhatsapp, SiFacebook, SiYoutube, SiInstagram } from "react-icons/si";

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-8 mt-15 mb-70">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#c49833] uppercase">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-[#FFD700]/30">
          <h2 className="text-2xl font-semibold text-[#c49833] mb-4">
            Communicate with us
          </h2>
          <p className="text-gray-300 mb-6">
            You may reach us by email, call, WhatsApp, or through our social
            channels.
          </p>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#c49833]" />
              isqacademy29@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#c49833]" />
              info@internationalquranacademy.com
            </li>
            <li className="flex items-center gap-3">
              <SiWhatsapp className="text-green-400" />
              +92 345 858 1717
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-400" />
              +1 904 947 1108
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#c49833] mt-1" />
              Multiple international addresses including Pakistan, USA, and UK.
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-[#c49833] mb-2 font-semibold">
              Connect With Us:
            </h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-500 transition">
                <SiFacebook />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <SiYoutube />
              </a>
              <a href="#" className="hover:text-pink-600 transition">
                <SiInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white text-black rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#c49833] mb-6">
            Ask a Question
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#FFD700]"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#FFD700]"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#FFD700]"
            />
            <input
              type="text"
              placeholder="Your Country *"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#FFD700]"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#FFD700]"
            ></textarea>

            {/* Optional: CAPTCHA or checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" required />
              <label className="text-sm text-gray-700">I'm not a robot</label>
            </div>

            <button
              type="submit"
              className="bg-[#c49833]  text-black font-semibold py-2 px-6 rounded-full hover:bg-[#e6c200] transition-all w-full cursor-pointer tracking-wider"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
