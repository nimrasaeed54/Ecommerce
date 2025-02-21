import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../context/SearchContext"; 
const Searchbar = () => {
  const { setSearchQuery } = useSearch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value); 
  };

  return (
    <div className="relative w-full item-center max-w-md mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a product..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <FiSearch size={20} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default Searchbar;
