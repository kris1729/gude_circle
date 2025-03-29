import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProfilePage from "./pages/ProfilePage";
import SignInSeeker from "./pages/SignInSeeker";
import SignInExpert from "./pages/SignInExpert";
import SignUpSeeker from "./pages/SignUpSeeker";
import SignUpExpert from "./pages/SignUpExpert";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="signin/seeker" element={<SignInSeeker />} />
          <Route path="signin/expert" element={<SignInExpert />} />
          <Route path="signup/seeker" element={<SignUpSeeker />} />
          <Route path="signup/expert" element={<SignUpExpert />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
