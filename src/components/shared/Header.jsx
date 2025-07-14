import React from "react";
import { FaHome, FaChalkboardTeacher, FaRegNewspaper } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { TbCash } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { FiGift } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-black w-full mt-6 px-4 md:px-8 py-3 shadow-lg">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Al-Hidaya Logo"
            className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F6F6F6] hover:text-[#96732] transition duration-300 hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)] hover:scale-105 cursor-pointer">
            AL-HIDAYA QURAN ACADEMY
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: <FaHome />, label: "Home" },
            { icon: <FaChalkboardTeacher />, label: "Courses" },
            { icon: <MdLibraryBooks />, label: "Library" },
            { icon: <TbCash />, label: "Fee" },
            { icon: <IoIosContact />, label: "Contact" },
            { icon: <FiGift />, label: "Free Trial" },
            { icon: <FaRegNewspaper />, label: "Blog" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group flex items-center gap-2 text-[#FEFAE0] font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer"
            >
              <div className="transition duration-300 group-hover:text-[#c49833]">
                {item.icon}
              </div>
              <span className="group-hover:text-[#c49833] transition-colors duration-300">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c49833] group-hover:w-full transition-all duration-300"></span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
