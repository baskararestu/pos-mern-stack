import React from "react";

const Cart = ({ cart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, order) => total + order.totalPrice, 0);
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
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={() => {
              // Implement your logic for proceeding with the transaction
              alert("Proceeding with the transaction!");
            }}
          >
            Proceed
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
