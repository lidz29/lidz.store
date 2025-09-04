import React from "react";
import { Link } from "react-router-dom";
import { Store, Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { cart } = useCart();

  return (
    <header
      className={`bg-white shadow-sm border-b border-gray-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Lidz.store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Beranda
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Produk
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Tentang
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Kontak
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Link
              to="/cart"
              className="relative mr-4 text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
