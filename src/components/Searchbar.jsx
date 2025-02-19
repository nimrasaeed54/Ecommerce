
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full  ml-10 max-w-md mx-auto">

      <button
        type="submit"
        className="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <FiSearch size={20} className="text-gray-500" />
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search or type a command..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </form>
  );
};

export default Searchbar;
