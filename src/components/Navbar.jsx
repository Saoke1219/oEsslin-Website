import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow px-4">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={scrollToTop}>
            <img
              src={logo}
              alt="Logo"
              className="w-auto h-20 cursor-pointer object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center absolute right-0 pr-6">
          

          <Dropdown label="WHO WE ARE" items={[{ label: "About Us", to: "/About_Us" }]} />
          <Dropdown label="OUR WORK" items={[{ label: "Areas Of Focus", to: "/Areas_Of_Focus" }]} />

          <Link to="/Collaborate" className="hover:text-gray-600">
            COLLABORATE
          </Link>
          <Link to="/Contact" className="hover:text-gray-600">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
              setIsOpen(false);
            }}
            className="block px-3 py-2 hover:bg-gray-200 rounded w-full text-center"
          >
            Home
          </Link>
          <Link to="/About_Us" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-gray-200 rounded w-full text-center">
            Who We Are
          </Link>
          <Link to="/Areas_Of_Focus" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-gray-200 rounded w-full text-center">
            Our Work
          </Link>
          <Link to="/Collaborate" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-gray-200 rounded w-full text-center">
            Collaborate
          </Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-gray-200 rounded w-full text-center">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
