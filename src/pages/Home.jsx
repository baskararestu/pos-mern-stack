// Home.js
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import toast from "react-hot-toast";
import { deleteProduct, getProducts } from "../features/productFeature";
import Cart from "../components/Cart";
import { addToCart, fetchUnpaidOrders } from "../features/orderFeature";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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

    const fetchUnpaidOrdersData = async () => {
      try {
        const unpaidOrdersData = await fetchUnpaidOrders(token);
        setCart(unpaidOrdersData);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching unpaid orders");
      }
    };

    fetchProducts();
    fetchUnpaidOrdersData();
  }, [token]);

  const handleAddToCart = async (productId) => {
    try {
      const updatedCart = await addToCart(productId, token);
      setCart(updatedCart);
      toast.success("Product added to cart");

      const unpaidOrdersData = await fetchUnpaidOrders(token);
      setCart(unpaidOrdersData);
    } catch (error) {
      console.error(error);
      toast.error("Error adding product to cart");
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="h-screen w-3/4 p-4 overflow-y-auto rounded-box">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <div className="flex flex-wrap gap-5">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => handleAddToCart(product._id)}
              deleteProduct={handleDeleteProduct(product._id)}
            />
          ))}
        </div>
      </div>
      <div className="h-screen w-1/4 p-4 rounded-box shadow-xl card bg-base-200 ">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart && <Cart cart={cart} setCart={setCart} />}
      </div>
    </div>
  );
}

export default Home;
