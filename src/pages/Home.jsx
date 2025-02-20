
import React from "react";
import { motion } from "framer-motion";
import HotSellingCard from "../components/HotSellingCard";
import ProductView from "../components/ProductView";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="bg-white  rounded-3xl px-4 py-6"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-0 lg:w-2/3"
        >
          <HotSellingCard />
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/3 mt"
        >
          <ProductView />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8"
      >
        <div className="flex items-center ml-3 mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "1rem" }}
            transition={{ duration: 0.5 }}
            className="w-4 h-8 bg-[#a5e0b9] rounded mr-2"
          />
          <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
        </div>
        <ProductList />
      </motion.div>
    </motion.div>
  );
}
