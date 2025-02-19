
import React from "react";
import { motion } from "framer-motion";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-screen-ful mx-auto mt-12 rounded-3xl px-12 py-8 bg-white shadow-lg"
    >
      <motion.h1 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
      >
        Our Products
      </motion.h1>

      <ProductList />
    </motion.div>
  );
}
