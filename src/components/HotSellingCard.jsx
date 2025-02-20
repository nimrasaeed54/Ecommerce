
import React from "react";
import { motion } from "framer-motion";
import shoeImage from "../assets/shoe4.png";

export default function HotSellingCard() {
  return (
    <div className="w-full max-w-3xl bg-[#FFE479]  text-black rounded-3xl flex flex-col px-4 py-5 sm:px-6 sm:py-8 md:px-10 md:py-12 relative mx-auto  ">

      <div className="text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Explore New</h1>
      </div>

      <div className="bg-white w-2/5 sm:w-32 md:w-2/5 h-32 sm:h-40 shadow-xl rounded-2xl flex flex-col justify-center p-3 sm:p-4 mt-4 relative">
        <h2 className="text-gray-900 text-sm sm:text-lg md:text-xl font-semibold">Reebok Classic</h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">$90</p>

        {/* <div className="mt-2 flex items-center">
          <p className="text-gray-600 text-xs sm:text-sm font-medium">Colors:</p>
          <div className="flex gap-2 ml-2">
            {["#FF4500", "#00FA9A", "#8A2BE2"].map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div> */}
        <div className="mt-2">
  <p className="text-gray-600 text-xs sm:text-sm font-medium">Colors</p>
  <div className="flex flex-wrap lg:flex-nowrap gap-2 ml-2">
    {["#FF4500", "#00FA9A", "#8A2BE2"].map((color, index) => (
      <span
        key={index}
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border border-gray-300"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
</div>

      </div>

      <div className="absolute bottom-2 left-2 sm:bottom-2 sm:left-2 flex flex-row gap-2">
        <span className="bg-blue-500/90 text-white text-[10px] sm:text-xs md:text-sm font-bold py-1 px-2 sm:px-2 transform -rotate-12 skew-y-6 rounded-bl-lg shadow-lg">
          New
        </span>
        <span className="bg-orange-500/90 text-white text-[10px] sm:text-xs md:text-sm font-bold py-1 px-2 sm:px-2 transform -rotate-12 skew-y-6 mt-1 rounded-bl-lg shadow-lg">
          Hot
        </span>
      </div>

     
      <motion.img 
        src={shoeImage} 
        alt="Shoe"
        className="max-w-[150px] sm:max-w-[150px] md:max-w-[240px] lg:max-w-[390px] h-auto object-contain absolute top-6  right-2 sm:right-4 md:-top-8 z-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, rotate: 3 }}
      />
    </div>
  );
}
