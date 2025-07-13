import React from "react";
import { FaHome, FaChalkboardTeacher, FaRegNewspaper } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { TbCash } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="bg-[#000000] flex justify-start items-center gap-26 mt-4 px-8 py-1 shadow-lg ">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Al-Hidaya Logo"
          className="w-17 h-17 object-contain"
        />
        <h1 className="text-xl font-bold text-[#F6F6F6] hover:text-[#38bdf8] transition duration-300 ease-in-out hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)] hover:scale-105 cursor-pointer">
          AL-HIDAYA QURAN ACADEMY
        </h1>
      </div>
      {/* Navigation Links */}
      <nav className="flex items-center justify-between flex-wrap gap-8 cursor-pointer ">
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
            className="relative group flex items-center gap-2 text-[#FEFAE0] font-semibold transition-all duration-300"
          >
            <div className="transition duration-300 group-hover:text-[#9929EA]">
              {item.icon}
            </div>
            <span className="group-hover:text-[#9929EA] transition-colors duration-300">
              {item.label}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#9929EA] group-hover:w-full transition-all duration-300"></span>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
