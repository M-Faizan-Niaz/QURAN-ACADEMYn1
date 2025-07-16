import React from "react";
import { FaTimes } from "react-icons/fa";
import bgImg from "../../assets/images/bg.png";


const FreeTrialModal = () => {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-black/90 "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full max-w-lg mx-4 p-6  rounded-2xl backdrop-blur-md bg-white/10 border border-black/30 shadow-2xl text-white animate-fadeIn mb-90 mt-20 ">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-[#756300] mb-2">
            Book Free Trial Class
          </h2>
          <p className="text-sm text-center text-gray-200 mb-6">
            Fill out the form and we’ll contact you shortly to schedule your
            session.
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Form submitted! You can replace this with WhatsApp or Email logic."
              );
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-[#FFD700]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-[#FFD700]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
            <input
              type="text"
              placeholder="WhatsApp Number"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-[#FFD700]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
            <select
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-[#FFD700]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            >
              <option value="">Choose Course</option>
              <option>Quran Reading Basics</option>
              <option>Quran with Tajweed</option>
              <option>Hifz (Memorization)</option>
            </select>
            <select
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-[#FFD700]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            >
              <option value="">Select Time Zone</option>
              <option>(GMT+5) Pakistan</option>
              <option>(GMT+1) Europe</option>
              <option>(GMT-5) USA</option>
            </select>
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-[#FFD700]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
            <textarea
              rows="3"
              placeholder="Any message for us?"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-[#FFD700]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-[#996515] text-white font-bold rounded-md hover:bg-black hover:text-[#996515] tracking-wider cursor-pointer transition duration-300 shadow-md"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FreeTrialModal;
