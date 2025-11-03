// src/pages/Login.jsx
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Later: call backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />

        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />

        <button 
          type="submit" 
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account? <a href="/register" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
