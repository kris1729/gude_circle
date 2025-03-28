import React from "react";
import { useParams } from "react-router-dom";
import Service from "../components/Service";
import logo from "../assets/6537946.jpg"; // Placeholder image

const ProfilePage = () => {
  const { id } = useParams();

  const user = {
    id,
    name: `User ${id}`,
    role: "Software Engineer",
    company: "Some Company",
    rating: "5/5",
    bookings: "4059+",
    image: logo,
    bio: "Experienced software engineer specializing in front-end and backend development. Passionate about building scalable web applications.",
  };

  const services = [
    {
      id: 1,
      title: "Web Development Consultation",
      duration: "1 hour",
      price: "$100",
      description: "Discuss your web development needs and get expert advice.",
    },
    {
      id: 2,
      title: "Code Review & Optimization",
      duration: "2 hours",
      price: "$150",
      description: "Detailed code review and suggestions for improvement.",
    },
    {
      id: 3,
      title: "React.js Crash Course",
      duration: "3 hours",
      price: "$200",
      description: "A beginner-friendly introduction to React.js development.",
    },
    {
      id: 4,
      title: "Advanced JavaScript Training",
      duration: "2.5 hours",
      price: "$180",
      description: "Deep dive into JavaScript concepts, ES6+, and best practices.",
    },
    {
      id: 5,
      title: "UI/UX Consultation",
      duration: "1.5 hours",
      price: "$120",
      description: "Get expert UI/UX guidance for improving user experience.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-10 bg-[#EFEAD8] min-h-screen">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl flex flex-col items-center text-center border border-[#5C8374]">
        <img
          src={user.image}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-[#5C8374] shadow-lg"
        />
        <h1 className="text-3xl font-bold text-[#1B4242] mt-4">{user.name}</h1>
        <p className="text-lg text-[#5F7161] mt-1">{user.role} at {user.company}</p>
        <p className="text-yellow-500 font-semibold mt-1">⭐ {user.rating} | {user.bookings} bookings</p>
        <p className="text-center mt-4 text-[#092635] max-w-md leading-relaxed">
          {user.bio}
        </p>
      </div>

      {/* Services Section */}
      <div className="mt-12 w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-[#1B4242] mb-6 text-center">Services Offered</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 5).map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
