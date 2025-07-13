import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200; // adjust 200 to trigger earlier/later
      setShowNav(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Library", path: "/library", icon: <MdOutlineLibraryBooks /> },
    { name: "Contact", path: "/contact", icon: <RiContactsFill /> },
  ];

  if (!showNav) return null;

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-black text-white shadow-inner z-50 flex justify-around items-center h-16 transition-opacity duration-500 ${
        showNav ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex flex-col items-center text-sm transition duration-200 ${
            location.pathname === item.path ? "text-[#38bdf8]" : "text-gray-400"
          } hover:text-[#38bdf8]`}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
