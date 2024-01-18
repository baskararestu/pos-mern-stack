import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-outline">{product.category}</div>
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(product._id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
