
// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import shoesData from "../data/shoesData"; 

// const bgColors = ["#B7EAC8", "#B5B0F5", "#A9ECEC", "#FFC5D3"];

// export default function ProductList() {
//   const [sortOrder, setSortOrder] = useState("");

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   let sortedShoes = [...shoesData];
//   if (sortOrder === "low-to-high") {
//     sortedShoes.sort((a, b) => a.price - b.price);
//   } else if (sortOrder === "high-to-low") {
//     sortedShoes.sort((a, b) => b.price - a.price);
//   }

//   return (
//     <div className="w-full p-4 flex flex-col">
  
//       <div className="w-full flex justify-end items-center mb-4">
//         <h2 className="text-lg font-bold mr-4">Filters:</h2>
//         <select onChange={handleSortChange} className="border p-2 rounded bg-white text-black">
//           <option value="">Sort by</option>
//           <option value="low-to-high">Price: Low to High</option>
//           <option value="high-to-low">Price: High to Low</option>
//         </select>
//       </div>

 
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//         {sortedShoes.map((shoe, index) => (
//           <ProductCard 
//             key={shoe.id} 
//             product={{ 
//               title: shoe.name, 
//               image: shoe.img, 
//               price: `$${shoe.price}`, 
//               colors: shoe.colors, 
//               badges: shoe.badges 
//             }} 
//             bgColor={bgColors[index % bgColors.length]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import shoesData from "../data/shoesData";
import { useSearch } from "../context/SearchContext"; // Import Context Hook

const bgColors = ["#B7EAC8", "#B5B0F5", "#A9ECEC", "#FFC5D3"];

export default function ProductList() {
  const { searchQuery } = useSearch(); // Get Search Query from Context
  const [sortOrder, setSortOrder] = useState("");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  let filteredShoes = [...shoesData];

  // Apply Search Filter
  if (searchQuery) {
    filteredShoes = filteredShoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply Sorting
  if (sortOrder === "low-to-high") {
    filteredShoes.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    filteredShoes.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="w-full p-4 flex flex-col">
      {/* Sort Dropdown */}
      <div className="w-full flex justify-end items-center mb-4">
        <h2 className="text-lg font-bold mr-4">Filters:</h2>
        <select onChange={handleSortChange} className="border p-2 rounded bg-white text-black">
          <option value="">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredShoes.length > 0 ? (
          filteredShoes.map((shoe, index) => (
            <ProductCard 
              key={shoe.id} 
              product={{ 
                title: shoe.name, 
                image: shoe.img, 
                price: `$${shoe.price}`, 
                colors: shoe.colors, 
                badges: shoe.badges 
              }} 
              bgColor={bgColors[index % bgColors.length]}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full mt-4">No results found.</p>
        )}
      </div>
    </div>
  );
}
