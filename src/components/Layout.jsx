import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; // This renders the current page

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />  {/* This will load different pages dynamically */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
