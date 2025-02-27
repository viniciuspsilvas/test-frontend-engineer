"use client";

import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        animate={{ rotate: 360 }} 
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full"
      ></motion.div>
    </div>
  );
};

export default LoadingSpinner;