import React from "react";
import ButtonProductCard from "./ButtonProductCard";

function ProductCard({ product, onAddToCart, deleteProduct, onEditProduct }) {
  console.log(deleteProduct);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <div
          className={`badge ${
            product.isActive ? "badge-success" : "badge-error"
          } self-end`}
        >
          {product.isActive ? "Active" : "Not Active"}
        </div>
        <div className="badge badge-outline self-end">{product.category}</div>
        <h2 className="card-title">{product.name}</h2>
        <div className="card-actions justify-between items-center">
          <ButtonProductCard
            product={product}
            onAddToCart={onAddToCart}
            deleteProduct={deleteProduct}
            onEditProduct={onEditProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
