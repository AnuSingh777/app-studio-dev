import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state for mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
        App Studio Dev
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-blue-600 hover:text-blue-700 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Navbar Links (Desktop and Tablet) */}
        <div className={`hidden md:flex space-x-8 items-center`}>
          <Link to="/features" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            Features
          </Link>
          <Link to="/portfolio" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            Portfolio
          </Link>
          <Link to="/testimonials" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            Testimonials
          </Link>
          <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            About
          </Link>
          <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-lg absolute top-16 left-0 right-0 px-4 py-6 z-40`}
      >
        <Link
          to="/features"
          className="block text-lg font-medium text-gray-700 py-2 hover:text-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)}
        >
          Features
        </Link>
        <Link
          to="/portfolio"
          className="block text-lg font-medium text-gray-700 py-2 hover:text-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          to="/testimonials"
          className="block text-lg font-medium text-gray-700 py-2 hover:text-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonials
        </Link>
        <Link
          to="/about"
          className="block text-lg font-medium text-gray-700 py-2 hover:text-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block text-lg font-medium text-gray-700 py-2 hover:text-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
