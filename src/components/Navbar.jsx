import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/6537946.jpg";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1B4242] shadow-md py-4 px-6 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Topmate" className="w-10" />
        <h1 className="text-2xl font-bold">GuideCircle</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for Tax Advisors"
          className="border border-white px-4 py-2 rounded-full focus:outline-none bg-[#1B4242] text-white placeholder-gray-300"
        />

        {/* Navigation Links */}
        <NavLink to="/contact" className="font-semibold text-gray-300 hover:text-white transition">
          Contact Us
        </NavLink>

        <NavLink to="/about" className="font-semibold text-gray-300 hover:text-white transition">
          About Us
        </NavLink>

        {/* Sign-In Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsSignInOpen(!isSignInOpen)}
            className="bg-[#6D8B74] text-white px-4 py-2 rounded-lg hover:bg-[#5F7161] transition"
          >
            Sign In
          </button>
          {isSignInOpen && (
            <div className="absolute right-0 mt-2 bg-[#1B4242] border border-gray-700 shadow-lg rounded-md w-48">
              <NavLink
                to="/signin/seeker"
                className="block px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsSignInOpen(false)}
              >
                Sign In as Seeker
              </NavLink>
              <NavLink
                to="/signin/expert"
                className="block px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsSignInOpen(false)}
              >
                Sign In as Expert
              </NavLink>
            </div>
          )}
        </div>

        {/* Sign-Up Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsSignUpOpen(!isSignUpOpen)}
            className="bg-[#6D8B74] text-white px-4 py-2 rounded-lg hover:bg-[#5F7161] transition"
          >
            Sign Up
          </button>
          {isSignUpOpen && (
            <div className="absolute right-0 mt-2 bg-[#1B4242] border border-gray-700 shadow-lg rounded-md w-48">
              <NavLink
                to="/signup/seeker"
                className="block px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsSignUpOpen(false)}
              >
                Sign Up as Seeker
              </NavLink>
              <NavLink
                to="/signup/expert"
                className="block px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsSignUpOpen(false)}
              >
                Sign Up as Expert
              </NavLink>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
