import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logged out successfully");
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          POS-APP
        </Link>
      </div>
      <div className="flex-none">
        {isLoggedIn ? (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/sales">Sales</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="">
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
