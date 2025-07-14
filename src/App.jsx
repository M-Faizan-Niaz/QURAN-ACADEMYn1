import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import Header from "./components/shared/Header";
import { Courses } from "./pages";
import { FreeTrial} from "./pages"
import BottomNav from "./components/shared/BottomNav";




const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/free-trial" element={<FreeTrial />} />
        </Routes>
        
        <BottomNav />
      </Router>
    </>
  );
};

export default App;


