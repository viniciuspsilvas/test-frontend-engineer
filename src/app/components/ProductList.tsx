"use client"; 

import Link from "next/link";
import { useProducts } from "../../../hooks/useProducts";

const ProductList = () => {
  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) return <p className="text-center">Loading products...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/products/${product.id}`}>
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;