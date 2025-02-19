
export default function Profile() {
    return (
      <div className="p-6 ml-0 mt-12 bg-white rounded-3xl max-w-screen-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>
  
        <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
        
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-gray-700">Email: johndoe@example.com</p>
              <p className="text-gray-700">Phone: +123 456 7890</p>
            </div>
          </div>
  
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
            <p className="text-gray-700">123 Main Street, New York, NY, 10001</p>
          </div>
  
       
  
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
            <div className="bg-gray-100 p-4 rounded-lg mt-2">
              <p className="text-gray-700">
                <strong>Order #12345</strong> - Nike Air Max - $120 - <span className="text-[#837DF9]">Delivered</span>
              </p>
              <p className="text-gray-700">
                <strong>Order #67890</strong> - Adidas Ultraboost - $150 - <span className="text-yellow-500">Processing</span>
              </p>
            </div>
          </div>
  
        
          <div className="mt-6">
            <button className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    );
  }
  