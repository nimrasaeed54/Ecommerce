import shoesData from "../data/shoesData"; 

export default function ProductDetail() {
  const shoe = shoesData[0]; 

  return (
    <div className="flex flex-col md:flex-row max-w-screen-full  max-h-screen-full rounded-3xl items-center  p-6 mt-12 md:p-12 bg-white ">
      

      <div className="w-full md:w-1/2 flex justify-center">
        <img src={shoe.img} alt={shoe.name} className="w-full max-w-md object-contain rounded-lg shadow-lg" />
      </div>

   
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{shoe.name}</h1>

      
        <p className="text-xl text-gray-700 font-semibold">
          <span className="font-bold text-gray-900">Price:</span> {shoe.price}
        </p>

 
        {shoe.badges.length > 0 && (
          <div className="flex gap-2">
            {shoe.badges.map((badge, index) => (
              <span key={index} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                {badge.toUpperCase()}
              </span>
            ))}
          </div>
        )}

     
        <p className="text-gray-600">
          <span className="font-bold text-gray-900">Description:</span> {shoe.description}
        </p>

    
        <div className="flex items-center gap-3 mt-2">
          <span className="text-gray-900 font-bold">Available Colors:</span>
          <div className="flex gap-2">
            {shoe.colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

  
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
