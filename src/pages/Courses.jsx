import React from "react";
import { FaPrayingHands, FaBookOpen, FaStar } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { RiNumber6 } from "react-icons/ri";
import { GiScrollUnfurled } from "react-icons/gi";
import { TbBook2 } from "react-icons/tb";
import { GiOpenBook } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
import { RiBook2Line } from "react-icons/ri";
import { GiLaurelCrown } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";




import BottomNav from "../components/shared/BottomNav";

const courses = [
  {
    icon: <FaPrayingHands className="text-4xl text-[#967232]" />,
    title: "Namaz Course",
    rating: 5,
    description:
      "Designed to help you learn and perfect your prayers. Namaz, or Salah, is one of the five pillars of Islam.",
    link: "/namaz-course",
  },
  {
    icon: <GiScrollUnfurled className="text-4xl text-[#967232]" />,
    title: "Hadith Course",
    rating: 5,
    description:
      "The Hadith Course at Al-Hidayah Quran Acadеmy is pеrfеct for anyone who wants to lеarn morе about thе sayings and actions of thе Prophеt Muhammad (PBUH).",
    link: "/hadith-course",
  },
  {
    icon: <BsSoundwave className="text-4xl text-[#967232]" />,
    title: "Online Tajweed Course",
    rating: 5,
    description:
      "Thе Tajweed Course at thе Al-Hidayah Quran Acadеmy is carеfully dеsignеd to tеach studеnts how to rеcitе thе Quran with accuracy and bеauty",
    link: "/tajweed-course",
  },
  {
    icon: <GiLaurelCrown className="text-4xl text-[#967232]" />,
    title: "Quraan Ijazah Course",
    rating: 5,
    description:
      "Wеlcomе to our Ijazah Quran Course! Thе Ijazah Quran Coursе is dеsignеd to еquip you with mastеry in Quranic rеcitation and mеmorization. It’s for anyone who wants to rеcitе thе Quran corrеctly, mеmorizе its vеrsеs, and undеrstand its mеanings",
    link: "/ijazah-course",
  },
  {
    icon: <TbBook2 className="text-4xl text-[#967232]" />,
    title: "Noorani Qaida Course",
    rating: 5,
    description:
      "Learning the Quran and reciting it correctly is essential for every Muslim. At the Al-Hidayah Quran Academy, we are committed to helping you achieve accurate recitation of the Holy Quran through our comprehensive Noorani Qaida Course.",
    link: "/noorani-qaida-course",
  },
  {
    icon: <GiNotebook className="text-4xl text-[#967232]" />,
    title: "Rehmani Qaida Course",
    rating: 5,
    description:
      "Welcome to our Quran Al-Hidayah academy. Our academy has a good reputation for delivering high-quality education and courses for its Exposure to quran words very early. Exposure to early principles of tajweed. It sharpens pronunciation. This course aids and improves writing skills. It helps to perfect recitation.",
    link: "/rehmani-qaida-course",
  },
  {
    icon: <GiFeather className="text-4xl text-[#967232]" />,
    title: "Madni Qaida Course",
    rating: 5,
    description:
      "Learning the Quran and reciting it correctly is essential for every Muslim. At the Al-Hidayah Quran Academy, we are committed to helping you achieve accurate recitation of the Holy Quran through our comprehensive Madani Qaida Course.",
    link: "/madni-qaida-course",
  },
  {
    icon: <FaRegBookmark className="text-4xl text-[#967232]" />,
    title: "Quran Memorization Course",
    rating: 5,
    description:
      "Change your life by memorizing the Quran at Al-Hidayah Quran Academy. Our online Quran memorization program has personalized one on one teaching by experienced Hafiz teachers.",
    link: "/quran-memorization-course",
  },
  {
    icon: <RiNumber6 className="text-4xl text-[#967232]" />,
    title: "6 Kalma Course",
    rating: 5,
    description:
      "Focused and spiritual learning experience for anyone looking to memorize the 6 Kalmas of Islam.",
    link: "/6-kalma-course",
  },
  {
    icon: <RiBook2Line className="text-4xl text-[#967232]" />,
    title: "Online Tafseer Course",
    rating: 5,
    description:
      "Tafseer is the science that interprets the Quran and completes its divine message. The term “Tafseer” came from the Arabic root “fassara,” which means to explain. There has to be a Tafseer explanation for the Quran, other than its literal translation.",
    link: "/tafseer-course",
  },
  {
    icon: <LuBookOpenCheck className="text-4xl text-[#967232]" />,
    title: "Nazra Quran Course",
    rating: 5,
    description:
      "It is a wish of Muslims to recite the Holy Quran with perfection and understanding. So, the Al-Hidayah Quran Academy is here to fulfil this wish. We offer a comprehensive Nazra Quran Course",
    link: "/nazrah-quran-course",
  },
];

const Courses = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20 pb-80 mt-10">
      <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>

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
