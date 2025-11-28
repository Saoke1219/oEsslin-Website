import React from "react";
import OEsslin from "../components/OEsslin";


export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About oEsslin */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About oEsslin</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
          <OEsslin />  is a multidisciplinary consultancy helping leaders, organizations, and communities navigate complex challenges in sustainability, policy, and technology. Our mission is to transform complexity into opportunity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition-colors">Who We Are</a>
            </li>
            <li>
              <a href="#approach" className="hover:text-white transition-colors">Our Work</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white transition-colors">Careers</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">123 Sustainability Lane</p>
          <p className="text-gray-400 text-sm mb-2">Nairobi, Kenya</p>
          <p className="text-gray-400 text-sm mb-2">Email: info@oesslin.com</p>
          <p className="text-gray-400 text-sm">Phone: +254 700 000000</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} <OEsslin /> . All rights reserved.
      </div>
    </footer>
  );
}
