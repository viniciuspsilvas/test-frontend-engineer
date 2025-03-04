"use client";

import NavBar from "./components/NavBar";
import { motion } from "framer-motion";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <NavBar />

      <motion.main
        key="main-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        {children}
      </motion.main>
    </div>
  );
}