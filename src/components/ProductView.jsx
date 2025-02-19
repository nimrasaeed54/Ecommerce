
import React from "react";
import shoesData from "../data/shoesData";

function ProductView() {

  const hotSellingShoes = shoesData.filter((shoe) => shoe.badges.includes("hot"));
 
  return (
    <div className="w-96 bg-white p-4 shadow-lg rounded-xl">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Product views</h2>
      <ul className="space-y-4 overflow-y-auto max-h-60 pr-2">
        {hotSellingShoes.map((shoe) => (
          <li key={shoe.id} className="flex items-center gap-4 border-b pb-3 last:border-none">
            <div className="relative">
              <img src={shoe.img} alt={shoe.name} className="w-14 h-14 rounded-lg shadow-sm" />
              <span className="absolute -top-0 -right-2 bg-orange-500/90 shadow-md text-white text-[8px] px-1 py-0.5 rounded-full">
                HOT
              </span>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="text-sm font-semibold text-gray-700">{shoe.name}</h3>
              <span className="text-black font-bold text-sm">${shoe.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductView;
