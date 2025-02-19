import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail'; 
import Layout from '../Routes/Layout';
import CartPage from '../pages/CartPage';
import Profile from '../pages/Profile';
import CheckoutPage from '../pages/CheckoutPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<CheckoutPage />} />

      </Route>
    </Routes>
  );
}