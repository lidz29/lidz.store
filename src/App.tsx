import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import SupabaseTestPage from './pages/SupabaseTestPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/checkout/:id" element={<CheckoutPage />} />
          <Route path="/supabase-test" element={<SupabaseTestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;