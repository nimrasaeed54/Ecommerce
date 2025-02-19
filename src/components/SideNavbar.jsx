import React, { useState } from "react";
import { FiMenu, FiHome, FiPackage, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function NavbarWithSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full bg-slate-300 text-black transition-all duration-300 
        ${isOpen ? "w-64" : "w-0"} lg:w-32 z-50 flex flex-col items-center overflow-hidden`}
      >
        <ul className="mt-20 space-y-6 w-full">
          {[
            { name: "Home", icon: <FiHome size={20} />, link: "/" },
            { name: "Products", icon: <FiPackage size={20} />, link: "/products" },
            { name: "Cart", icon: <FiShoppingCart size={20} />, link: "/cart" },
            { name: "Profile", icon: <FiUser size={20} />, link: "/profile" },
          ].map((item) => (
            <li key={item.name} className="w-full flex justify-center" onClick={() => setActiveItem(item.name)}>
              <Link to={item.link || "#"} className="flex flex-col items-center">
                <div className={`flex items-center justify-center rounded-full h-12 w-12 ${
                  activeItem === item.name ? "bg-[#2B8AF0] text-white" : "bg-none text-black"
                }`}>
                  {item.icon}
                </div>
                <span className="mt-2 text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40" onClick={() => setIsOpen(false)}></div>}
      <div className="flex-1 flex flex-col transition-all duration-300 lg:ml-40">

        <nav className="fixed top-0 left-0 w-full bg-slate-300 p-4 flex justify-between items-center z-50">
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu size={24} />
          </button>
          <h1 className="text-lg font-bold lg:ml-7">Logo</h1>

       
          <div className="hidden lg:flex flex-1 justify-center">
            <Searchbar onSearch={(query) => console.log(query)} />
          </div>

   
          <button className="lg:hidden p-2" onClick={() => setShowSearch(!showSearch)}>
            <FiSearch size={24} />
          </button>
        </nav>

      
        {showSearch && (
          <div className="fixed top-14 left-0 w-full bg-white p-2 z-50">
            <Searchbar onSearch={(query) => console.log(query)} />
          </div>
        )}

     
        <main className="mt-16 p-4">{children}</main>
      </div>
    </div>
  );
}
