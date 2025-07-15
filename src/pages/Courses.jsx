import React from "react";
import { FaPrayingHands, FaBookOpen, FaStar } from "react-icons/fa";
import BottomNav from "../components/shared/BottomNav";

const courses = [
  {
    icon: <FaPrayingHands className="text-4xl text-[#967232]" />,
    title: "Janaza (Funeral) Course",
    rating: 4,
    description:
      "Our Janaza Course teaches you about the important practices and prayers related to funerals in Islam.",
    link: "/janaza",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "Namaz Course",
    rating: 5,
    description:
      "Designed to help you learn and perfect your prayers. Namaz, or Salah, is one of the five pillars of Islam.",
    link: "/namaz",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "6 Kalma Course",
    rating: 5,
    description:
      "Focused and spiritual learning experience for anyone looking to memorize the 6 Kalmas of Islam.",
    link: "/kalma",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "Hadith Course",
    rating: 5,
    description:
      "The Hadith Course at Al-Hidayah Quran Acadеmy is pеrfеct for anyone who wants to lеarn morе about thе sayings and actions of thе Prophеt Muhammad (PBUH).",
    link: "/hadith",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "Hadith Course",
    rating: 5,
    description:
      "The Hadith Course at Al-Hidayah Quran Acadеmy is pеrfеct for anyone who wants to lеarn morе about thе sayings and actions of thе Prophеt Muhammad (PBUH).",
    link: "/hadith",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "Hadith Course",
    rating: 5,
    description:
      "The Hadith Course at Al-Hidayah Quran Acadеmy is pеrfеct for anyone who wants to lеarn morе about thе sayings and actions of thе Prophеt Muhammad (PBUH).",
    link: "/hadith",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "Hadith Course",
    rating: 5,
    description:
      "The Hadith Course at Al-Hidayah Quran Acadеmy is pеrfеct for anyone who wants to lеarn morе about thе sayings and actions of thе Prophеt Muhammad (PBUH).",
    link: "/hadith",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "Hadith Course",
    rating: 5,
    description:
      "The Hadith Course at Al-Hidayah Quran Acadеmy is pеrfеct for anyone who wants to lеarn morе about thе sayings and actions of thе Prophеt Muhammad (PBUH).",
    link: "/hadith",
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#967232]" />,
    title: "Hadith Course",
    rating: 5,
    description:
      "The Hadith Course at Al-Hidayah Quran Acadеmy is pеrfеct for anyone who wants to lеarn morе about thе sayings and actions of thе Prophеt Muhammad (PBUH).",
    link: "/hadith",
  },
];

const Courses = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20 pb-80 mt-10">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl shadow-lg hover:shadow-[0_0_15px_#96723299] p-6 transition-transform duration-500 transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-6">{course.icon}</div>
            <h3 className="text-lg font-semibold text-center mb-2">
              {course.title}
            </h3>

            {/* Star Ratings */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < course.rating ? "text-[#f6c100]" : "text-gray-500"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-300 text-center mb-4">
              {course.description}
            </p>

            <div className="text-center">
              <a
                href={course.link}
                className="inline-block mt-2 px-4 py-2 border border-[#967232] text-[#967232] rounded hover:bg-[#967232] hover:text-black transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
