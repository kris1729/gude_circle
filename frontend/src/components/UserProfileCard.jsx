import React from "react";
import { Link } from "react-router-dom";

const UserProfileCard = ({
  id,
  image,
  name,
  role,
  company,
  rating,
  bookings,
}) => {
  return (
    <div className="bg-[#1B4242] text-[#9EC8B9] p-5 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-80">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-[#5C8374] shadow-md"
        />
      </div>

      {/* User Details */}
      <div className="text-center mt-3">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm opacity-80">{role} at {company}</p>
        <p className="text-yellow-300 mt-1">⭐ {rating} | {bookings} bookings</p>
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-center">
        <Link to={`/profile/${id}`}>
          <button className="px-5 py-2 bg-[#092635] text-white rounded-lg hover:bg-[#5C8374] transition">
            See Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfileCard;
