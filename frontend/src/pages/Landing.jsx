// src/pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          CraftPal
        </h1>
        <nav className="flex flex-wrap gap-4 text-gray-700 text-sm md:text-base">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/project-tracker" className="hover:text-blue-600 transition">
            Project Tracker
          </Link>
          <Link to="/finance-tracker" className="hover:text-blue-600 transition">
            Finance Tracker
          </Link>
          <Link to="/material-tracker" className="hover:text-blue-600 transition">
            Material Tracker
          </Link>
          <Link to="/community" className="hover:text-blue-600 transition">
            Community
          </Link>
          <Link to="/shop" className="hover:text-blue-600 transition">
            Shop
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1">
        {/* Background image */}
        <img
          src="/images/Craft.jfif"
          alt="Crafts background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            Your All-in-One Craft Companion
          </h2>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl">
            Track. Create. Connect. Sell — all in one place with CraftPal.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} CraftPal. All rights reserved.
      </footer>
    </div>
  );
}
