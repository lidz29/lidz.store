import React from 'react';
import { Store, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Lidz.store</span>
            </div>
            <p className="text-gray-400 mb-4">
              Semua Kebutuhan Digital dalam Satu Tempat
            </p>
            <p className="text-sm text-gray-500">
              Platform terpercaya untuk mendapatkan produk digital berkualitas tinggi dengan harga terjangkau.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Produk</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Kontak</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Kategori */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">E-book</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Template</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Course</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@lidz.store</span>
              </div>
              <div className="flex items-center space-x-2">
                <Store className="w-4 h-4" />
                <span className="text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Lidz.store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}