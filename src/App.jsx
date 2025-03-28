import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInSeeker from "./pages/SignInSeeker";
import SignInExpert from "./pages/SignInExpert";
import SignUpSeeker from "./pages/SignUpSeeker";
import SignUpExpert from "./pages/SignUpExpert";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProfilePage from "./pages/ProfilePage"; 
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
// Import ProfilePage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin/seeker" element={<SignInSeeker />} />
        <Route path="/signin/expert" element={<SignInExpert />} />
        <Route path="/signup/seeker" element={<SignUpSeeker />} />
        <Route path="/signup/expert" element={<SignUpExpert />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} /> {/* Profile Route */}
      </Routes>
    </Router>
  );
}

export default App;
