import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EFEAD8] p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-[#1B4242]">Contact Us</h1>
        <p className="text-lg text-[#5F7161] mt-2">
          Have questions? Need support? We’re here to help!
        </p>

        {/* Contact Information */}
        <div className="mt-6 space-y-4 text-[#092635]">
          <p>Email: <span className="font-semibold text-[#1B4242]">support@guidecircle.com</span></p>
          <p>Phone: <span className="font-semibold text-[#1B4242]">+1 (800) 123-4567</span></p>
          <p>Address: <span className="font-semibold text-[#1B4242]">123 GuideCircle St, San Francisco, CA</span></p>
        </div>

        {/* Contact Form */}
        <form className="mt-6 space-y-4 w-full">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C8374]"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C8374]"
          />
          <textarea 
            placeholder="Your Message" 
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C8374]"
          ></textarea>
          <button className="bg-[#6D8B74] text-white px-6 py-2 rounded-lg hover:bg-[#5F7161] transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
