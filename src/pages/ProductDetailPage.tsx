import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Download, Shield, Users, Check, Heart } from 'lucide-react';
import { products, reviews } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('description');
  
  const product = products.find(p => p.id === id);
  const productReviews = reviews.filter(r => r.productId === id);
  const relatedProducts = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk Tidak Ditemukan</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-lg text-gray-600">
                  {product.rating} ({product.reviews} ulasan)
                </span>
              </div>

              <div className="text-4xl font-bold text-blue-600 mb-6">
                {formatPrice(product.price)}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Yang Anda Dapatkan:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Download className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Download Instan</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Garansi 30 Hari</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Support 24/7</div>
              </div>
            </div>

            {/* Purchase Buttons */}
            <div className="space-y-4">
              <Link 
                to={`/checkout/${product.id}`}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg text-center block shadow-lg hover:shadow-xl"
              >
                Beli Sekarang
              </Link>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors font-medium flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Tambah ke Wishlist</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setSelectedTab('description')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  selectedTab === 'description'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Deskripsi
              </button>
              <button
                onClick={() => setSelectedTab('reviews')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  selectedTab === 'reviews'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Ulasan ({product.reviews})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {selectedTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Fitur Utama</h3>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Bonus</h3>
                    <ul className="space-y-2">
                      {product.features.slice(3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                {productReviews.length > 0 ? (
                  productReviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {review.userName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{review.userName}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < review.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">Belum ada ulasan untuk produk ini.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-gray-200 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Produk Serupa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}