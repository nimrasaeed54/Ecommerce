
import React from "react";
import { motion } from "framer-motion";
import shoesData from "../data/shoesData";
import { StarIcon } from "@heroicons/react/24/solid";

export default function ProductDetail() {
  const shoe = shoesData[0];


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row w-full h-screen mx-auto p-6 md:p-12 bg-white "
    >
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <motion.div
          className="w-full h-[400px] rounded-3xl flex items-center justify-center  p-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={shoe.img}
            alt={shoe.name}
            className="w-auto h-4/5 object-contain"
          />
        </motion.div>

        <div className="flex gap-3 mt-4">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-16 h-16 rounded-lg shadow-md border border-gray-300 p-1 cursor-pointer hover:border-gray-500"
            >
              <img
                src={shoe.img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-contain rounded-sm"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-4 md:pl-12 flex flex-col justify-start"
      >
        <div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold text-gray-900"
          >
            {shoe.name}
          </motion.h1>
          <div className="flex items-center space-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
            ))}
            <span className="text-gray-600 ml-2">(4.8)</span>
          </div>
        </div>

        <p className="text-3xl text-gray-700 font-semibold">
          <span className="font-bold text-gray-900">$</span> {shoe.price}
        </p>

        <p className="text-gray-600 text-lg">
          <span className="font-bold text-gray-900">Description:</span> {shoe.description}
        </p>

        <div>
          <span className="font-bold text-gray-900 text-lg">Color: </span>
          <div className="flex space-x-3 mt-2">
            {shoe.colors.map((color, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div>
          <span className="font-bold text-gray-900 text-lg">Size: </span>
          <div className="flex space-x-3 mt-2">
            {shoe.sizes?.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border border-gray-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition">
            Buy Now
          </button>
          <button className="px-6 py-3 border border-gray-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Add to Cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
