"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeClient() {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden mt-40 pt-20 md:pt-32">
      {/* Hero Content (Left Side) */}
      <motion.div
        className="max-w-lg text-left px-6 md:px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Style</h1>
        <p className="text-lg md:text-xl mb-6">
          Premium fashion tailored for the modern gentleman. Redefine your wardrobe with timeless elegance.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="/products"
            className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Image (Right Side) */}
      <div className="absolute -bottom-48 md:bottom-0 right-0 w-full md:w-1/2 h-3/4 md:h-full">
        <Image
          src="/man-hero.png"
          alt="Prime Gents Hero Background"
          fill
          className="object-cover md:object-contain"
          priority
        />
      </div>
    </div>
  );
}