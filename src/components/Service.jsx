import React from "react";

const Service = ({ service }) => {
  const { title, duration, price, description } = service;

  return (
    <div className="bg-[#1B4242] text-[#9EC8B9] p-6 rounded-lg shadow-lg border border-[#5C8374] transition transform hover:scale-105">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="mb-1 text-[#EFEAD8]">⏳ {duration}</p>
      <p className="mb-1 font-semibold text-yellow-300">💲 {price}</p>
      <p className="mb-4">{description}</p>
      <button className="bg-[#092635] text-white px-4 py-2 rounded-md hover:bg-[#5C8374] transition shadow">
        Book Now
      </button>
    </div>
  );
};

export default Service;
