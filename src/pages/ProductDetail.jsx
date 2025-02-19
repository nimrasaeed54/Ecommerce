
import React from "react";
import { motion } from "framer-motion";
import shoesData from "../data/shoesData";
import { StarIcon, ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function ProductDetail() {
  const shoe = shoesData[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row max-w-screen-full max-h-screen-full rounded-3xl items-center p-6 mt-12 md:p-12 bg-white shadow-xl"
    >
      {/* Product Image Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <motion.img
          src={shoe.img}
          alt={shoe.name}
          className="w-full max-w-md object-contain rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Product Details Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-6 mt-6 md:mt-0 md:pl-8"
      >
        {/* Product Name */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-gray-900"
        >
          {shoe.name}
        </motion.h1>

        {/* Price and Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <p className="text-2xl text-gray-700 font-semibold">
            <span className="font-bold text-gray-900">Price:</span> {shoe.price}
          </p>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
            ))}
            <span className="text-gray-600 ml-2">(4.8)</span>
          </div>
        </motion.div>

        {/* Badges */}
        {shoe.badges.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="flex gap-2"
          >
            {shoe.badges.map((badge, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
              >
                {badge.toUpperCase()}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Product Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          <span className="font-bold text-gray-900">Description:</span>{" "}
          {shoe.description}
        </motion.p>

        {/* Available Colors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-2"
        >
          <span className="text-gray-900 font-bold text-lg">Available Colors:</span>
          <div className="flex gap-2">
            {shoe.colors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:border-blue-500"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </motion.div>

        {/* Size Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-2"
        >
          <span className="text-gray-900 font-bold text-lg">Select Size:</span>
          <div className="flex gap-2">
            {["6", "7", "8", "9", "10"].map((size, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
              >
                {size}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex gap-4 mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex-1"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Add to Cart
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all flex-1"
          >
            <HeartIcon className="h-5 w-5" />
            Wishlist
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}