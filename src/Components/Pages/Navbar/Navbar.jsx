import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error =console.log(error));
  }

  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navbar section */}
          {/* <h1 className="text-3xl font-bold text-indigo-500">FoodLand</h1> */}
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black ">
            FoodLand
          </span>

          <div className="flex lg:hidden">
            <button className="text-gray-400 hover:text-white focus:outline-none focus:text-white"></button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            {user && <div className="ms-5">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://picsum.photos/200/300" />
                </div>
              </label>
            </div>
           }
           { user ?
            <button  onClick={handleLogOut} className="btn btn-success  ms-7">Logout</button>:
          <Link to="/login">
            <button className="btn btn-primary ms-7">Login</button>

          </Link>
          }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
