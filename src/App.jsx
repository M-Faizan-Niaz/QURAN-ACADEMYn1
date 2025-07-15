import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Fee from "./pages/Fee";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Library from "./pages/Library";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import FreeTrial from "./pages/FreeTrial";

// Components
import Header from "./components/shared/Header";
import BottomNav from "./components/shared/BottomNav";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/library" element={<Library />} />
        <Route path="/fee" element={<Fee />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <BottomNav />
    </Router>
  );
};

export default App;
