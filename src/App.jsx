import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Our_Expertise from "./pages/Our_Expertise";
import Contact from "./pages/Contact";
import Collaborate from "./pages/Collaborate";
import FieldCraft from "./pages/FieldCraft";
import SifloopHub from "./pages/SifloopHub";
import ScrollUp from "./components/ScrollUp";

export default function App() {
  return (
    <Router basename="/oEsslin-Website">
      <div className="relative flex flex-col min-h-screen">

        {/* Navbar stays outside Routes */}
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About_Us" element={<About_Us />} />
            <Route path="/Our_Expertise" element={<Our_Expertise />} />
            <Route path="/Collaborate" element={<Collaborate />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/FieldCraft" element={<FieldCraft />} />
            <Route path="/SifloopHub" element={<SifloopHub />} />

            {/* 👇 Wildcard route — redirects ANY unknown path to homepage */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll Up Button */}
        <ScrollUp />
      </div>
    </Router>
  );
}