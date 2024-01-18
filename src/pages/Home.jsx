import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import toast from "react-hot-toast";
import { getProducts } from "../features/productFeature";
import Cart from "../components/Cart";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [unpaidOrders, setUnpaidOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching products");
      }
    };

    const fetchUnpaidOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/orders/unpaid"
        );
        setCart(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching unpaid orders");
      }
    };

    fetchProducts();
    fetchUnpaidOrders();
  }, []);
  console.log(cart);
  const addToCart = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/orders",
        {
          products: [
            {
              product: productId,
              productPrice: 15000,
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

      setCart(response.data.products);
      console.log(response);
      toast.success("Product added to cart");
    } catch (error) {
      console.error(error);
      toast.error("Error adding product to cart");
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="bg-red-500 h-screen w-3/4 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <div className="flex flex-wrap gap-5">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => addToCart(product._id)}
            />
          ))}
        </div>
      </div>
      <div className="bg-blue-500 h-screen w-1/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default Home;
