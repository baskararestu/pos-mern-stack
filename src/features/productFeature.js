// productApi.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

// const token = localStorage.getItem("token");
const getProducts = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token is missing");
    }

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const getProductById = async (productId, token) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token is missing");
    }

    const response = await axios.get(`${API_URL}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      `Error fetching product with ID ${productId}:`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const deleteProduct = async (productId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token is missing");
    }

    await axios.delete(`${API_URL}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const updateProduct = async (productId, updatedProductData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token is missing");
    }

    await axios.put(`${API_URL}/${productId}`, updatedProductData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(
      "Error updating product:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export { getProducts, getProductById, deleteProduct, updateProduct };
