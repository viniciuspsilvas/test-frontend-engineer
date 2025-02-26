"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart } = useCartStore();

  // Calculate total items and total price
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Store Name */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">My Store</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link href="/products" className="text-gray-800 hover:text-blue-500">
            Products
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center p-2 text-gray-800 hover:text-blue-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {/* Badge showing total items */}
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Shopping Cart
                </h3>
                {cart.length === 0 ? (
                  <p className="text-gray-600 mt-2">Your cart is empty.</p>
                ) : (
                  <>
                    {/* Cart Items List */}
                    <ul className="mt-4 space-y-4">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="w-12 h-12 object-cover rounded-lg"
                              width={48}
                              height={48}
                            />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-800">
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                Quantity: {item.quantity || 1}
                              </p>
                              <p className="text-xs text-gray-500">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* Total Price */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-lg font-semibold text-gray-800">
                        Total: ${totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;