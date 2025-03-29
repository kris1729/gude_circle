import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/6537946.jpg";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Apply dark mode to the body
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1B4242" : "#EFEAD8";
  }, [isDarkMode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.style.backgroundColor = newMode ? "#1B4242" : "#EFEAD8";

    // Notify other components
    window.dispatchEvent(new Event("darkModeChange"));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
      >
        <img src={logo} alt="Profile" className="w-full h-full rounded-full" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
          {/* Profile Option */}
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Profile
          </button>

          {/* Dark Mode Toggle */}
          <div className="px-4 py-2 flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
              />
              <span className="block w-full h-full bg-gray-300 rounded-full peer-checked:bg-[#1B4242] transition duration-300"></span>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition duration-300 peer-checked:translate-x-6"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
