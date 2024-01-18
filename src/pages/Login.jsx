import React, { useState } from "react";
import loginAdmin from "../features/adminFeature";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginAdmin(email, password);

      setEmail("");
      setPassword("");
      await navigate("/");
      toast.success("Login Success");
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          DaisyUI
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <div>
            <button type="submit" className="btn btn-block btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
