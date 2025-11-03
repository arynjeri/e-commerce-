// src/pages/Register.jsx
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register attempt:", { name, email, password });
    // Later: call backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>

        <label className="block mb-2 text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />

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
          Register
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}
