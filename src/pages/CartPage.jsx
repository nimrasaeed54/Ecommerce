
import { useState } from "react";
import shoesData from "../data/shoesData";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CartPage() {
  const navigate = useNavigate();

  const initialCart = [
    { ...shoesData[0], quantity: 1, selectedColor: shoesData[0].colors[0] },
    { ...shoesData[1], quantity: 1, selectedColor: shoesData[1].colors[1] },
  ];

  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-screen-full  bg-white rounded-3xl mx-auto p-6 mt-12 flex flex-col lg:flex-row gap-6">

      <div className="flex-1">
     
        <h1 className="text-3xl font-bold text-black mb-6 ">Shopping Cart</h1>
        {cart.length > 0 ? (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[#333]">
                <thead className="bg-gray-300 text-gray-900">
                  <tr className="text-left font-semibold">
                    <th className="p-4">Product</th>
                    <th className="p-4">Price</th>
                    <th className="p-4 text-center">Quantity</th>
                    <th className="p-4">Total</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4 flex items-center gap-4">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg border" />
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-gray-600 text-sm">Color:</span>
                            <div
                              className="w-5 h-5 rounded-full border"
                              style={{ backgroundColor: item.selectedColor }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-medium">${item.price}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <button className="bg-gray-400 text-white px-3 py-1 rounded-lg " onClick={() => decreaseQuantity(item.id)}>
                            -
                          </button>
                          <span className="text-lg font-semibold">{item.quantity}</span>
                          <button className="bg-gray-400 text-white px-3 py-1 rounded-lg " onClick={() => increaseQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="p-4 text-right">
                        <button className="text-red-500 hover:text-red-700 transition text-lg" onClick={() => removeFromCart(item.id)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>


      {cart.length > 0 && (
        <div className="w-full lg:w-1/3 bg-[#F4E6FD] shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-green-500 text-gray-900 text-lg py-3 rounded-lg font-semibold mt-4 "
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
