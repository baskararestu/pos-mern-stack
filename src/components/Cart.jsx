import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Cart = ({ cart, setCart }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, order) => total + order.totalPrice, 0);
  };

  const handleProceed = async () => {
    try {
      setIsProcessing(true);

      const orderId = cart[0]._id;

      const response = await axios.patch(
        `http://localhost:3000/api/orders/${orderId}/complete`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCart([]);
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error completing order:", error);
      toast.error("Error completing order");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300 mb-4">
            {cart.map((order) => (
              <li key={order._id} className="py-2">
                <ul>
                  {order.products.map((item) => (
                    <li key={item._id}>
                      {item.quantity} x {item.product.name} - $
                      {item.productPrice}
                    </li>
                  ))}
                </ul>
                <div>Total Price: ${order.totalPrice}</div>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold mb-2">
            Total: ${getTotalPrice()}
          </div>
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 ${
              isProcessing && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleProceed}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Proceed"}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
