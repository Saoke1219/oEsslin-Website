import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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

  // Force redirect to homepage if no hash is present
  if (!window.location.hash || window.location.hash === "#") {
    window.location.replace("#/");
  }

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        
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

            {/* Redirect unknown route → homepage */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer />
        <ScrollUp />
      </div>
    </Router>
  );
}
