import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* outlet */}
      <Outlet />
    </div>
  );
};

export default Layout;
