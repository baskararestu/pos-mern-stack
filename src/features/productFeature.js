import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

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

export { getProducts };
