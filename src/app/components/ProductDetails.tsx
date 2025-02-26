"use client";
import { useCartStore } from "@/store/cartStore";
import { useProduct } from "../../../hooks/useProduct";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailProps {
  id: string;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  const { data: product, isLoading, isError } = useProduct(id);
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching product details.</p>;
  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    addToCart(product); // Pass the entire product object
  };

  return (
    <div className="container mx-auto p-4">
      {/* Back to Products Button */}
      <div className="mb-4">
        <Link href="/products">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            ← Back to Products
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={200}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold">${product.price}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
