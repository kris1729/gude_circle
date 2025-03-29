import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // Ensure React Router is used

const Footer = () => {
  return (
    <footer className="bg-[#1B4242] text-[#9EC8B9] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">GuideCircle</h2>
          <p className="text-sm mt-1">Connecting experts & learners globally</p>
          <p className="text-xs mt-2">&copy; {new Date().getFullYear()} GuideCircle. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-4 md:mt-0">
          <Link to="/about" className="hover:text-[#EFEAD8] transition">About Us</Link>
          <Link to="/services" className="hover:text-[#EFEAD8] transition">Services</Link>
          <Link to="/contact" className="hover:text-[#EFEAD8] transition">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-[#EFEAD8] transition">Privacy Policy</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#EFEAD8] transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-[#EFEAD8] transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-[#EFEAD8] transition">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-[#EFEAD8] transition">
            <FaInstagram size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
