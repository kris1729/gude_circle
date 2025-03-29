import React, { useState, useEffect } from "react";
import UserProfileCard from "./UserProfileCard.jsx";
import logo from "../assets/6537946.jpg";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Listen for dark mode change event
  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(localStorage.getItem("darkMode") === "true");
    };

    window.addEventListener("darkModeChange", handleDarkModeChange);
    return () => {
      window.removeEventListener("darkModeChange", handleDarkModeChange);
    };
  }, []);

  const userData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    rating: "5/5",
    role: "Software Engineer",
    company: "Some Company",
    bookings: "4059+ bookings",
    callType: "1:1 Call",
    dmType: "Priority DM",
    buttonLabel: "See Profile",
    image: logo,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const visibleUsers = userData.slice(startIndex, startIndex + itemsPerPage);

  const handleSeeMore = () => {
    if (startIndex + itemsPerPage < userData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section
      className={`flex flex-col items-center p-6 transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-[#EFEAD8] text-[#5F7161]"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">Meet Top Experts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleUsers.map((user) => (
          <UserProfileCard key={user.id} {...user} />
        ))}
      </div>

      {startIndex + itemsPerPage < userData.length && (
        <button
          onClick={handleSeeMore}
          className="mt-6 px-6 py-3 bg-[#6D8B74] text-white rounded-lg hover:bg-[#5F7161] transition"
        >
          See More Experts
        </button>
      )}
    </section>
  );
};

export default Hero;
