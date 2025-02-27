"use client";
import { useCartStore } from "@/store/cartStore";
import { useProduct } from "../../../hooks/useProduct";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

interface ProductDetailProps {
  id: string;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  const { data: product, isLoading, isError } = useProduct(id);
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message="Failed to fetch product details." />; 
  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    addToCart(product); // Pass the entire product object
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container mx-auto p-4"
    >
      {/* Back to Products Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/products">
          <button className="bg-transparent text-gray-800 px-4 py-2 rounded-lg transition">
            ← Back to Products
          </button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Product Image with Floating Animation */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }} // Floating effect
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold">${product.price}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* Add to Cart Button with Pulsing and Click Effect */}
          <motion.button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
            animate={{ scale: [1, 1.05, 1] }} // Pulsing effect
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileTap={{ scale: 0.9 }} // Click effect
          >
            {/* Shopping Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}