import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SupabaseConnectionTest from '../components/SupabaseConnectionTest';

export default function SupabaseTestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Kembali ke Beranda
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Tes Koneksi MCP dengan Supabase</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Halaman ini menampilkan status koneksi antara aplikasi MCP dan database Supabase
            </p>
          </div>
          
          <SupabaseConnectionTest />
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Informasi Konfigurasi</h2>
            <p className="text-gray-600 mb-4">
              Konfigurasi Supabase diambil dari variabel lingkungan berikut:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">VITE_SUPABASE_URL</code> - URL endpoint Supabase</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">VITE_SUPABASE_ANON_KEY</code> - Kunci anonim Supabase</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}