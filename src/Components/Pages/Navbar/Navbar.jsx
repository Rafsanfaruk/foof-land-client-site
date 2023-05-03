import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navbar section */}
          <h1 className="text-3xl font-bold text-indigo-500">FoodLand</h1>
        
          <div className="flex lg:hidden">
            <button className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
              
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "active" : "default")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "default")}
                >
                 About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "active" : "default")}
                >
                 Blog
                </NavLink>
              </li>
            </ul>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
