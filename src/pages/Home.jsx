import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import toast from "react-hot-toast";
import { getProducts } from "../features/productFeature";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap">
      <div className="bg-red-500 h-screen w-3/4 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <div className="flex flex-wrap gap-5">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
      <div className="bg-blue-500 h-screen w-1/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {/* <Cart cart={cart} /> */}
      </div>
    </div>
  );
}

export default Home;
