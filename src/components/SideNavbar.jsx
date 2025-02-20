
import React, { useState } from "react";
import { FiMenu, FiHome, FiPackage, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import logo from "../assets/navlogo.png";

export default function NavbarWithSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full bg-slate-300 text-black transition-all duration-300 
        ${isOpen ? "w-40" : "w-0"} lg:w-32 z-50 flex flex-col items-center overflow-hidden`}
      >
        <ul className="mt-24 space-y-6 w-full">
          {[
            { name: "Home", icon: <FiHome size={20} />, link: "/" },
            { name: "Products", icon: <FiPackage size={20} />, link: "/products" },
            { name: "Cart", icon: <FiShoppingCart size={20} />, link: "/cart" },
            { name: "Profile", icon: <FiUser size={20} />, link: "/profile" },
          ].map((item) => (
            <li
              key={item.name}
              className="w-full flex justify-center"
              onClick={() => {
                setActiveItem(item.name);
                setIsOpen(false);
              }}
            >
              <Link to={item.link} className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center rounded-full h-12 w-12 ${activeItem === item.name ? "bg-[#2B8AF0] text-white" : "bg-none text-black"
                    }`}
                >
                  {item.icon}
                </div>
                <span className="mt-2 text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col transition-all duration-300 lg:ml-40 ">
        <nav className="fixed top-0 left-0 h-16 w-full bg-slate-300 pt-5 flex items-center justify-between z-50">
          <div className="flex items-center">
            <button className="lg:hidden p-2 text-black" onClick={() => setIsOpen(!isOpen)}>
              <FiMenu size={24} />
            </button>
            {/* <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto ml-4 lg:ml-7 transform scale-125"
              style={{ transformOrigin: "left center" }}
            /> */}
            <div className="flex-1 flex justify-center sm:justify-center lg:justify-start">
              <img
                src={logo}
                alt="Logo"
                className="h-36 lg:h-44 w-auto ml-10 sm:h-32 sm:ml-20 lg:ml-0 transform scale-125"
                style={{ transformOrigin: "left center" }}
              />
            </div>

          </div>

          <div className="hidden lg:flex flex-1 ml-4">
            <Searchbar onSearch={(query) => console.log(query)} />
          </div>

          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2 text-black" onClick={() => setShowSearch(!showSearch)}>
              <FiSearch size={22} />
            </button>
            <Link to="/cart" className="p-2 text-black">
              <FiShoppingCart size={22} />
            </Link>
            <Link to="/profile" className="p-2 text-black">
              <FiUser size={22} />
            </Link>
          </div>
        </nav>

        {showSearch && (
          <div className="fixed top-14 left-0 w-full bg-white p-2 z-50 flex justify-center">
            <Searchbar onSearch={(query) => console.log(query)} />
          </div>
        )}

        <main className="mt-16 p-4">{children}</main>
      </div>
    </div>
  );
}
