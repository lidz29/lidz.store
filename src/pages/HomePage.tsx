import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Shield, Clock, Star, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, testimonials } from '../data/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Lidz.store</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mt-4 font-medium">
                  Semua Kebutuhan Digital dalam Satu Tempat
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Temukan koleksi lengkap produk digital berkualitas tinggi untuk mengembangkan bisnis dan kreativitas Anda. 
                Dari e-book, template, hingga tools digital professional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl"
                >
                  <span>Lihat Produk</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
                  Pelajari Lebih Lanjut
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Produk Digital</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.9</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Digital Products Illustration"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Instant Download</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">100% Aman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Instan</h3>
              <p className="text-gray-600">Akses langsung ke produk digital Anda setelah pembelian berhasil</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pembayaran Aman</h3>
              <p className="text-gray-600">Transaksi yang aman dan terpercaya dengan berbagai metode pembayaran</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support 24/7</h3>
              <p className="text-gray-600">Tim customer service siap membantu Anda kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan terbaik produk digital yang paling diminati oleh pelanggan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold group"
            >
              <span>Lihat Semua Produk</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelanggan yang telah merasakan manfaat produk digital kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Siap Mengembangkan Bisnis Digital Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dapatkan akses ke koleksi lengkap produk digital berkualitas tinggi
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold group shadow-lg"
          >
            <span>Mulai Sekarang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}