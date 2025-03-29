import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EFEAD8] p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-[#1B4242]">About GuideCircle</h1>
        <p className="text-lg text-[#5F7161] mt-4">
          GuideCircle is a platform designed to connect **experts** with **service seekers** for 
          personalized one-on-one video consultations. Whether you're looking for mentorship, 
          career guidance, or expert insights, GuideCircle makes it easy to book and offer services.
        </p>

        {/* Mission Section */}
        <div className="mt-6 text-[#092635]">
          <h2 className="text-2xl font-semibold text-[#1B4242]">Our Mission</h2>
          <p className="mt-2">
            Our goal is to create a seamless experience for professionals and learners by enabling 
            direct access to expertise. We believe in empowering people with **knowledge, mentorship, 
            and real-world advice** through secure and meaningful virtual interactions.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-6 text-[#092635]">
          <h2 className="text-2xl font-semibold text-[#1B4242]">Our Vision</h2>
          <p className="mt-2">
            GuideCircle envisions a world where **expert guidance is accessible to all**. We strive to 
            be the go-to platform for professionals and learners, helping individuals grow their skills 
            and achieve their goals with expert-led sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
