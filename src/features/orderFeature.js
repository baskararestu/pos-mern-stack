import axios from "axios";

const addToCart = async (productId, token) => {
  try {
    const productResponse = await axios.get(
      `http://localhost:3000/api/products/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const product = productResponse.data;

    const response = await axios.post(
      "http://localhost:3000/api/orders",
      {
        products: [
          {
            product: productId,
            productPrice: product.price,
            quantity: 1,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchUnpaidOrders = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/orders/unpaid",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { addToCart, fetchUnpaidOrders };
