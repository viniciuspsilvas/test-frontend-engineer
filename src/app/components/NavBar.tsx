"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Reusable component for menu items
interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void; 
}

const NavItem = ({ href, label, onClick }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick} // Fecha o menu ao clicar em um item
      className={`hover:text-primary-200 transition-colors duration-200 ${
        isActive ? "border-b-2 border-primary text-primary" : "text-white"
      }`}
    >
      {label}
    </Link>
  );
};

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, removeFromCart } = useCartStore();

  // Calculate total items and total price
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <nav className="animated-gradient bg-secondary-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Hamburger Menu Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="text-xl font-bold text-white lg:flex-1 text-center lg:text-left">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Link>
        </div>

        {/* Full-screen Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-secondary-200 z-40 flex flex-col items-center justify-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 left-4 text-white focus:outline-none"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-8 text-center">
              <NavItem href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="/products" label="Products" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="/deals" label="Deals" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="/categories" label="Categories" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex lg:space-x-6">
          <NavItem href="/" label="Home" />
          <NavItem href="/products" label="Products" />
          <NavItem href="/deals" label="Deals" />
          <NavItem href="/categories" label="Categories" />
          <NavItem href="/contact" label="Contact" />
        </div>


        {/* Cart Icon */}
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center p-2 hover:text-primary-200 focus:outline-none transition-colors duration-200"
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
              <span className="absolute top-0 right-0 bg-danger-500 text-xs rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Shopping Cart</h3>
                {cart.length === 0 ? (
                  <p className="mt-2">Your cart is empty.</p>
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
                              <p className="text-sm font-medium">
                                {item.title}
                              </p>
                              <p className="text-xs">
                                Quantity: {item.quantity || 1}
                              </p>
                              <p className="text-xs">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-danger-500 hover:text-danger-400 transition-colors duration-200"
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
                      <p className="text-lg font-semibold">
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