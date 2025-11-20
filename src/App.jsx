import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Areas_Of_Focus from "./pages/Areas_Of_Focus";
import Contact from "./pages/Contact";
import Collaborate from "./pages/Collaborate";
import FieldCraft from "./pages/FieldCraft";
import SifloopHub from "./pages/SifloopHub";
import ScrollUp from "./components/ScrollUp";

export default function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About_Us" element={<About_Us />} />
            <Route path="/Areas_Of_Focus" element={<Areas_Of_Focus />} />
            <Route path="/Collaborate" element={<Collaborate />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/FieldCraft" element={<FieldCraft />} />
            <Route path="/SifloopHub" element={<SifloopHub />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll Up */}
        <ScrollUp />
      </div>
    </Router>
  );
}
