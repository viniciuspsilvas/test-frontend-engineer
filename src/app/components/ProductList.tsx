"use client";

import { useState } from "react";
import Link from "next/link";
import { useProducts } from "../../../hooks/useProducts";
import Image from "next/image";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const limit = 3;

  const { data, isLoading, isError, error } = useProducts(page, limit);

  if (isLoading) return <p className="text-center">Loading products...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>

      {!data || data?.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2">
                        {product.title}
                      </h2>
                      <p className="text-gray-700 mb-2">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="mx-4 text-lg">{page}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={data?.length < limit}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
