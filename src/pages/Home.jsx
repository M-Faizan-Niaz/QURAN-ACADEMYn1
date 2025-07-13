import React from "react";
import BottomNav from "./../components/shared/BottomNav";
import { FaBookOpen, FaCalendarCheck } from "react-icons/fa";
import img1 from "../assets/images/img1.png";
const Home = () => {
  return (
    <section className="bg-white min-h-screen overflow-y-auto custom-overflow-hidden pb-40">
      <div className="flex flex-grow gap-3">
        {/* Left Div */}
        <div className="flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center m-30 ">
            <h2 className="text-[#122620] text-2xl font-bold mb-4 px-2">
              Quran Academy | Learn Quran online with expert tutors
            </h2>
            <p className="text-[#122620] text-lg text-center max-w-md mb-6 px-2">
              Join the best Online Quran Academy to learn Quran online with
              expert tutors. Get Islamic education from the comfort of your
              home.
            </p>
            <div className="flex gap-4 mt-6 mb-10">
              {/* Book Free Trial Button */}
              <button className="flex items-center gap-2 border border-black text-black hover:bg-black hover:text-white px-6 py-2 rounded-md font-semibold transition duration-300 cursor-pointer">
                <FaCalendarCheck />
                Book Free Trial
              </button>

              {/* Browse Courses Button */}
              <button className="flex items-center gap-2 border border-black text-black hover:bg-black hover:text-white px-6 py-2 rounded-md font-semibold transition duration-300 cursor-pointer">
                <FaBookOpen />
                Browse Courses
              </button>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="w-full max-w-md group pt-20 pr-30">
          <img
            src={img1}
            alt="Hero"
            className="w-full h-[300px] md:h-[320px]  rounded-xl object-cover shadow-md transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-lg"
          />
        </div>
      </div>


      <div>
        hello
      </div>

      <BottomNav />
    </section>
  );
};

export default Home;
