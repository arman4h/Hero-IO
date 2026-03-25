import React from "react";
import { CiHome } from "react-icons/ci";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { LuLibraryBig } from "react-icons/lu";
import { NavLink } from "react-router";
import logo from "../assets/logo.png"

export default function Navbar() {

    const navitems = [
      { name: "Home", path: "/", icon: <CiHome/> },
      { name: "Apps", path: "/apps", icon: <FaAppStore/> },
      { name: "Installation", path: "/library", icon: <LuLibraryBig/> },
    ];

  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* Dynamic Navbar Mobile View*/}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navitems.map((item) => (
                <li>
                  <NavLink key={item.path} to={item.path}>
                    <span>{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="flex items-center gap-2 font-bold text-2xl">
            <span>
              <img className="w-12" src={logo} alt="Hero Logo" />
            </span>
            HERO.IO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* Dynamic Navbar */}
          <ul className="menu menu-horizontal gap-3 text-base font-medium px-1">
            {navitems.map((item) => (
              <li>
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink className=" btn btn-secondary bg-linear-to-r from-violet-500 to-blue-500 text-base border-transparent">
            <span>
              <FaGithub />
            </span>{" "}
            Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
}
