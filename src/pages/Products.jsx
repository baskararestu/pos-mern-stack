// Products.js
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import toast from "react-hot-toast";
import { getProducts } from "../features/productFeature";

function Products() {
  const [products, setProducts] = useState([]);

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
    <div className="h-screen w-3/4 p-4 overflow-y-auto rounded-box">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
