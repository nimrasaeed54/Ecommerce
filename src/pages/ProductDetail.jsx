
import React from "react";
import { motion } from "framer-motion";
import shoesData from "../data/shoesData";

export default function ProductDetail() {
  const shoe = shoesData[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row max-w-screen-full max-h-screen-full rounded-3xl items-center p-6 mt-12 md:p-12 bg-white shadow-xl"
    >
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

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-gray-900"
        >
          {shoe.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl text-gray-700 font-semibold"
        >
          <span className="font-bold text-gray-900">Price:</span> {shoe.price}
        </motion.p>

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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-gray-600"
        >
          <span className="font-bold text-gray-900">Description:</span>{" "}
          {shoe.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-3 mt-2"
        >
          <span className="text-gray-900 font-bold">Available Colors:</span>
          <div className="flex gap-2">
            {shoe.colors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Add to Cart
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
