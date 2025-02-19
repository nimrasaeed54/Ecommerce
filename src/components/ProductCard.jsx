
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, bgColor }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const navigate = useNavigate();

  const badgeColors = {
    new: "bg-blue-500/90 shadow-md",
    hot: "bg-orange-500/90 shadow-md",
  };

  const handleClick = () => {
    navigate("/productdetail");
  };

  return (
    <div 
      className="card bg-white w-36 md:w-72 lg:w-52  h-96 ml-0 shadow-lg overflow-hidden cursor-pointer transition hover:scale-[1.02]" 
      onClick={handleClick}
    >
      <div className="relative w-full h-80 flex items-center justify-center rounded-3xl" style={{ backgroundColor: bgColor }}>
        {product.badges?.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {product.badges.map((badge, index) => (
              <span
                key={index}
                className={`text-white text-xs font-bold py-1 px-3 rounded-full uppercase ${badgeColors[badge] || "bg-gray-500/90"}`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <img src={product.image} alt={product.title} className="object-contain w-40 h-40" />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-gray-900 text-lg font-semibold">{product.title}</h2>
      

        <div className="flex items-center justify-between ">
          <span className="text-black font-bold text-md">{product.price}</span>
        </div>
        <div className="mt-2 flex  gap-8">
          <span className="bg-gray-300 text-black text-xs font-semibold px-2 py-1 rounded-full self-start">Colors</span>
          <div className="flex items-center gap-1">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                className={`w-4 h-4 rounded-full border-2 transition-transform hover:scale-110 ${
                  selectedColor === color ? "border-gray-300 scale-110" : "border-none"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
