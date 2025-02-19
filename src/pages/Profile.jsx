
import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 ml-5 mt-12 bg-white rounded-3xl max-w-screen-full"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        My Profile
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-white shadow-md rounded-lg p-6 w-3/4"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center gap-6"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
            <p className="text-gray-700">Email: johndoe@example.com</p>
            <p className="text-gray-700">Phone: +123 456 7890</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6"
        >
          <h3 className="text-lg font-semibold text-gray-900">Address</h3>
          <p className="text-gray-700">
            123 Main Street, New York, NY, 10001
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6"
        >
          <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <p className="text-gray-700">
              <strong>Order #12345</strong> - Nike Air Max - $120 -{" "}
              <span className="text-[#837DF9]">Delivered</span>
            </p>
            <p className="text-gray-700">
              <strong>Order #67890</strong> - Adidas Ultraboost - $150 -{" "}
              <span className="text-yellow-500">Processing</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Edit Profile
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
