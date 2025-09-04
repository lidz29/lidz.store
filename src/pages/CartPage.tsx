import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const formatPrice = (price_cents: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price_cents);
  };

  const total = cart.reduce((sum, product) => sum + product.price_cents, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Keranjang Kosong
          </h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Keranjang Belanja
          </h2>

          <div className="space-y-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex space-x-4 pb-6 border-b border-gray-200"
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.category}
                  </p>
                  <div className="text-lg font-bold text-blue-600 mt-2">
                    {formatPrice(product.price_cents)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-xl font-bold text-blue-600">
                {formatPrice(total)}
              </span>
            </div>

            <Link
              to={`/checkout`}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg text-center block shadow-lg hover:shadow-xl"
            >
              Lanjut ke Pembayaran
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
