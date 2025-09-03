import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download, Shield, Mail } from 'lucide-react';
import { products } from '../data/products';

export default function CheckoutPage() {
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const product = products.find(p => p.id === id);

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

  const handlePayment = async () => {
    if (!email) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setIsCompleted(true);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pembayaran Berhasil!
            </h2>
            
            <p className="text-gray-600 mb-6">
              Terima kasih! Link download telah dikirim ke email <strong>{email}</strong>
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-center space-x-2 text-blue-800">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Cek email Anda untuk link download</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Sekarang</span>
              </button>
              
              <Link 
                to="/"
                className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors font-medium text-center block"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to={`/product/${product.id}`}
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Detail Produk</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>
            
            <div className="flex space-x-4 mb-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.category}</p>
                <div className="text-lg font-bold text-blue-600 mt-2">
                  {formatPrice(product.price)}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">{formatPrice(product.price)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Pajak</span>
                <span className="font-semibold">Gratis</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Pembayaran 100% aman</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download instan setelah pembayaran</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Informasi Pembeli</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  Link download akan dikirim ke email ini
                </p>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Metode Pembayaran
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" value="bank" className="mr-3" defaultChecked />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Transfer Bank</div>
                      <div className="text-sm text-gray-600">BCA, Mandiri, BNI, BRI</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" value="ewallet" className="mr-3" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">E-Wallet</div>
                      <div className="text-sm text-gray-600">GoPay, OVO, DANA, ShopeePay</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Jaminan 100% Aman:</strong> Transaksi Anda dilindungi dengan enkripsi SSL dan sistem pembayaran yang terpercaya.
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={!email || isProcessing}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                {isProcessing ? 'Memproses...' : 'Bayar Sekarang'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Dengan melakukan pembayaran, Anda menyetujui{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">Syarat & Ketentuan</a>
              {' '}dan{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}