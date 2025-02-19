import React from "react";
import HotSellingCard from "../components/HotSellingCard";
import ProductView from "../components/ProductView";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="bg-white rounded-3xl mt-12 px-4 py-6">
     
      <div className="flex flex-col lg:flex-row gap-6">
 
        <div className="w-full mt-0 lg:w-2/3">
          <HotSellingCard />
        </div>

        <div className="w-full lg:w-1/3 mt">
          <ProductView />
        </div>
      </div>

    
      <div className="mt-8">
      <div className="flex items-center ml-3 mb-4">
        <div className="w-4 h-8 bg-[#a5e0b9] rounded mr-2"></div>
        <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
      </div>
        <ProductList />
      </div>
    </div>
  );
}
