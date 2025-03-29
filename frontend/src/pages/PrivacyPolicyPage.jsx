import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EFEAD8] p-10">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#1B4242] text-center">Privacy Policy</h1>
        <p className="text-[#5F7161] text-center mt-2">Last updated: March 28, 2025</p>

        <p className="mt-6 text-[#092635]">
          Welcome to GuideCircle! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B4242] mt-6">1. Information We Collect</h2>
        <p className="text-[#092635] mt-2">
          We collect information such as your name, email, and payment details when you sign up or book a session with an expert. We may also collect analytics data to improve our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B4242] mt-6">2. How We Use Your Information</h2>
        <p className="text-[#092635] mt-2">
          We use your information to provide, improve, and personalize our services, process transactions, and communicate with you regarding updates or promotions.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B4242] mt-6">3. Data Security</h2>
        <p className="text-[#092635] mt-2">
          We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B4242] mt-6">4. Your Rights</h2>
        <p className="text-[#092635] mt-2">
          You have the right to access, update, or delete your personal information at any time. Contact us if you need assistance.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B4242] mt-6">5. Contact Us</h2>
        <p className="text-[#092635] mt-2">
          If you have any questions about this Privacy Policy, please <a href="/contact" className="text-[#6D8B74] underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
