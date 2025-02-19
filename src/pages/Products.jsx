
import React from "react";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  return (
    <div className="max-w-screen-full ml-0 mt-12 rounded-3xl px-10 py-6 bg-white">
      
        <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
     
      <ProductList />
    </div>
  );
}
