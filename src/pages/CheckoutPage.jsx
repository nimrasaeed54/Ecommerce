
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaCreditCard } from "react-icons/fa";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="max-w-screen-full bg-white rounded-3xl mx-auto p-6 mt-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 ">Checkout</h1>

      {orderPlaced ? (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-11/12 sm:w-1/2">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-gray-500 text-6xl" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Order Placed Successfully!</h2>
            <p className="text-gray-700 mt-4">Thank you for your purchase. Your order is being processed!</p>
            <div className="mt-6">
              <button
                className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 transition"
                onClick={() => navigate("/")}
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
          <div className="lg:col-span-2 space-y-6">
       
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Details</h2>
              <p className="text-gray-700"><strong>Name:</strong> John Doe</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Main Street, New York, NY, 10001</p>
              <p className="text-gray-700"><strong>Phone:</strong> +123 456 7890</p>
            </div>

        
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h2>
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-gray-600 text-xl" />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  className="w-1/2 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
          </div>


          <div className="bg-white shadow-md rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Order</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b pb-4">
                <img src="https://via.placeholder.com/60" alt="Nike Air Max" className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <p className="text-gray-900 font-medium">Nike Air Max</p>
                  <p className="text-gray-600 text-sm">Color: Black</p>
                  <p className="text-gray-600 text-sm">Quantity: 2</p>
                </div>
                <p className="text-gray-900 font-semibold ml-auto">$240</p>
              </div>
            </div>

     
            <div className="mt-4 text-gray-700">
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p>$240</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping:</p>
                <p>$10</p>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
                <p>Total:</p>
                <p>$250</p>
              </div>
            </div>

       
            <button
              className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              onClick={handlePlaceOrder}
            >
              Purchase - $250
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
