import React from "react";
import { useLocation } from "react-router-dom";

function ButtonProductCard({
  onAddToCart,
  deleteProduct,
  onEditProduct,
  product,
}) {
  const location = useLocation();
  const isProductRoute = location.pathname === "/products";

  return (
    <>
      {isProductRoute && (
        <>
          <button className="btn btn-primary" onClick={onEditProduct}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={deleteProduct}>
            Remove
          </button>
        </>
      )}
      {!isProductRoute && product.isActive && (
        <button className="btn btn-primary" onClick={onAddToCart}>
          Add to Cart
        </button>
      )}
      {!isProductRoute && !product.isActive && (
        <button className="btn btn-primary" onClick={onAddToCart} disabled>
          Add to Cart
        </button>
      )}
    </>
  );
}

export default ButtonProductCard;
